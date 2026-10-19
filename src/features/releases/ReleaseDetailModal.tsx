import React from 'react';
import { X, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import type { AppUser, PageTemplate, ReleaseItem, ReleaseStatus } from '../../types';
import { cleanComponentName, formatDateTime } from '../../utils/format';
import { UserAvatar } from '../../components/UserAvatar';
import { isEditor } from '../../domain/access';

interface ReleaseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  release: ReleaseItem | null;
  pageTemplates?: PageTemplate[];
  users?: AppUser[];
  currentUser?: AppUser | null;
  onChangeReleaseStatus?: (releaseId: string, newStatus: ReleaseStatus) => void;
  onShareRelease?: (releaseId: string, device?: 'desktop' | 'mobile') => void;
}

export const ReleaseDetailModal: React.FC<ReleaseDetailModalProps> = ({
  isOpen,
  onClose,
  release,
  pageTemplates = [],
  users = [],
  currentUser,
  onChangeReleaseStatus,
  onShareRelease,
}) => {
  if (!isOpen || !release) return null;

  const isRMOrAdmin = isEditor(currentUser);

  const authorName = release.authorName || 'Releaser';
  const authorEmail =
    release.authorEmail || users.find((user) => user.id === release.authorId)?.email || '-';

  const releaserStr = `${authorName} - ${authorEmail}`;
  const divisionStr = release.division || '-';
  const [dateStr, timeStr = ''] = formatDateTime(release.updatedAt ?? release.createdAt).split(' ');

  // Template Name
  const templateName =
    release.sourceTemplateName ||
    pageTemplates.find((pt) => pt.id === release.sourceTemplateId)?.name ||
    'No template (Desain Baru)';

  const sections = release.sections || [];
  const sectionCount = sections.length;

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-md p-6 my-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        style={{
          width: '387px',
          maxHeight: '85vh',
          padding: '16px',
          background: '#212121',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-in zoom-in-95 duration-150"
      >
        {/* Header: Release Name & Close Button */}
        <div
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '27px',
              fontFamily: 'Season Mix, sans-serif',
              fontWeight: 420,
              wordWrap: 'break-word',
            }}
          >
            {release.name}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="hover:opacity-80 transition-opacity cursor-pointer text-white p-1 shrink-0"
            title="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content Body with scrollbar */}
        <div
          style={{
            width: '100%',
            flex: '1 1 auto',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingRight: '4px',
          }}
          className="custom-scrollbar"
        >
          {/* Detail Release Section */}
          <div style={{ width: '100%', flexDirection: 'column', gap: '8px', display: 'flex' }}>
            <div
              style={{
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0.28px',
              }}
            >
              Detail Release
            </div>

            <div style={{ width: '100%', flexDirection: 'column', gap: '4px', display: 'flex' }}>
              {/* Releaser Row - Right Aligned */}
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    flexShrink: 0,
                  }}
                >
                  Releaser
                </div>
                <div
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    flex: '1 1 0',
                    minWidth: 0,
                  }}
                >
                  <UserAvatar
                    name={authorName}
                    seed={release.authorId || authorName}
                    size={20}
                    fontSize={9}
                  />
                  <div
                    style={{
                      color: 'rgba(255, 255, 255, 0.50)',
                      fontSize: '12px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.24px',
                      textAlign: 'right',
                    }}
                    className="truncate"
                    title={releaserStr}
                  >
                    {releaserStr}
                  </div>
                </div>
              </div>

              {/* Divisi Row - Right Aligned */}
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    flexShrink: 0,
                  }}
                >
                  Divisi
                </div>
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    textAlign: 'right',
                  }}
                  className="truncate"
                >
                  {divisionStr}
                </div>
              </div>

              {/* Last Published Row - Right Aligned */}
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    flexShrink: 0,
                  }}
                >
                  Last published
                </div>
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    textAlign: 'right',
                  }}
                >
                  {timeStr} &nbsp; {dateStr}
                </div>
              </div>

              {/* Status Row */}
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.24px',
                    flexShrink: 0,
                  }}
                >
                  Status
                </div>
                <div style={{ textAlign: 'right' }}>
                  {release.status === 'approved' && (
                    <span
                      style={{
                        color: '#00EFAB',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Approved
                    </span>
                  )}
                  {release.status === 'in_review' && (
                    <span
                      style={{
                        color: '#DED522',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Review
                    </span>
                  )}
                  {release.status === 'rejected' && (
                    <span
                      style={{
                        color: '#DE225A',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Reject
                    </span>
                  )}
                </div>
              </div>

              {/* Status Change Action Buttons for Role Manager & Admin */}
              {isRMOrAdmin && onChangeReleaseStatus && (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    gap: '8px',
                    marginTop: '6px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {release.status === 'approved' && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'in_review');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-[#DED522] bg-[#DED522]/10 hover:bg-[#DED522]/20 transition-colors cursor-pointer border border-[#DED522]/20 font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-[#DED522]" />
                        <span>Ubah ke Review</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'rejected');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-[#DE225A] bg-[#DE225A]/10 hover:bg-[#DE225A]/20 transition-colors cursor-pointer border border-[#DE225A]/20 font-medium"
                      >
                        <XCircle className="w-3.5 h-3.5 text-[#DE225A]" />
                        <span>Tolak (Reject)</span>
                      </button>
                    </>
                  )}

                  {release.status === 'in_review' && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'approved');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-[#00EFAB] bg-[#00EFAB]/10 hover:bg-[#00EFAB]/20 transition-colors cursor-pointer border border-[#00EFAB]/20 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00EFAB]" />
                        <span>Approve</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'rejected');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-[#DE225A] bg-[#DE225A]/10 hover:bg-[#DE225A]/20 transition-colors cursor-pointer border border-[#DE225A]/20 font-medium"
                      >
                        <XCircle className="w-3.5 h-3.5 text-[#DE225A]" />
                        <span>Tolak (Reject)</span>
                      </button>
                    </>
                  )}

                  {release.status === 'rejected' && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'approved');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 transition-colors cursor-pointer border border-emerald-400/20 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Approve</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeReleaseStatus(release.id, 'in_review');
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs text-amber-400 bg-amber-400/10 hover:bg-amber-400/20 transition-colors cursor-pointer border border-amber-400/20 font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ubah ke Review</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#353535' }} />

          {/* Template Section */}
          <div style={{ width: '100%', flexDirection: 'column', gap: '12px', display: 'flex' }}>
            <div
              style={{
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0.28px',
              }}
            >
              Template
            </div>
            <div
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '12px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '60px',
                  borderRadius: '16px',
                  backgroundColor: '#444444',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="text-[10px] text-stone-300 font-season-sans items-center justify-center"
              >
                Preview
              </div>
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.32px',
                }}
                className="truncate"
              >
                {templateName}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#353535' }} />

          {/* Komponen Section */}
          <div style={{ width: '100%', flexDirection: 'column', gap: '12px', display: 'flex' }}>
            <div
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.28px',
                }}
              >
                Komponen
              </div>
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '8px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                  }}
                >
                  {sectionCount}
                </div>
              </div>
            </div>

            {/* List of components inside release */}
            {sections.length === 0 ? (
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '12px',
                  fontFamily: 'Season Sans, sans-serif',
                }}
              >
                Tidak ada komponen
              </div>
            ) : (
              sections.map((sec, idx) => (
                <div
                  key={sec.instanceId || idx}
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '12px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '60px',
                      borderRadius: '16px',
                      backgroundColor: '#555555',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="text-[9px] text-stone-300 font-season-sans items-center justify-center"
                  >
                    Component
                  </div>
                  <div
                    style={{
                      flex: '1 1 0',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.32px',
                    }}
                    className="truncate"
                  >
                    {cleanComponentName(sec.name)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
