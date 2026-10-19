import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, Lock, Unlock } from 'lucide-react';
import { isEditor, isManager, isProduct } from '../../domain/access';
import { resolveAssetUrl } from '../../preview/assetUrls';
import type { AppUser, MediaItem, PlacedSection } from '../../types';
import { cleanComponentName } from '../../utils/format';
import { ImageUploadModal } from '../media/ImageUploadModal';

export const getRecommendedMaxLength = (text: string): number => {
  const len = text.trim().length;
  if (len <= 10) return 20;
  if (len <= 20) return 30;
  if (len <= 35) return 50;
  if (len <= 60) return 80;
  if (len <= 100) return 150;
  if (len <= 200) return 250;
  if (len <= 350) return 450;
  return Math.ceil((len + 50) / 50) * 50;
};

interface EditDrawerProps {
  section: PlacedSection | null;
  onClose: () => void;
  onUpdateSection: (
    instanceId: string,
    updatedValues: Record<string, string>,
    newHtml?: string,
    lockedFields?: Record<string, boolean>,
  ) => void;
  currentUser: AppUser;
  activeInlineKey: string | null;
  mediaLibrary: MediaItem[];
}

const ImagePreviewField: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return <span className="text-xs text-stone-400 font-medium select-none">No image</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="max-h-full max-w-full object-contain p-2"
      onError={() => setHasError(true)}
    />
  );
};

export const EditDrawer: React.FC<EditDrawerProps> = ({
  section,
  onClose,
  onUpdateSection,
  currentUser,
  activeInlineKey,
  mediaLibrary,
}) => {
  const [customValues, setCustomValues] = useState<Record<string, string>>({});
  const [htmlContent, setHtmlContent] = useState('');
  const [lockedFields, setLockedFields] = useState<Record<string, boolean>>({});
  const [detectedFields, setDetectedFields] = useState<
    {
      key: string;
      label: string;
      currentVal: string;
      defaultVal: string;
      maxLen: number;
      isImage?: boolean;
      companionKey?: string;
    }[]
  >([]);
  const [activeImageModal, setActiveImageModal] = useState<{
    fieldKey: string;
    label: string;
    currentVal: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'text' | 'image'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isRoleManager = isManager(currentUser);
  const isAdminRole = currentUser.role === 'admin';
  const isProductRole = isProduct(currentUser);
  const canManageLocks = isEditor(currentUser);

  useEffect(() => {
    if (activeInlineKey && fieldRefs.current[activeInlineKey]) {
      fieldRefs.current[activeInlineKey]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const inputEl = fieldRefs.current[activeInlineKey]?.querySelector(
        'input, textarea',
      ) as HTMLElement | null;
      if (inputEl && !(inputEl as HTMLInputElement).disabled) {
        inputEl.focus();
      }
    }
  }, [activeInlineKey]);

  useEffect(() => {
    if (section) {
      setCustomValues({ ...section.customValues });
      setHtmlContent(section.htmlContent);
      setLockedFields({ ...(section.lockedFields || {}) });

      const parser = new DOMParser();
      const doc = parser.parseFromString(section.htmlContent, 'text/html');

      const fields: {
        key: string;
        label: string;
        currentVal: string;
        defaultVal: string;
        maxLen: number;
        isImage?: boolean;
        companionKey?: string;
      }[] = [];
      const seenKeys = new Set<string>();

      // 1. Scan for explicit [data-editable] and [data-editable-image]
      const editableEls = doc.querySelectorAll('[data-editable], [data-editable-image]');
      editableEls.forEach((el) => {
        const isExplicitImg = el.hasAttribute('data-editable-image');
        const key = el.getAttribute('data-editable-image') || el.getAttribute('data-editable');
        if (key && !seenKeys.has(key)) {
          seenKeys.add(key);
          const isImg =
            isExplicitImg ||
            el.tagName === 'IMG' ||
            key.toLowerCase().includes('logo') ||
            key.toLowerCase().includes('img') ||
            key.toLowerCase().includes('image') ||
            key.toLowerCase().includes('avatar') ||
            key.toLowerCase().includes('bg') ||
            key.toLowerCase().includes('photo');

          const defaultVal =
            el.tagName === 'IMG'
              ? ((el as HTMLImageElement).getAttribute('src') ?? '')
              : (el.textContent?.trim() ?? '');

          const isMobileKey = key.startsWith('m-');
          const baseKey = isMobileKey ? key.replace(/^m-/, '') : key;
          const companionKey = isMobileKey ? baseKey : `m-${baseKey}`;

          const currentVal =
            section.customValues[key] ?? section.customValues[companionKey] ?? defaultVal;
          const maxLen = getRecommendedMaxLength(defaultVal);

          // Human friendly label
          let cleanLabel = baseKey.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

          if (
            isImg &&
            !cleanLabel.toLowerCase().includes('gambar') &&
            !cleanLabel.toLowerCase().includes('image') &&
            !cleanLabel.toLowerCase().includes('logo')
          ) {
            cleanLabel = `${cleanLabel} (Gambar)`;
          }

          fields.push({
            key,
            label: cleanLabel,
            currentVal,
            defaultVal,
            maxLen: maxLen < 30 ? 30 : maxLen,
            isImage: isImg,
            companionKey,
          });
        }
      });

      // 2. Scan all <img> tags that might not have explicit attributes
      const allImgs = doc.querySelectorAll('img');
      allImgs.forEach((img, idx) => {
        const existingKey =
          img.getAttribute('data-editable-image') || img.getAttribute('data-editable');
        const key = existingKey || `img-sec-${idx + 1}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          const defaultVal = img.getAttribute('src') || '/background.png';
          const currentVal = section.customValues[key] ?? defaultVal;
          const alt = img.getAttribute('alt');
          const label = alt ? `Gambar: ${alt}` : `Gambar Komponen ${idx + 1}`;
          fields.push({
            key,
            label,
            currentVal,
            defaultVal,
            maxLen: 200,
            isImage: true,
          });
        }
      });

      // 3. Fallback: If section has NO explicit text data-editable tags, extract key text elements
      if (fields.filter((f) => !f.isImage).length === 0) {
        const textNodes = doc.querySelectorAll('h1, h2, h3, h4, h5, h6, p, button, a');
        textNodes.forEach((el, idx) => {
          const text = el.textContent?.trim() || '';
          if (text.length > 0 && el.children.length === 0) {
            const key = `text-field-${idx + 1}`;
            if (!seenKeys.has(key)) {
              seenKeys.add(key);
              const maxLen = getRecommendedMaxLength(text);
              fields.push({
                key,
                label: `${el.tagName.toUpperCase()} ${idx + 1}: ${text.slice(0, 24)}...`,
                currentVal: section.customValues[key] ?? text,
                defaultVal: text,
                maxLen: maxLen < 30 ? 30 : maxLen,
                isImage: false,
              });
            }
          }
        });
      }

      setDetectedFields(fields);
    }
  }, [section]);

  if (!section) return null;

  const handleFieldChange = (
    key: string,
    value: string,
    lang: 'id' | 'en' | 'shared',
    maxLen?: number,
  ) => {
    const isLockedForProd = !!lockedFields[key] || !!section.isLocked;
    const canEdit = isRoleManager || isAdminRole || (isProductRole && !isLockedForProd);
    if (!canEdit) return;
    const finalVal = maxLen !== undefined ? value.slice(0, maxLen) : value;

    // Detect companion key for seamless desktop <-> mobile sync
    const isMobileKey = key.startsWith('m-');
    const baseKey = isMobileKey ? key.replace(/^m-/, '') : key;
    const companionKey = isMobileKey ? baseKey : `m-${baseKey}`;

    let updated: Record<string, string> = { ...customValues };

    if (lang === 'id') {
      updated[key] = finalVal;
      updated[`${key}_id`] = finalVal;
      // Auto-sync companion key (e.g. mobile <-> desktop)
      updated[companionKey] = finalVal;
      updated[`${companionKey}_id`] = finalVal;
    } else if (lang === 'en') {
      updated[`${key}_en`] = finalVal;
      updated[`${companionKey}_en`] = finalVal;
    } else {
      updated[key] = finalVal;
      updated[companionKey] = finalVal;
    }

    setCustomValues(updated);
    onUpdateSection(section.instanceId, updated, htmlContent, lockedFields);
  };

  const handleToggleFieldLock = (key: string) => {
    if (!canManageLocks) return;
    const nextLocked = { ...lockedFields, [key]: !lockedFields[key] };
    setLockedFields(nextLocked);
    onUpdateSection(section.instanceId, customValues, htmlContent, nextLocked);
  };

  const filteredFields = detectedFields.filter((field) => {
    // 1. Tab filter
    if (activeTab === 'text' && field.isImage) return false;
    if (activeTab === 'image' && !field.isImage) return false;
    // 2. Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        field.label.toLowerCase().includes(q) ||
        field.key.toLowerCase().includes(q) ||
        field.currentVal.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalTextCount = detectedFields.filter((f) => !f.isImage).length;
  const totalImgCount = detectedFields.filter((f) => f.isImage).length;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingTop: '20px',
        paddingBottom: '24px',
        paddingLeft: '16px',
        paddingRight: '16px',
        background: '#1A1A1A',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '16px',
        display: 'flex',
      }}
      className="w-full h-full border-l border-white/5 shadow-2xl shrink-0 z-20 font-season-sans select-none"
    >
      {/* Header Title with Role Manager Exclusive Badge */}
      <div className="w-full flex items-center justify-between shrink-0 gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <h3 className="text-sm font-semibold text-white truncate" title={section.name}>
              Edit Komponen: {cleanComponentName(section.name)}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                isRoleManager
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : isAdminRole
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    : isProductRole
                      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                      : 'bg-stone-500/20 text-stone-300 border-stone-500/30'
              }`}
            >
              {isRoleManager
                ? 'Role Manager'
                : isAdminRole
                  ? 'Admin'
                  : isProductRole
                    ? 'Team Product'
                    : 'Mode Lihat'}
            </span>
            <span className="text-[10px] text-stone-400">
              {detectedFields.length} field terdeteksi
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          title="Tutup Panel Edit"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#353535] shrink-0" />

      {/* Role Banner: Product role guidance or locked component notice */}
      {isProductRole ? (
        section.isLocked ? (
          <div className="w-full bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-200 shrink-0">
            <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Komponen Terkunci oleh Team Admin</span>
            </div>
            <p className="text-[11px] text-amber-200/80 leading-relaxed">
              Komponen ini telah dikunci oleh <strong>Team Admin</strong> sehingga konten tidak
              dapat diubah oleh Team Product.
            </p>
          </div>
        ) : (
          <div className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-xs text-emerald-200 shrink-0">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Edit Konten Template (Team Product)</span>
            </div>
            <p className="text-[11px] text-emerald-200/80 leading-relaxed">
              Anda dapat mengedit teks &amp; gambar pada komponen ini. Konten yang dikunci oleh Team
              Admin tidak dapat diubah.
            </p>
          </div>
        )
      ) : !isRoleManager && !isAdminRole ? (
        <div className="w-full bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-200 shrink-0">
          <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>Mode Lihat Saja</span>
          </div>
          <p className="text-[11px] text-amber-200/80 leading-relaxed">
            Akun Anda saat ini tidak memiliki izin untuk mengedit konten komponen.
          </p>
        </div>
      ) : null}

      {/* Filter Tabs & Search Bar (Only interactive for Role Manager) */}
      <div className="w-full space-y-2 shrink-0">
        <div className="flex items-center gap-1 p-1 bg-[#121212] rounded-lg border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#2A2A2A] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Semua ({detectedFields.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'text'
                ? 'bg-[#2A2A2A] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Teks ({totalTextCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('image')}
            className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'image'
                ? 'bg-[#2A2A2A] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Gambar ({totalImgCount})
          </button>
        </div>

        {detectedFields.length > 3 && (
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari field teks atau gambar..."
              className="w-full bg-[#121212] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-stone-400"
            />
          </div>
        )}
      </div>

      {/* Fields List Container */}
      <div className="flex-1 w-full overflow-y-auto space-y-5 pr-1 scrollbar-thin scrollbar-thumb-stone-700">
        {filteredFields.length === 0 ? (
          <div className="py-12 text-center w-full text-stone-400 text-xs">
            {searchQuery
              ? 'Tidak ada field yang sesuai dengan pencarian.'
              : 'Tidak ada field teks atau gambar pada kategori ini.'}
          </div>
        ) : (
          filteredFields.map((field) => {
            const isImg = field.isImage;
            const maxLen = field.maxLen;
            const valId =
              customValues[`${field.key}_id`] ?? customValues[field.key] ?? field.defaultVal;
            const valEn = customValues[`${field.key}_en`] ?? valId;
            const isLockedForProd = !!lockedFields[field.key] || !!section.isLocked;
            const canEditField =
              isRoleManager || isAdminRole || (isProductRole && !isLockedForProd);
            const isHighlighted = activeInlineKey === field.key;
            const isLongText = !isImg && (maxLen > 65 || valId.includes('\n') || valId.length > 50);

            return (
              <div
                key={field.key}
                ref={(el) => {
                  fieldRefs.current[field.key] = el;
                }}
                className={`flex flex-col gap-2.5 p-3 rounded-xl border transition-all ${
                  isHighlighted
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-md ring-1 ring-emerald-500/40'
                    : 'border-white/5 bg-[#141414] hover:border-white/10'
                } ${canEditField ? 'opacity-100' : 'opacity-60'}`}
              >
                {/* Field Label & Type Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-semibold text-white truncate" title={field.label}>
                      {field.label}
                    </span>
                    {field.companionKey && (
                      <span
                        className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium shrink-0"
                        title="Sinkron otomatis untuk Desktop & Mobile"
                      >
                        Desktop & Mobile
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {canManageLocks ? (
                      <button
                        type="button"
                        onClick={() => handleToggleFieldLock(field.key)}
                        className={`p-1 rounded text-xs transition-colors cursor-pointer ${
                          lockedFields[field.key]
                            ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
                            : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                        }`}
                        title={
                          lockedFields[field.key]
                            ? 'Buka Kunci Field'
                            : 'Kunci Field (Hanya Team Admin/Manager)'
                        }
                      >
                        {lockedFields[field.key] ? (
                          <Lock className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Unlock className="w-3.5 h-3.5" />
                        )}
                      </button>
                    ) : isLockedForProd ? (
                      <span
                        className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 flex items-center gap-1 font-medium border border-amber-500/30"
                        title={
                          section.isLocked
                            ? 'Komponen dikunci oleh Team Admin'
                            : 'Field dikunci oleh Team Admin'
                        }
                      >
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>Terkunci</span>
                      </span>
                    ) : null}
                    <span className="text-[10px] text-stone-400">
                      {isImg ? 'GAMBAR' : `Maks ${maxLen}`}
                    </span>
                  </div>
                </div>

                {/* Field Input (Image or Text) */}
                {isImg ? (
                  <div className="space-y-2">
                    {/* Thumbnail Preview */}
                    <div className="w-full h-24 bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center p-2 relative group">
                      <ImagePreviewField src={resolveAssetUrl(valId)} alt={field.label} />
                      <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] text-stone-300 truncate max-w-[150px]">
                        {valId ? valId.split('/').pop() || 'image' : 'Kosong'}
                      </div>
                    </div>

                    {/* Image Action Buttons */}
                    {canEditField && (
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveImageModal({
                              fieldKey: field.key,
                              label: field.label,
                              currentVal: valId,
                            });
                          }}
                          className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Ganti Gambar / Upload</span>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              handleFieldChange(field.key, '/background.png', 'shared')
                            }
                            className="flex-1 py-1 px-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-[11px] transition-colors cursor-pointer truncate"
                            title="Gunakan Background Default Sistem (/background.png)"
                          >
                            Set /background.png
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const inputUrl = prompt('Masukkan URL gambar:', valId);
                              if (inputUrl !== null && inputUrl.trim() !== '') {
                                handleFieldChange(field.key, inputUrl.trim(), 'shared');
                              }
                            }}
                            className="py-1 px-2.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-[11px] transition-colors cursor-pointer shrink-0"
                            title="Input URL Langsung"
                          >
                            URL
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {/* Indonesian Text Box */}
                    <div className="w-full bg-[#0E0E0E] rounded-lg p-2.5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-stone-400">
                        <div className="flex items-center gap-1">
                          <span>🇮🇩</span>
                          <span>Bahasa Indonesia</span>
                        </div>
                        <span className={valId.length > maxLen ? 'text-rose-400 font-bold' : ''}>
                          {valId.length}/{maxLen}
                        </span>
                      </div>

                      {isLongText ? (
                        <textarea
                          rows={3}
                          value={valId}
                          disabled={!canEditField}
                          onChange={(e) =>
                            canEditField &&
                            handleFieldChange(field.key, e.target.value, 'id', maxLen)
                          }
                          className={`w-full bg-transparent border-none outline-none text-xs leading-relaxed resize-y focus:ring-0 ${
                            canEditField ? 'text-white' : 'text-stone-500 cursor-not-allowed'
                          }`}
                          placeholder="Masukkan teks..."
                        />
                      ) : (
                        <input
                          type="text"
                          value={valId}
                          disabled={!canEditField}
                          onChange={(e) =>
                            canEditField &&
                            handleFieldChange(field.key, e.target.value, 'id', maxLen)
                          }
                          className={`w-full bg-transparent border-none outline-none text-xs focus:ring-0 ${
                            canEditField ? 'text-white' : 'text-stone-500 cursor-not-allowed'
                          }`}
                          placeholder="Masukkan teks..."
                        />
                      )}
                    </div>

                    {/* English Text Box */}
                    <div className="w-full bg-[#0E0E0E] rounded-lg p-2.5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-stone-400">
                        <div className="flex items-center gap-1">
                          <span>🇬🇧</span>
                          <span>Bahasa Inggris (English)</span>
                        </div>
                        <span className={valEn.length > maxLen ? 'text-rose-400 font-bold' : ''}>
                          {valEn.length}/{maxLen}
                        </span>
                      </div>

                      {isLongText ? (
                        <textarea
                          rows={3}
                          value={valEn}
                          disabled={!canEditField}
                          onChange={(e) =>
                            canEditField &&
                            handleFieldChange(field.key, e.target.value, 'en', maxLen)
                          }
                          className={`w-full bg-transparent border-none outline-none text-xs leading-relaxed resize-y focus:ring-0 ${
                            canEditField ? 'text-white' : 'text-stone-500 cursor-not-allowed'
                          }`}
                          placeholder="Enter English text..."
                        />
                      ) : (
                        <input
                          type="text"
                          value={valEn}
                          disabled={!canEditField}
                          onChange={(e) =>
                            canEditField &&
                            handleFieldChange(field.key, e.target.value, 'en', maxLen)
                          }
                          className={`w-full bg-transparent border-none outline-none text-xs focus:ring-0 ${
                            canEditField ? 'text-white' : 'text-stone-500 cursor-not-allowed'
                          }`}
                          placeholder="Enter English text..."
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Pop-up Upload Image with Image Storage */}
      {activeImageModal && (
        <ImageUploadModal
          isOpen={Boolean(activeImageModal)}
          onClose={() => setActiveImageModal(null)}
          onSelectImage={(newUrl) => {
            if (activeImageModal) {
              handleFieldChange(activeImageModal.fieldKey, newUrl, 'shared');
            }
          }}
          mediaLibrary={mediaLibrary}
          fieldLabel={activeImageModal.label}
          currentValue={activeImageModal.currentVal}
        />
      )}
    </div>
  );
};
