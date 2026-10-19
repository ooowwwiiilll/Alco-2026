import type { Dispatch, FormEvent, SetStateAction } from 'react';

import { X } from 'lucide-react';

export interface RenameCanvasDialogProps {
  handleConfirmRename: (e?: FormEvent) => void;
  isRenameModalOpen: boolean;
  renameInput: string;
  setIsRenameModalOpen: Dispatch<SetStateAction<boolean>>;
  setRenameInput: Dispatch<SetStateAction<string>>;
}

export function RenameCanvasDialog({
  handleConfirmRename,
  isRenameModalOpen,
  renameInput,
  setIsRenameModalOpen,
  setRenameInput,
}: RenameCanvasDialogProps) {
  return (
    <>
      {/* Rename Canvas Modal (RM & Admin) */}
      {isRenameModalOpen && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-150 font-season-sans select-none"
          onClick={() => setIsRenameModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '24px',
              background: '#272727',
              borderRadius: '20px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              gap: '24px',
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
                Rename Canvas
              </div>
              <button
                type="button"
                onClick={() => setIsRenameModalOpen(false)}
                style={{
                  width: '24px',
                  height: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:opacity-80 transition-opacity"
                title="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form & Input Section */}
            <form
              onSubmit={handleConfirmRename}
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '24px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: '72px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    background: '#202020',
                    borderRadius: '12px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      alignSelf: 'stretch',
                      color: 'rgba(255, 255, 255, 0.50)',
                      fontSize: '12px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '18px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Nama Template
                  </div>
                  <input
                    type="text"
                    value={renameInput}
                    onChange={(e) => setRenameInput(e.target.value)}
                    placeholder="Masukkan nama canvas..."
                    style={{
                      alignSelf: 'stretch',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '24px',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      marginTop: '2px',
                    }}
                    autoFocus
                  />
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  alignSelf: 'stretch',
                  height: '0px',
                  outline: '1px #353535 solid',
                  outlineOffset: '-0.50px',
                }}
              />

              {/* Simpan Button Row */}
              <div
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  type="submit"
                  disabled={!renameInput.trim()}
                  style={{
                    width: '180px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    background: 'white',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'inline-flex',
                    border: 'none',
                    cursor: renameInput.trim() ? 'pointer' : 'not-allowed',
                    opacity: renameInput.trim() ? 1 : 0.5,
                  }}
                  className="hover:opacity-90 active:scale-95 transition-all select-none"
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '16px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Save
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
