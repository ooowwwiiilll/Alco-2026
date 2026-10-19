import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  Download,
  Upload,
  X,
} from 'lucide-react';
import React, { useRef, useState } from 'react';
import { validateBackup, type BackupData } from '../../domain/validation';
import { exportLocalAssets } from '../../persistence/assets';
import type {
  AppConfig,
  PageTemplate,
  PlacedSection,
  ReleaseItem,
  SectionTemplate,
} from '../../types';

interface DataMigrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  placedSections: PlacedSection[];
  pageTemplates: PageTemplate[];
  releases: ReleaseItem[];
  customTemplates: SectionTemplate[];
  config: AppConfig;
  activeTemplateName: string | null;
  activeTemplateId: string | null;
  activeTemplateRevision: number;
  onRestoreData: (backupData: BackupData) => Promise<void>;
}

export const DataMigrationModal: React.FC<DataMigrationModalProps> = ({
  isOpen,
  onClose,
  placedSections,
  pageTemplates,
  releases,
  customTemplates,
  config,
  activeTemplateName,
  activeTemplateId,
  activeTemplateRevision,
  onRestoreData,
}) => {
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle Export / Download
  const handleExportBackup = async () => {
    try {
      const backupPayload = {
        app: 'alco-cms-orchestrator',
        version: '4.0.0',
        exportedAt: new Date().toISOString(),
        data: {
          activeTemplateName: activeTemplateName || null,
          activeTemplateId: activeTemplateId || null,
          activeTemplateRevision,
          assets: await exportLocalAssets(),
          placedSections,
          pageTemplates,
          releases,
          customTemplates,
          templateRenames: config.templateRenames ?? {},
          deletedTemplateIds: config.deletedTemplateIds ?? [],
          deletedPageIds: config.deletedPageIds ?? [],
        },
      };

      const jsonString = URL.createObjectURL(
        new Blob([JSON.stringify(backupPayload, null, 2)], { type: 'application/json' }),
      );
      const downloadAnchor = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      downloadAnchor.setAttribute('href', jsonString);
      downloadAnchor.setAttribute('download', `alco-cms-backup-${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      setTimeout(() => URL.revokeObjectURL(jsonString), 1000);

      setImportStatus('success');
      setTimeout(() => setImportStatus('idle'), 4000);
    } catch (err) {
      setImportStatus('error');
      setErrorMessage(
        'Gagal membuat file backup: ' + (err instanceof Error ? err.message : 'Unknown error'),
      );
    }
  };

  // Handle Import / Restore
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      setImportStatus('error');
      setErrorMessage('Backup exceeds 20 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);

        // Support both direct or wrapped payload
        const data = parsed.data || parsed;
        if (data.currentCanvasSections && !data.placedSections)
          data.placedSections = data.currentCanvasSections;

        if (!data || (!data.pageTemplates && !data.releases && !data.placedSections)) {
          throw new Error(
            'Format file backup tidak valid. Pastikan file JSON diexport dari aplikasi ini.',
          );
        }

        validateBackup(data);
        await onRestoreData({
          assets: data.assets,
          placedSections: data.placedSections,
          pageTemplates: data.pageTemplates,
          releases: data.releases,
          customTemplates: data.customTemplates,
          templateRenames: data.templateRenames,
          deletedTemplateIds: data.deletedTemplateIds,
          deletedPageIds: data.deletedPageIds,
          activeTemplateName: data.activeTemplateName,
          activeTemplateId: data.activeTemplateId,
          activeTemplateRevision: data.activeTemplateRevision,
        });

        setImportStatus('success');
        setTimeout(() => {
          onClose();
        }, 1200);
      } catch (err) {
        setImportStatus('error');
        setErrorMessage(
          err instanceof Error ? err.message : 'Gagal membaca atau memulihkan data dari file.',
        );
      }
    };

    reader.readAsText(file);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 select-none font-season-sans">
      <div className="bg-[#212121] text-white rounded-3xl max-w-2xl w-full border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#292929]/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00482F] text-white flex items-center justify-center shadow-md">
              <Database className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Migration &amp; Data Backup
              </h3>
              <p className="text-[11px] text-[#6E6E6E] font-medium">
                Export layouts and local images, or restore a reviewed backup. Accounts are not
                included.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6E6E6E] hover:text-white hover:bg-[#353535] transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-xs">
          {importStatus === 'success' && (
            <div className="p-3.5 bg-emerald-950/80 border border-emerald-700/80 rounded-2xl flex items-center gap-2.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Proses berhasil! Data telah siap atau dipulihkan ke canvas dan library.</span>
            </div>
          )}

          {importStatus === 'error' && (
            <div className="p-3.5 bg-red-950/80 border border-red-800 rounded-2xl flex items-center gap-2.5 text-red-300">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Backup transfer instructions */}
          <div className="p-4 bg-[#292929] rounded-2xl border border-white/5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              Backup and restore:
            </h4>
            <div className="space-y-2.5 text-stone-300 text-[11px] leading-relaxed">
              <div className="flex items-start gap-2.5 p-2.5 bg-[#1e1e1e] rounded-xl border border-white/5">
                <span className="w-5 h-5 rounded-full bg-[#353535] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-bold text-white">Download Backup Data (JSON)</p>
                  <p className="text-stone-400 mt-0.5">
                    Klik tombol <strong>"Download Semua Data (JSON)"</strong> di bawah. File ini
                    berisi semua rilis, template, dan canvas yang telah Anda buat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 bg-[#1e1e1e] rounded-xl border border-white/5">
                <span className="w-5 h-5 rounded-full bg-[#353535] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-bold text-white">Prepare the destination workspace</p>
                  <p className="text-stone-400 mt-0.5">
                    Open the destination local workspace or sign in to the configured cloud project.
                    Local image references must be uploaded and remapped before cloud import.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 bg-[#1e1e1e] rounded-xl border border-white/5">
                <span className="w-5 h-5 rounded-full bg-[#353535] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-bold text-white">Restore the reviewed JSON backup</p>
                  <p className="text-stone-400 mt-0.5">
                    Use <strong>"Upload / Restore Data"</strong>. Imports validate before writing
                    and archive replaced records. A backup can contain at most 100 imported records,
                    including assets and workspace settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards: Download and Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Download */}
            <div className="p-4 bg-[#292929] rounded-2xl border border-white/5 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2 border border-emerald-800">
                  <Download className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-white">Download Semua Data</h5>
                <p className="text-[10px] text-stone-400 mt-1">
                  Menyimpan {pageTemplates.length} Template, {releases.length} Rilis, dan{' '}
                  {placedSections.length} Komponen Canvas aktif ke format JSON.
                </p>
              </div>
              <button
                type="button"
                onClick={handleExportBackup}
                className="w-full py-2.5 px-3 bg-[#000000] hover:bg-[#1a1a1a] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer border border-white/10"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download File JSON</span>
              </button>
            </div>

            {/* Card 2: Upload */}
            <div className="p-4 bg-[#292929] rounded-2xl border border-white/5 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center mb-2 border border-blue-800">
                  <Upload className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-white">Upload / Restore Data</h5>
                <p className="text-[10px] text-stone-400 mt-1">
                  Pilih file JSON backup dari komputer Anda untuk memulihkan seluruh template dan
                  rilis.
                </p>
              </div>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".json,application/json"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 bg-[#353535] hover:bg-[#404040] text-white font-bold rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-blue-300" />
                  <span>Pilih File Backup JSON</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-end bg-[#292929]/60">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-300 hover:text-white bg-[#353535] hover:bg-[#404040] rounded-xl transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
