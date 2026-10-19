import React from 'react';
import { Clock, Edit3, Trash2, Upload, X } from 'lucide-react';
import type { ActivityAction, ActivityLogEntry } from '../../types';
import { UserAvatar } from '../../components/UserAvatar';

interface ReleaseHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  historyLogs: ActivityLogEntry[];
}

export const ReleaseHistoryModal: React.FC<ReleaseHistoryModalProps> = ({
  isOpen,
  onClose,
  historyLogs,
}) => {
  if (!isOpen) return null;

  // Format date & time
  const formatDateTime = (isoString: string) => {
    try {
      const d = new Date(isoString);
      if (isNaN(d.getTime())) return isoString;

      const dateStr = d.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      const timeStr = d.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      return `${timeStr} • ${dateStr}`;
    } catch {
      return isoString;
    }
  };

  const getActionDetails = (action: ActivityAction) => {
    switch (action) {
      case 'create':
        return {
          label: 'Release',
          icon: <Upload className="w-4 h-4 text-white" />,
          badgeClass: 'bg-white/10 text-white border border-white/20',
        };
      case 'edit':
        return {
          label: 'Edit & Republish',
          icon: <Edit3 className="w-4 h-4 text-stone-300" />,
          badgeClass: 'bg-stone-800 text-stone-200 border border-stone-600',
        };
      case 'delete':
        return {
          label: 'Delete Release',
          icon: <Trash2 className="w-4 h-4 text-rose-400" />,
          badgeClass: 'bg-rose-950/60 text-rose-300 border border-rose-800/60',
        };
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 select-none font-season-sans">
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div
        className="relative z-10 max-w-2xl w-full flex flex-col rounded-3xl overflow-hidden border border-[#3F3F3F] bg-[#212121] text-white shadow-2xl animate-in zoom-in-95 duration-200"
        style={{ maxHeight: '85vh' }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#292929]/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#353535] text-white flex items-center justify-center shadow-inner">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white tracking-tight font-season-mix">
                Release History
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {historyLogs.length === 0 ? (
            <div className="py-14 text-center text-stone-400 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Clock className="w-6 h-6 text-stone-500" />
              </div>
              <p className="text-sm font-medium">
                Tidak ada history release yang tercatat dalam 30 hari terakhir
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden bg-[#272727]">
              {historyLogs.map((log) => {
                const details = getActionDetails(log.action);
                return (
                  <div
                    key={log.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Left: Author & Action */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#333333] flex items-center justify-center shrink-0 border border-white/5">
                        {details.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <UserAvatar name={log.actorName} size={16} fontSize={8} />
                          <div className="text-sm font-medium text-white truncate">
                            {log.actorName || 'Pengguna'}
                          </div>
                        </div>
                        <div className="text-xs text-stone-400 mt-0.5 truncate">
                          {log.releaseName ?? 'Release'}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action Badge & Timestamp */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium tracking-wide uppercase ${details.badgeClass}`}
                      >
                        {details.label}
                      </span>
                      <div className="text-xs text-stone-400 font-mono">
                        {formatDateTime(log.timestamp)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-[#292929]/50 flex items-center justify-between">
          <span className="text-xs text-stone-400">Total {historyLogs.length} logs recorded</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-black bg-white hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
