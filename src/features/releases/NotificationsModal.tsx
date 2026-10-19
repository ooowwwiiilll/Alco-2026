import React from 'react';
import { Bell, CheckCircle2, X } from 'lucide-react';
import type { AppNotification, ReleaseItem } from '../../types';
import { UserAvatar } from '../../components/UserAvatar';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  releases: ReleaseItem[];
  onSelectRelease: (release: ReleaseItem) => void;
  onMarkAllAsRead: () => void;
  onApproveRelease: (releaseId: string) => void;
  onRejectRelease: (releaseId: string) => void;
  /** Reviewers can approve or reject directly from a review request. */
  canReview: boolean;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  notifications,
  releases,
  onSelectRelease,
  onMarkAllAsRead,
  onApproveRelease,
  onRejectRelease,
  canReview,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150 font-season-sans"
      onClick={onClose}
    >
      <div
        className="bg-[#212121] text-white rounded-2xl max-w-md w-full shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 text-white border border-white/20">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-snug">Notifications</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 scrollbar-thin scrollbar-thumb-stone-700">
          {notifications.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Bell className="w-8 h-8 text-stone-600 mx-auto" />
              <p className="text-sm text-stone-400">No notifications yet.</p>
            </div>
          ) : (
            notifications.map((notif) => {
              const targetRelease = releases.find((r) => r.id === notif.releaseId);
              return (
                <div
                  key={notif.id}
                  onClick={() => {
                    if (!targetRelease) return;
                    onSelectRelease(targetRelease);
                    onClose();
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer space-y-1.5 ${
                    notif.read
                      ? 'bg-[#262626] border-white/5 opacity-70 hover:opacity-100'
                      : 'bg-[#2a2a2a] border-white/20 hover:border-white/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserAvatar
                        name={notif.senderName}
                        seed={notif.senderName}
                        size={20}
                        fontSize={9}
                      />
                      <span className="text-xs font-bold text-white">{notif.senderName}</span>
                    </div>
                    <span className="text-[10px] text-stone-500">
                      {new Date(notif.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed pl-6">{notif.text}</p>
                  {canReview &&
                    notif.type === 'review_request' &&
                    targetRelease?.status === 'in_review' && (
                      <div className="flex items-center gap-2 pt-2 pl-6">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onApproveRelease(targetRelease.id);
                          }}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRejectRelease(targetRelease.id);
                          }}
                          className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t border-white/10 bg-[#1A1A1A] flex items-center justify-between">
            <button
              type="button"
              onClick={onMarkAllAsRead}
              className="text-xs text-white hover:underline cursor-pointer flex items-center gap-1.5 font-semibold"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Mark All as Read</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#353535] hover:bg-[#404040] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
