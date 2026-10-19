import type { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { LayoutTemplate, Plus } from 'lucide-react';

export interface CreatePageMenuProps {
  isCreatePageMenuOpen: boolean;
  isManagerOrAdmin: boolean;
  onOpenNewTemplateModal: () => void;
  setIsCreatePageMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsTemplateSelectionOpen: Dispatch<SetStateAction<boolean>>;
}

export function CreatePageMenu({
  isCreatePageMenuOpen,
  isManagerOrAdmin,
  onOpenNewTemplateModal,
  setIsCreatePageMenuOpen,
  setIsTemplateSelectionOpen,
}: CreatePageMenuProps) {
  return (
    <>
      {/* Dropdown Popover for Role Manager and Admin */}
      {isManagerOrAdmin && isCreatePageMenuOpen && (
        <>
          {createPortal(
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onMouseDown={() => setIsCreatePageMenuOpen(false)}
              onTouchStart={() => setIsCreatePageMenuOpen(false)}
              onClick={() => setIsCreatePageMenuOpen(false)}
            />,
            document.body,
          )}
          <div
            className="absolute right-0 top-[calc(100%+8px)] z-50 w-72 bg-[#212121] border border-[#3F3F3F] rounded-2xl p-2 shadow-2xl flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-150 select-none"
            style={{
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65)',
            }}
          >
            {/* Option 1: Use Template */}
            <button
              type="button"
              onClick={() => {
                setIsCreatePageMenuOpen(false);
                setIsTemplateSelectionOpen(true);
              }}
              className="w-full px-3.5 py-3 rounded-xl hover:bg-[#2e2e2e] flex items-center gap-3.5 transition-colors cursor-pointer text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#333333] group-hover:bg-white/15 flex items-center justify-center text-white shrink-0 transition-colors">
                <LayoutTemplate className="w-4 h-4" />
              </div>
              <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                Use Template
              </div>
            </button>

            {/* Option 2: Create New Template */}
            <button
              type="button"
              onClick={() => {
                setIsCreatePageMenuOpen(false);
                onOpenNewTemplateModal?.();
              }}
              className="w-full px-3.5 py-3 rounded-xl hover:bg-[#2e2e2e] flex items-center gap-3.5 transition-colors cursor-pointer text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#333333] group-hover:bg-white/15 flex items-center justify-center text-white shrink-0 transition-colors">
                <Plus className="w-4 h-4" />
              </div>
              <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                Create New Template
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
}
