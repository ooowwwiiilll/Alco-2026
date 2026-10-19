import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, AtSign } from 'lucide-react';
import type { AppUser, ReleaseItem, ReleaseStatus } from '../../types';
import { UserAvatar } from '../../components/UserAvatar';
import { mentionCandidates } from '../../domain/mentions';

interface ReleaseStatusReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  release: ReleaseItem | null;
  targetStatus: ReleaseStatus;
  currentUser: AppUser;
  users: AppUser[];
  /** Opened when a reviewer leaves the editor; closing then still navigates away. */
  isExitAction: boolean;
  onConfirm: (newStatus: ReleaseStatus, notes: string) => Promise<void>;
  onExitWithoutNotes: () => void;
}

export const ReleaseStatusReviewModal: React.FC<ReleaseStatusReviewModalProps> = ({
  isOpen,
  onClose,
  release,
  targetStatus,
  currentUser,
  users,
  isExitAction,
  onConfirm,
  onExitWithoutNotes,
}) => {
  const [noteText, setNoteText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMentionMenu, setShowMentionMenu] = useState(false);
  const [mentionFilter, setMentionFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setNoteText('');
      setShowMentionMenu(false);
      setMentionFilter('');
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  const candidateUsers = useMemo(
    () => mentionCandidates(release, [], users, currentUser),
    [release, users, currentUser],
  );

  if (!isOpen || !release) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNoteText(val);

    const lastWord = val.split(' ').pop() || '';
    if (lastWord.startsWith('@')) {
      setShowMentionMenu(true);
      setMentionFilter(lastWord.slice(1).toLowerCase());
    } else {
      setShowMentionMenu(false);
    }
  };

  const handleSelectMention = (targetName: string) => {
    const words = noteText.split(' ');
    words.pop();
    const newText = [...words, `@${targetName} `].join(' ');
    setNoteText(newText);
    setShowMentionMenu(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const filteredCandidates = candidateUsers.filter((u) =>
    u.name.toLowerCase().includes(mentionFilter),
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim() || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await onConfirm(targetStatus, noteText.trim());
      setNoteText('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    if (isExitAction) {
      onExitWithoutNotes();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none font-season-sans"
      onClick={handleCloseModal}
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
          alignItems: 'flex-start',
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
            Notes
          </div>
          <button
            type="button"
            onClick={handleCloseModal}
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

        {/* Form Input Notes - Simple like Comment without tagging */}
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
                value={noteText}
                onChange={handleInputChange}
                placeholder="Tuliskan catatan untuk Release ini.."
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
              disabled={!noteText.trim()}
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: noteText.trim() ? '#888888' : '#555555',
                color: noteText.trim() ? 'white' : '#A0A0A0',
                borderRadius: '12px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                border: 'none',
                cursor: noteText.trim() ? 'pointer' : 'not-allowed',
                opacity: noteText.trim() ? 1 : 0.6,
                flexShrink: 0,
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className={noteText.trim() ? 'hover:bg-[#999999] active:scale-95' : ''}
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
