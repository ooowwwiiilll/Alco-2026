import React, { useState, useEffect } from 'react';
import { X, Play, FileText } from 'lucide-react';
import type { PageTemplate } from '../../types';
import { cleanComponentName } from '../../utils/format';

interface UseTemplateModalProps {
  isOpen: boolean;
  template: PageTemplate | null;
  onClose: () => void;
  onConfirm: (template: PageTemplate, fileName: string) => void;
}

export const UseTemplateModal: React.FC<UseTemplateModalProps> = ({
  isOpen,
  template,
  onClose,
  onConfirm,
}) => {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (template && isOpen) {
      setFileName(cleanComponentName(template.name));
      setError('');
    }
  }, [template, isOpen]);

  if (!isOpen || !template) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = fileName.trim();
    if (!trimmed) {
      setError('Silakan masukkan nama file / halaman yang dikerjakan');
      return;
    }

    onConfirm(template, trimmed);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 select-none font-season-sans tracking-[0.04em]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 font-season-sans tracking-[0.04em]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-xs">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-stone-900 tracking-tight">Use Template</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700">
              {error}
            </div>
          )}

          {/* Template Info Card */}
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                Source Template
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                {template.sections.length} Sections
              </span>
            </div>
            <div className="text-xs font-bold text-stone-900 truncate">{template.name}</div>
            {template.description && (
              <p className="text-[11px] text-stone-500 line-clamp-2">{template.description}</p>
            )}
          </div>

          {/* File / Project Name Input */}
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              File / Project Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                <FileText className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="e.g., Landing Page Promo Q3"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-stone-500 font-medium text-stone-900 placeholder:text-stone-400"
                autoFocus
                onFocus={(e) => e.target.select()}
              />
            </div>
            <p className="text-[10px] text-stone-400 mt-1.5 leading-tight">
              This name will appear as the active title in the Canvas Preview.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#000000] hover:bg-[#1a1a1a] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Open in Canvas</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
