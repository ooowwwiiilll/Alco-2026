import React, { useState, useRef } from 'react';
import {
  X,
  UploadCloud,
  Image as ImageIcon,
  Check,
  Search,
  Layers,
  Link as LinkIcon,
} from 'lucide-react';
import { resolveAssetUrl } from '../../preview/assetUrls';
import { uploadImage } from '../../services/media';
import type { MediaItem } from '../../types';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
  mediaLibrary: MediaItem[];
  fieldLabel?: string;
  currentValue?: string;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  onSelectImage,
  mediaLibrary,
  fieldLabel = 'Image Field',
  currentValue = '',
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'storage'>('storage');
  const [searchQuery, setSearchQuery] = useState('');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const filteredStorageImages = mediaLibrary.filter(
    (img) =>
      img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError('');
  };

  const handleConfirmUpload = async () => {
    if (selectedFile) {
      setIsUploading(true);
      try {
        onSelectImage(await uploadImage(selectedFile));
        onClose();
      } catch (failure) {
        setError(failure instanceof Error ? failure.message : 'Upload gagal.');
      } finally {
        setIsUploading(false);
      }
    } else if (customUrlInput.trim()) {
      onSelectImage(customUrlInput.trim());
      onClose();
    }
  };

  const handleSelectFromStorage = (url: string) => {
    onSelectImage(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150 font-season-sans select-none">
      <div className="bg-[#1A1A1A] border border-[#353535] text-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between bg-[#212121]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#282828] border border-[#3E3E3E] flex items-center justify-center text-stone-200 shrink-0">
              <UploadCloud className="w-5 h-5 text-stone-200" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">Upload Image</h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Pilih atau upload gambar untuk{' '}
                <span className="text-white font-medium">{fieldLabel}</span>
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

        {/* Navigation Tabs */}
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
            <Layers className="w-4 h-4 text-stone-300" />
            <span>Image Storage ({mediaLibrary.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'upload'
                ? 'border-white text-white bg-[#2A2A2A]'
                : 'border-transparent text-stone-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <UploadCloud className="w-4 h-4 text-stone-300" />
            <span>Upload Local File / URL</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
          {activeTab === 'storage' ? (
            <div className="space-y-4">
              {/* Image Storage Section Info & Search */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#242424] p-3 rounded-xl border border-[#353535]">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <ImageIcon className="w-4 h-4 text-stone-300 shrink-0" />
                  <span>
                    Koleksi Default Image dari <strong className="text-white">Role Manager</strong>
                  </span>
                </div>

                <div className="relative w-full sm:w-56">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari image default..."
                    className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-stone-400"
                  />
                </div>
              </div>

              {/* Grid of Default Images */}
              {filteredStorageImages.length === 0 ? (
                <div className="p-8 text-center bg-[#212121] rounded-xl border border-[#333] text-stone-400 text-xs">
                  {searchQuery
                    ? 'Tidak ada gambar yang cocok dengan pencarian.'
                    : 'Belum ada gambar default tersimpan di Image Storage. Pengguna Role Manager dapat mengupload gambar default di menu Image Storage Management.'}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredStorageImages.map((img) => {
                    const isSelected = currentValue === img.url;
                    return (
                      <div
                        key={img.id}
                        onClick={() => handleSelectFromStorage(img.url)}
                        className={`bg-[#242424] border rounded-xl p-2.5 flex flex-col justify-between transition-all cursor-pointer group relative overflow-hidden ${
                          isSelected
                            ? 'border-white bg-white/10 ring-1 ring-white/40'
                            : 'border-[#353535] hover:border-stone-500 hover:bg-[#2A2A2A]'
                        }`}
                      >
                        {/* Image Preview Box */}
                        <div className="w-full h-28 bg-[#121212] rounded-lg overflow-hidden relative flex items-center justify-center mb-2 border border-white/5">
                          <img
                            src={resolveAssetUrl(img.url)}
                            alt={img.name}
                            className="max-h-full max-w-full object-contain p-1 group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                              <span className="bg-white text-stone-900 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                <Check className="w-3 h-3 text-stone-900" />
                                Terpilih
                              </span>
                            </div>
                          )}
                          {img.isSystemDefault && (
                            <span className="absolute top-1.5 left-1.5 bg-[#2E2E2E] text-stone-300 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-stone-600">
                              SYSTEM
                            </span>
                          )}
                        </div>

                        {/* Image Label & Action */}
                        <div className="flex items-center justify-between gap-1">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-white truncate" title={img.name}>
                              {img.name}
                            </p>
                            <p className="text-[10px] text-stone-400 truncate">
                              {img.size || 'Default'}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="px-2.5 py-1 bg-stone-200 text-stone-900 hover:bg-white text-[10px] font-bold rounded-lg shrink-0 transition-colors"
                          >
                            Pilih
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Upload File / Custom URL Tab */
            <div className="space-y-5">
              {/* Drag & Drop File Picker Zone */}
              <div className="bg-[#242424] border border-[#353535] rounded-xl p-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".svg,image/svg+xml,.png,image/png,.jpg,.jpeg,image/jpeg,.webp"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#444] hover:border-stone-400 bg-[#1A1A1A] hover:bg-[#222222] rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 min-h-[140px]"
                >
                  <UploadCloud className="w-8 h-8 text-stone-300" />
                  <p className="text-xs font-bold text-stone-200">
                    {previewUrl
                      ? 'Ganti File Gambar'
                      : 'Klik untuk Pilih File Gambar dari Perangkat'}
                  </p>
                  <p className="text-[11px] text-stone-400">Mendukung format SVG, PNG, JPG, WebP</p>
                </div>

                {previewUrl && (
                  <div className="mt-4 flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-xl border border-[#333]">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-14 h-14 object-contain rounded-lg bg-black/40 border border-white/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">
                        Preview File Terpilih
                      </p>
                      <p className="text-[10px] text-stone-300">Siap digunakan</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPreviewUrl(null)}
                      className="text-xs text-rose-400 hover:text-rose-300 p-1"
                    >
                      Batal
                    </button>
                  </div>
                )}
              </div>

              {/* Or Paste Custom Image URL */}
              <div className="bg-[#242424] border border-[#353535] rounded-xl p-4 space-y-2">
                <label className="text-xs font-bold text-stone-300 flex items-center gap-2">
                  <LinkIcon className="w-3.5 h-3.5 text-stone-400" />
                  Atau Tempel URL Gambar External
                </label>
                <input
                  type="text"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="https://example.com/image.png"
                  className="w-full bg-[#121212] border border-[#3A3A3A] rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-stone-400"
                />
              </div>
            </div>
          )}
        </div>

        {error && (
          <p role="alert" className="px-6 py-2 text-xs text-rose-400">
            {error}
          </p>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#212121] border-t border-[#2A2A2A] flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-stone-400 hover:text-white bg-transparent transition-colors cursor-pointer"
          >
            Batal
          </button>

          {activeTab === 'upload' && (
            <button
              type="button"
              onClick={handleConfirmUpload}
              disabled={(!selectedFile && !customUrlInput.trim()) || isUploading}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white text-stone-900 hover:bg-stone-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-stone-900" />
              <span>Gunakan Gambar Ini</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
