import React, { useState, useRef } from 'react';
import {
  X,
  UploadCloud,
  Image as ImageIcon,
  Trash2,
  Check,
  RefreshCw,
  Layers,
  Plus,
  Copy,
} from 'lucide-react';
import { resolveAssetUrl } from '../../preview/assetUrls';
import type { MediaItem } from '../../types';
import { formatDate, formatFileSize } from '../../utils/format';

interface ImageStorageManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaLibrary: MediaItem[];
  onAddMedia: (file: File, name: string) => Promise<MediaItem>;
  onDeleteMedia: (id: string) => Promise<void>;
  onUpdateHomepageBackground: (url: string) => Promise<void>;
  currentHomepageBackground: string;
}

export const ImageStorageManagementModal: React.FC<ImageStorageManagementModalProps> = ({
  isOpen,
  onClose,
  mediaLibrary,
  onAddMedia,
  onDeleteMedia,
  onUpdateHomepageBackground,
  currentHomepageBackground,
}) => {
  const [activeTab, setActiveTab] = useState<'storage' | 'homepage'>('storage');
  const [newImageName, setNewImageName] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileSizeStr, setFileSizeStr] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!newImageName.trim()) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setNewImageName(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    }

    setFileSizeStr(formatFileSize(file.size));
    setSelectedFile(file);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || isUploading) return;
    setIsUploading(true);
    try {
      await onAddMedia(selectedFile, newImageName.trim() || 'Default Asset');
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setSelectedFile(null);
      setNewImageName('');
      setFileSizeStr('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      showToast('Gambar berhasil ditambahkan ke Image Storage Management!');
    } finally {
      setIsUploading(false);
    }
  };

  const handleHomepageBgFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || isUploading) return;
    setIsUploading(true);
    try {
      const media = await onAddMedia(file, `Background ${file.name}`);
      await onUpdateHomepageBackground(media.url);
      showToast('Background Halaman Utama berhasil diperbarui!');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200 font-season-sans select-none">
      <div className="bg-[#1A1A1A] border border-[#353535] text-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between bg-[#212121]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#282828] border border-[#3E3E3E] flex items-center justify-center text-stone-200 shadow-md shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white tracking-wide">
                  Image Storage Management
                </h2>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2E2E2E] text-stone-300 border border-stone-600">
                  Role Manager
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Kelola koleksi gambar default template & background halaman utama Pegadaian
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 bg-[#1E1E1E] border-b border-[#2A2A2A] flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('storage')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'storage'
                ? 'border-white text-white bg-[#2A2A2A]'
                : 'border-transparent text-stone-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Image Storage Default ({mediaLibrary.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('homepage')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'homepage'
                ? 'border-white text-white bg-[#2A2A2A]'
                : 'border-transparent text-stone-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Background Halaman Utama</span>
          </button>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="bg-stone-800 text-stone-100 border-b border-stone-700 px-4 py-2 text-xs font-medium flex items-center gap-2 shadow-inner">
            <Check className="w-4 h-4 text-stone-300 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {activeTab === 'storage' ? (
            <>
              {/* Upload Form Box */}
              <form
                onSubmit={handleUploadSubmit}
                className="bg-[#242424] border border-[#353535] rounded-xl p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-200 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-stone-300" />
                    Upload Image Default Baru
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Image yang diupload di sini akan otomatis muncul di pop-up "Upload Image" user
                    Product
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* File Picker Zone */}
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".svg,image/svg+xml,.png,image/png,.jpg,.jpeg,image/jpeg,.webp"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-[#444] hover:border-stone-400 bg-[#1A1A1A] hover:bg-[#222222] rounded-xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 min-h-[120px]"
                    >
                      <UploadCloud className="w-6 h-6 text-stone-300" />
                      <p className="text-xs font-bold text-stone-200">
                        {previewUrl ? 'Ganti File Gambar' : 'Pilih File Gambar'}
                      </p>
                      <p className="text-[10px] text-stone-400">Supports SVG, PNG, JPG, WebP</p>
                    </div>
                  </div>

                  {/* Image Details / Preview */}
                  <div className="flex flex-col justify-between space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-400 mb-1">
                        Nama / Label Gambar
                      </label>
                      <input
                        type="text"
                        value={newImageName}
                        onChange={(e) => setNewImageName(e.target.value)}
                        placeholder="Contoh: Hero Banner Promo Emas"
                        className="w-full bg-[#121212] border border-[#3A3A3A] rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-stone-400"
                      />
                    </div>

                    {previewUrl && (
                      <div className="flex items-center gap-3 bg-[#1A1A1A] p-2 rounded-lg border border-[#333]">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-12 h-12 object-cover rounded-md bg-black/40 border border-white/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate">
                            {newImageName || 'Untitled'}
                          </p>
                          <p className="text-[10px] text-stone-400">{fileSizeStr}</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!previewUrl}
                      className="w-full py-2 px-4 rounded-xl text-xs font-bold bg-stone-200 text-stone-900 hover:bg-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Simpan ke Repository Image Storage</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Gallery List of Default Images */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                    Daftar Image Storage Default ({mediaLibrary.length})
                  </h3>
                  <span className="text-[11px] text-stone-400">
                    Tersedia untuk semua komponen template & user Product
                  </span>
                </div>

                {mediaLibrary.length === 0 ? (
                  <div className="p-8 text-center bg-[#212121] rounded-xl border border-[#333] text-stone-400 text-xs">
                    Belum ada gambar default yang tersimpan. Upload gambar di atas untuk
                    menambahkan.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {mediaLibrary.map((img) => (
                      <div
                        key={img.id}
                        className="bg-[#242424] border border-[#353535] hover:border-stone-500 rounded-xl p-2.5 flex flex-col justify-between transition-all group relative overflow-hidden"
                      >
                        {/* Thumbnail */}
                        <div className="w-full h-28 bg-[#121212] rounded-lg overflow-hidden relative flex items-center justify-center mb-2 border border-white/5">
                          <img
                            src={resolveAssetUrl(img.url)}
                            alt={img.name}
                            className="max-h-full max-w-full object-contain p-1 group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          {img.isSystemDefault && (
                            <span className="absolute top-1.5 left-1.5 bg-[#2E2E2E] text-stone-300 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-stone-600">
                              SYSTEM
                            </span>
                          )}
                        </div>

                        {/* Title & Metadata */}
                        <div className="mb-2">
                          <p className="text-xs font-bold text-white truncate" title={img.name}>
                            {img.name}
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-stone-400 mt-0.5">
                            <span>{img.size || 'Default'}</span>
                            <span>{formatDate(img.createdAt)}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-1.5 pt-2 border-t border-[#333]">
                          <button
                            type="button"
                            onClick={() => handleCopyUrl(img.id, img.url)}
                            className="flex-1 py-1 px-2 bg-[#333] hover:bg-[#444] text-white rounded-lg text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                            title="Salin Data/URL Image"
                          >
                            {copiedId === img.id ? (
                              <>
                                <Check className="w-3 h-3 text-stone-300" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-stone-300" />
                                <span>Copy URL</span>
                              </>
                            )}
                          </button>

                          {!img.isSystemDefault && (
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Hapus gambar default "${img.name}" dari storage?`)) {
                                  void onDeleteMedia(img.id);
                                  showToast('Gambar berhasil dihapus dari storage');
                                }
                              }}
                              className="p-1 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                              title="Hapus Gambar"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Homepage Background Management Tab */
            <div className="space-y-6">
              <div className="bg-[#242424] border border-[#353535] rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Background Halaman Utama Currently Active
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Gambar ini digunakan sebagai latar belakang utama saat user membuka halaman
                      utama/landing page.
                    </p>
                  </div>

                  <input
                    ref={bgFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleHomepageBgFile}
                  />

                  <button
                    type="button"
                    onClick={() => bgFileInputRef.current?.click()}
                    className="px-4 py-2 bg-stone-200 text-stone-900 hover:bg-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Ganti Background</span>
                  </button>
                </div>

                {/* Live Preview Box */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[#3F3F3F] bg-black/60 flex items-center justify-center group">
                  <img
                    src={resolveAssetUrl(currentHomepageBackground || '/background.png')}
                    alt="Current Main Homepage Background"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/background.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      Current Active Background
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        void onUpdateHomepageBackground('/background.png');
                        showToast('Background direset ke default sistem (/background.png)');
                      }}
                      className="px-3 py-1 bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white rounded-full text-xs transition-colors backdrop-blur-md border border-white/10 cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset to System Default</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#212121] border-t border-[#2A2A2A] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-stone-300 bg-[#333] hover:bg-[#444] transition-colors cursor-pointer"
          >
            Selesai / Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
