import React, { useState, useRef, useMemo } from 'react';
import { X, Trash2, Reply, AtSign } from 'lucide-react';
import type { AppUser, ReleaseComment, ReleaseItem } from '../../types';
import { UserAvatar } from '../../components/UserAvatar';
import { mentionCandidates } from '../../domain/mentions';

interface ReleaseCommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  release: ReleaseItem | null;
  comments: ReleaseComment[];
  currentUser: AppUser;
  users: AppUser[];
  /** Product users may only discuss their own releases. */
  canComment: boolean;
  onAddComment: (text: string) => Promise<void>;
  onDeleteComment: (commentId: string) => void;
}

export const ReleaseCommentsModal: React.FC<ReleaseCommentsModalProps> = ({
  isOpen,
  onClose,
  release,
  comments,
  currentUser,
  users,
  canComment,
  onAddComment,
  onDeleteComment,
}) => {
  const [commentText, setCommentText] = useState('');
  const [showMentionMenu, setShowMentionMenu] = useState(false);
  const [mentionFilter, setMentionFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const [isSending, setIsSending] = useState(false);
  const isReleaseAuthor = release?.authorId === currentUser.id;

  const candidateUsers = useMemo(
    () => mentionCandidates(release, comments, users, currentUser),
    [release, comments, users, currentUser],
  );

  if (!isOpen || !release) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCommentText(val);

    // Check if user is typing an @ mention at cursor or end
    const lastWord = val.split(' ').pop() || '';
    if (lastWord.startsWith('@')) {
      setShowMentionMenu(true);
      setMentionFilter(lastWord.slice(1).toLowerCase());
    } else {
      setShowMentionMenu(false);
    }
  };

  const handleSelectMention = (targetName: string) => {
    const words = commentText.split(' ');
    words.pop(); // Remove partial @term
    const newText = [...words, `@${targetName} `].join(' ');
    setCommentText(newText);
    setShowMentionMenu(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleReplyComment = (userName: string) => {
    const mentionTag = `@${userName} `;
    if (!commentText.includes(mentionTag)) {
      setCommentText((prev) => (prev.trim() ? `${prev.trim()} ${mentionTag}` : mentionTag));
    }
    setShowMentionMenu(false);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || isSending) return;
    setIsSending(true);
    try {
      await onAddComment(commentText.trim());
      setCommentText('');
      setShowMentionMenu(false);
    } finally {
      setIsSending(false);
    }
  };

  const filteredCandidates = candidateUsers.filter((u) =>
    u.name.toLowerCase().includes(mentionFilter),
  );

  // Helper to highlight @UserName tags in comment messages
  const renderCommentText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(@[A-Za-z0-9_\-\. ]+?)(?=\s@|\s[^\s@]|$)/g);
    return (
      <span className="break-words font-season-sans leading-relaxed">
        {parts.map((part, idx) => {
          if (part.startsWith('@')) {
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-xs font-semibold bg-[#00EFAB]/20 text-[#00EFAB] border border-[#00EFAB]/30 mx-0.5"
              >
                <AtSign className="w-3 h-3 text-[#00EFAB]" />
                <span>{part.slice(1)}</span>
              </span>
            );
          }
          return part;
        })}
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100000] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none font-season-sans"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '620px',
          maxHeight: '90vh',
          padding: '24px',
          background: '#212121',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: '20px',
          display: 'inline-flex',
        }}
        className="shadow-2xl text-white relative animate-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row */}
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              color: 'white',
              fontSize: '27px',
              fontFamily: "'Season Mix', serif",
              fontWeight: 420,
              wordWrap: 'break-word',
            }}
          >
            Comments
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              padding: 0,
            }}
            className="hover:opacity-80 transition-opacity"
            title="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Top Divider */}
        <div
          style={{
            alignSelf: 'stretch',
            height: '0px',
            outline: '1px #353535 solid',
            outlineOffset: '-0.50px',
          }}
        />

        {/* Comments Scrollable List */}
        <div
          style={{
            alignSelf: 'stretch',
            maxHeight: '300px',
            overflowY: 'auto',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px',
            display: 'flex',
            width: '100%',
          }}
          className="custom-scrollbar"
        >
          {comments.length === 0 ? (
            <div className="py-10 text-center text-[15px] text-white/50 w-full select-none font-season-sans">
              Belum ada komentar untuk Rilis ini
            </div>
          ) : (
            comments.map((comm) => {
              const commDate = new Date(comm.createdAt);
              const timeStr = !isNaN(commDate.getTime())
                ? commDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : '12:25';
              const dateStr = !isNaN(commDate.getTime())
                ? commDate.toLocaleDateString()
                : '10/5/2026';

              return (
                <div
                  key={comm.id}
                  style={{
                    alignSelf: 'stretch',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    background: '#2C2C2C',
                    borderRadius: '16px',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '10px',
                    display: 'flex',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div
                    style={{
                      alignSelf: 'stretch',
                      borderRadius: '12px',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '12px',
                      display: 'inline-flex',
                    }}
                  >
                    <UserAvatar
                      name={comm.userName || 'User'}
                      seed={comm.userId || comm.userName}
                      size={28}
                    />
                    <div
                      style={{
                        flex: '1 1 0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div
                        style={{
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 500,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {comm.userName || 'Puguh'}
                      </div>
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.50)',
                          fontSize: '13px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {comm.userRole === 'manager'
                          ? 'Role Manager'
                          : comm.userRole === 'admin'
                            ? 'Super Admin'
                            : comm.division || currentUser?.division || 'Product Team'}
                      </div>
                    </div>
                    <div
                      style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.50)',
                          fontSize: '13px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {timeStr}
                      </div>
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.50)',
                          fontSize: '13px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {dateStr}
                      </div>

                      {/* Balas / Reply Button */}
                      {canComment && comm.userId !== currentUser.id && (
                        <button
                          type="button"
                          onClick={() => handleReplyComment(comm.userName)}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-[#00EFAB]/20 text-stone-300 hover:text-[#00EFAB] text-xs transition-colors cursor-pointer ml-1 font-medium select-none"
                          title={`Balas / Mention @${comm.userName}`}
                        >
                          <Reply className="w-3 h-3" />
                          <span>Balas</span>
                        </button>
                      )}

                      {/* Delete comment button (only for author of comment or releaser) */}
                      {(comm.userId === currentUser.id || isReleaseAuthor) && (
                        <button
                          type="button"
                          onClick={() => onDeleteComment(comm.id)}
                          className="text-stone-400 hover:text-red-400 p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer ml-1"
                          title="Delete Comment"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-stone-400 hover:text-red-400" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: 'stretch',
                      paddingLeft: '40px',
                      paddingRight: '12px',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '10px',
                      display: 'inline-flex',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.28px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {renderCommentText(comm.text)}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Divider */}
        <div
          style={{
            alignSelf: 'stretch',
            height: '0px',
            outline: '1px #353535 solid',
            outlineOffset: '-0.50px',
          }}
        />

        {/* Form Input Komentar dengan Mention Autocomplete */}
        {!canComment ? (
          <p className="w-full text-xs text-stone-400">
            Akun Team Product hanya dapat memberikan komentar pada rilis miliknya sendiri.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '8px',
              display: 'flex',
              width: '100%',
              position: 'relative',
            }}
          >
            {/* Mention Popover Menu */}
            {showMentionMenu && filteredCandidates.length > 0 && (
              <div className="absolute bottom-full mb-2 left-0 w-72 max-h-48 overflow-y-auto bg-[#1a1a1a] border border-[#3F3F3F] rounded-xl shadow-2xl p-1 z-50 animate-in fade-in zoom-in-95 custom-scrollbar">
                <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-white/5 mb-1 flex items-center gap-1">
                  <AtSign className="w-3 h-3 text-[#00EFAB]" />
                  <span>Pilih User untuk Di-Mention</span>
                </div>
                {filteredCandidates.map((cand) => (
                  <button
                    key={cand.id}
                    type="button"
                    onClick={() => handleSelectMention(cand.name)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-stone-200 hover:bg-[#353535] hover:text-white text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <UserAvatar name={cand.name} seed={cand.id} size={20} />
                      <span className="font-medium text-white">{cand.name}</span>
                    </div>
                    {cand.role && (
                      <span className="text-[10px] text-stone-400 uppercase">{cand.role}</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '12px',
                display: 'inline-flex',
                width: '100%',
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  height: '48px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  background: '#121212',
                  borderRadius: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  border: '1px solid #2B2B2B',
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={commentText}
                  onChange={handleInputChange}
                  placeholder="Tuliskan komentar untuk Release ini.."
                  style={{
                    alignSelf: 'stretch',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                  }}
                  className="placeholder-[#707070]"
                />
              </div>
              <button
                type="submit"
                disabled={!commentText.trim() || isSending}
                style={{
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  background: commentText.trim() ? '#888888' : '#555555',
                  color: commentText.trim() ? 'white' : '#A0A0A0',
                  borderRadius: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  border: 'none',
                  cursor: commentText.trim() ? 'pointer' : 'not-allowed',
                  opacity: commentText.trim() ? 1 : 0.6,
                  flexShrink: 0,
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 500,
                  transition: 'all 150ms ease',
                }}
                className={commentText.trim() ? 'hover:bg-[#999999] active:scale-95' : ''}
              >
                Kirim
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
