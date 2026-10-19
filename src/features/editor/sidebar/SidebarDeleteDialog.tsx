import type { Dispatch, SetStateAction } from 'react';

export interface SidebarDeleteDialogProps {
  deleteConfirmState: {
    isOpen: boolean;
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm: () => void;
  } | null;
  setDeleteConfirmState: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      title: string;
      description: string;
      confirmLabel?: string;
      onConfirm: () => void;
    } | null>
  >;
}

export function SidebarDeleteDialog({
  deleteConfirmState,
  setDeleteConfirmState,
}: SidebarDeleteDialogProps) {
  return (
    <>
      {/* Delete Confirmation Modal */}
      {deleteConfirmState?.isOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 font-season-sans">
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              padding: '40px',
              background: '#1A1A1A',
              borderRadius: '24px',
              outline: '1px #484848 solid',
              outlineOffset: '-1px',
              backdropFilter: 'blur(20px)',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '40px',
              display: 'inline-flex',
            }}
            className="shadow-2xl text-white select-none relative animate-in zoom-in-95 duration-150"
          >
            <div
              style={{
                alignSelf: 'stretch',
                color: 'white',
                fontSize: '32px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                wordWrap: 'break-word',
              }}
            >
              {deleteConfirmState.title || 'Delete'}
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                wordWrap: 'break-word',
              }}
            >
              {deleteConfirmState.description ||
                'Are you sure you want to delete? This action cannot be undone.'}
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '20px',
                display: 'inline-flex',
              }}
            >
              <button
                type="button"
                onClick={() => setDeleteConfirmState(null)}
                style={{
                  width: '160px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  borderRadius: '76px',
                  outline: '1px white solid',
                  outlineOffset: '-1px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'flex',
                  background: 'transparent',
                  cursor: 'pointer',
                  border: 'none',
                }}
                className="hover:bg-white/10 active:scale-95 transition-all"
              >
                <div
                  style={{
                    flex: '1 1 0',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                  }}
                >
                  Cancel
                </div>
              </button>
              <button
                type="button"
                onClick={deleteConfirmState.onConfirm}
                style={{
                  width: '160px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  background: 'white',
                  borderRadius: '76px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'flex',
                  cursor: 'pointer',
                  border: 'none',
                }}
                className="hover:bg-stone-200 active:scale-95 transition-all shadow-lg"
              >
                <div
                  style={{
                    flex: '1 1 0',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                  }}
                >
                  {deleteConfirmState.confirmLabel || 'Delete'}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
