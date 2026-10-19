import React, { useState } from 'react';
import { X, Code, Sparkles, Eye, Plus } from 'lucide-react';
import { createId } from '../../domain/ids';
import { sanitizeHtml } from '../../preview/sanitize';
import type { ComponentCategory, SectionTemplate } from '../../types';

const COMPONENT_CATEGORIES = ['CUSTOM', 'HERO', 'PRODUCTS', 'CONTENT', 'LANDING', 'FOOTERS'];

interface AddCustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: SectionTemplate) => Promise<void>;
}

export const AddCustomModal: React.FC<AddCustomModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<ComponentCategory>('CUSTOM');
  const [htmlContent, setHtmlContent] = useState('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleInsertPresetSnippet = (snippetType: 'card' | 'badge' | 'button' | 'list') => {
    let snippet = '';
    if (snippetType === 'card') {
      snippet = `<div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2">
  <h3 class="text-sm font-bold text-stone-900" data-editable="title">Custom Title</h3>
  <p class="text-xs text-stone-500" data-editable="description">Enter description text here.</p>
</div>`;
    } else if (snippetType === 'badge') {
      snippet = `<div class="p-3 bg-stone-900 text-white rounded-xl shadow-xs flex items-center justify-between">
  <span class="text-xs font-semibold" data-editable="promo">Special Offer 20% Off</span>
  <button class="px-2.5 py-1 bg-white text-stone-950 font-bold text-[10px] rounded-lg">Claim</button>
</div>`;
    } else if (snippetType === 'button') {
      snippet = `<div class="p-3 bg-stone-100 rounded-xl border border-stone-200 text-center">
  <button class="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-xs">
    Click Here
  </button>
</div>`;
    } else if (snippetType === 'list') {
      snippet = `<div class="p-3 bg-white rounded-xl border border-stone-200 space-y-1.5">
  <div class="text-xs font-bold text-stone-800">Custom List</div>
  <div class="text-xs text-stone-600 flex justify-between py-1 border-b border-stone-100">
    <span>Item One</span><span class="font-semibold text-stone-900">$10.00</span>
  </div>
</div>`;
    }
    setHtmlContent(snippet);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !htmlContent.trim() || isSaving) return;

    const newTemplate: SectionTemplate = {
      id: createId('custom'),
      name: name.trim(),
      category,
      htmlContent: htmlContent.trim(),
      isCustom: true,
      description: 'Custom HTML Component',
    };

    setIsSaving(true);
    try {
      await onSave(newTemplate);
      setName('');
      setHtmlContent('');
      setError('');
      onClose();
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Gagal menyimpan komponen.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200 font-season-sans tracking-[0.04em]">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] font-season-sans tracking-[0.04em]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center shadow-xs">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-stone-900">Add Custom HTML Component</h2>
              <p className="text-[11px] text-stone-500">
                Paste your HTML snippet per section to render in preview
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Component Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Promo Banner Section"
                required
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-stone-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ComponentCategory)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-stone-500 bg-white"
              >
                {COMPONENT_CATEGORIES.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preset Helper Buttons */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-stone-700">Quick HTML Snippets</span>
              <span className="text-[11px] text-stone-400">Click to insert boilerplate</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => handleInsertPresetSnippet('card')}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium rounded-lg border border-stone-200 transition-all"
              >
                + Card Component
              </button>
              <button
                type="button"
                onClick={() => handleInsertPresetSnippet('badge')}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium rounded-lg border border-stone-200 transition-all cursor-pointer"
              >
                + Promo Banner
              </button>
              <button
                type="button"
                onClick={() => handleInsertPresetSnippet('button')}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium rounded-lg border border-stone-200 transition-all"
              >
                + Action Button
              </button>
              <button
                type="button"
                onClick={() => handleInsertPresetSnippet('list')}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium rounded-lg border border-stone-200 transition-all"
              >
                + List Item
              </button>
            </div>
          </div>

          {/* HTML Code vs Preview Tabs */}
          <div>
            <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-2">
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" /> HTML Code
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" /> Live Preview
                </button>
              </div>
              <span className="text-[10px] text-stone-400">Supports Tailwind CSS classes</span>
            </div>

            {activeTab === 'code' ? (
              <div className="relative">
                <textarea
                  rows={8}
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  placeholder="<div class='p-4 bg-white rounded-xl shadow-xs'>...</div>"
                  required
                  className="w-full px-3 py-2 text-xs font-mono rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-stone-500 bg-stone-950 text-stone-100 shadow-inner"
                />
              </div>
            ) : (
              <div className="p-4 bg-stone-200/50 rounded-xl border border-stone-300 min-h-[160px] flex items-center justify-center overflow-auto">
                {htmlContent.trim() ? (
                  <div
                    className="w-full max-w-sm"
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }}
                  />
                ) : (
                  <p className="text-xs text-stone-400 italic">No HTML entered yet</p>
                )}
              </div>
            )}
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Tip: Add <code>data-editable="field-name"</code> to any HTML element to automatically
              make its text editable after dropping it into the builder!
            </span>
          </div>

          {error && (
            <p role="alert" className="text-xs text-rose-600">
              {error}
            </p>
          )}

          {/* Form Actions */}
          <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name.trim() || !htmlContent.trim() || isSaving}
              className="px-5 py-2 text-xs font-bold bg-[#000000] hover:bg-[#1a1a1a] text-white rounded-xl shadow-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all cursor-pointer border border-white/10"
            >
              <Plus className="w-3.5 h-3.5 text-white" /> Save Component
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
