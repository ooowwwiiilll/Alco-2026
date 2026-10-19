import type { Dispatch, SetStateAction } from 'react';
import emptyStateImg from '../../assets/images/empty_state.png';
import { UserAvatar } from '../../components/UserAvatar';
import { Pencil, ChevronDown, Check, Trash2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { type AppUser } from '../../types';

export interface MemberListProps {
  activeEditingUser: AppUser | undefined;
  approvedUsers: AppUser[];
  availableDivisions: string[];
  currentUser: AppUser;
  deleteTargetUser: AppUser | null;
  handleRoleChange: (userId: string, newRole: 'admin' | 'product') => void;
  isActionActive: boolean;
  isDeleteActive: boolean;
  isRoleEditingActive: boolean;
  openDivisionUserId: string | null;
  processedMembers: AppUser[];
  setActiveTab: Dispatch<SetStateAction<'account' | 'division'>>;
  setDeleteTargetUser: Dispatch<SetStateAction<AppUser | null>>;
  setDivisionFilter: Dispatch<SetStateAction<string>>;
  setOpenDivisionUserId: Dispatch<SetStateAction<string | null>>;
  setRoleFilter: Dispatch<SetStateAction<'all' | 'admin' | 'product'>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSortBy: Dispatch<
    SetStateAction<'default' | 'name-asc' | 'name-desc' | 'division-asc' | 'division-desc'>
  >;
  setStagedDivisions: Dispatch<SetStateAction<{ [userId: string]: string }>>;
  setStagedNames: Dispatch<SetStateAction<{ [userId: string]: string }>>;
  stagedDivisions: { [userId: string]: string };
  stagedNames: { [userId: string]: string };
  stagedRoles: { [userId: string]: 'admin' | 'product' };
}

export function MemberList({
  activeEditingUser,
  approvedUsers,
  availableDivisions,
  currentUser,
  deleteTargetUser,
  handleRoleChange,
  isActionActive,
  isDeleteActive,
  isRoleEditingActive,
  openDivisionUserId,
  processedMembers,
  setActiveTab,
  setDeleteTargetUser,
  setDivisionFilter,
  setOpenDivisionUserId,
  setRoleFilter,
  setSearchQuery,
  setSortBy,
  setStagedDivisions,
  setStagedNames,
  stagedDivisions,
  stagedNames,
  stagedRoles,
}: MemberListProps) {
  return (
    <>
      {/* Empty State vs Member List */}
      {approvedUsers.length === 0 ? (
        <div
          style={{
            alignSelf: 'stretch',
            paddingTop: '40px',
            paddingBottom: '40px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            display: 'flex',
          }}
        >
          <img
            style={{ width: '226px', height: '186px', objectFit: 'contain' }}
            src={emptyStateImg}
            alt="Empty State"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/226x186/212121/909090?text=No+Accounts+Yet';
            }}
          />
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              display: 'inline-flex',
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                textAlign: 'center',
                color: '#909090',
                fontSize: '16px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                wordWrap: 'break-word',
              }}
            >
              No registered accounts yet. Accounts will appear here once approved.
            </div>
          </div>
        </div>
      ) : processedMembers.length === 0 ? (
        <div
          style={{
            alignSelf: 'stretch',
            padding: '32px 16px',
            textAlign: 'center',
            color: '#909090',
            fontSize: '14px',
            fontFamily: 'Season Sans, sans-serif',
          }}
        >
          <p>No members match the search or filter.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setRoleFilter('all');
              setDivisionFilter('all');
              setSortBy('default');
            }}
            className="mt-2 text-xs text-white hover:underline cursor-pointer"
          >
            Reset Filter &amp; Search
          </button>
        </div>
      ) : (
        /* Non-nested natural list sorted & filtered */
        <div
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '4px',
            display: 'flex',
          }}
        >
          {processedMembers.map((user) => {
            const currentStagedRole =
              stagedRoles[user.id] !== undefined
                ? stagedRoles[user.id]
                : user.role === 'admin'
                  ? 'admin'
                  : 'product';

            const isDeletingThisUser = deleteTargetUser?.id === user.id;
            const isEditingThisUserRole = activeEditingUser?.id === user.id;
            const isDivChanged =
              stagedDivisions[user.id] !== undefined &&
              stagedDivisions[user.id] !== (user.division || 'Retail & Daily Banking');
            const isRoleChanged =
              user.role !== 'manager' &&
              stagedRoles[user.id] !== undefined &&
              stagedRoles[user.id] !== (user.role === 'admin' ? 'admin' : 'product');

            const isNameChanged =
              stagedNames[user.id] !== undefined && stagedNames[user.id] !== user.name;
            const isTarget = isDeletingThisUser || isEditingThisUserRole;
            const isDimmed = isActionActive && !isTarget;

            return (
              <div
                key={user.id}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  background: isDeletingThisUser
                    ? 'rgba(239, 68, 68, 0.12)'
                    : isEditingThisUserRole
                      ? 'rgba(0, 235, 175, 0.08)'
                      : undefined,
                  outline: isDeletingThisUser
                    ? '1px solid rgba(239, 68, 68, 0.35)'
                    : isEditingThisUserRole
                      ? '1px solid rgba(0, 235, 175, 0.35)'
                      : undefined,
                  opacity: isDimmed ? 0.35 : 1,
                  pointerEvents: isDimmed ? 'none' : 'auto',
                  transition: 'opacity 0.2s ease, background 0.2s ease, outline 0.2s ease',
                }}
                className={!isDimmed ? 'hover:bg-white/5' : undefined}
              >
                {/* Left: Avatar & Editable Name with Email */}
                <div className="flex items-center gap-3.5 flex-1 min-w-[220px]">
                  <UserAvatar
                    name={stagedNames[user.id] !== undefined ? stagedNames[user.id] : user.name}
                    seed={user.id || user.name}
                    size={40}
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-2 group">
                      <input
                        type="text"
                        value={
                          stagedNames[user.id] !== undefined ? stagedNames[user.id] : user.name
                        }
                        onChange={(e) =>
                          setStagedNames((prev) => ({ ...prev, [user.id]: e.target.value }))
                        }
                        disabled={isDeleteActive || isDimmed}
                        style={{
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: isNameChanged ? 600 : 400,
                          background: isNameChanged ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                          border: isNameChanged
                            ? '1px solid rgba(255, 255, 255, 0.3)'
                            : '1px solid transparent',
                          outline: 'none',
                          borderRadius: '6px',
                          padding: '2px 8px',
                          width: '100%',
                        }}
                        className="hover:border-white/20 focus:border-teal-400 transition-colors truncate"
                        title="Click to edit name"
                      />
                      <Pencil className="w-3.5 h-3.5 text-white/30 group-hover:text-white/70 shrink-0 pointer-events-none transition-colors" />
                    </div>
                    <span
                      style={{
                        color: 'rgba(255, 255, 255, 0.50)',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '18px',
                      }}
                      className="truncate px-2"
                    >
                      {user.email}
                    </span>
                  </div>
                </div>

                {/* Right: Division, Role, Delete Actions */}
                <div className="flex items-center gap-3 shrink-0 ml-auto">
                  {/* Custom Division Dropdown */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      disabled={isDeleteActive || isDimmed}
                      onClick={() => {
                        setOpenDivisionUserId(openDivisionUserId === user.id ? null : user.id);
                      }}
                      style={{
                        width: '150px',
                        height: '36px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        background: '#353535',
                        borderRadius: '8px',
                        outline: isDivChanged ? '1px solid #FFFFFF' : '1px #353535 solid',
                        outlineOffset: '-1px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        display: 'flex',
                        border: 'none',
                        cursor: isDeleteActive || isDimmed ? 'default' : 'pointer',
                      }}
                      className="hover:bg-[#404040] transition-colors select-none text-white text-sm"
                    >
                      <span
                        className="truncate pr-1"
                        style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
                      >
                        {stagedDivisions[user.id] !== undefined
                          ? stagedDivisions[user.id]
                          : user.division || 'Retail & Daily Banking'}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 text-white/70 transition-transform ${openDivisionUserId === user.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {openDivisionUserId === user.id && (
                      <>
                        {createPortal(
                          <div
                            className="fixed inset-0 z-40 bg-transparent"
                            onClick={() => setOpenDivisionUserId(null)}
                          />,
                          document.body,
                        )}
                        <div
                          style={{
                            background: '#212121',
                            border: '1px solid #3F3F3F',
                            borderRadius: '12px',
                            padding: '6px',
                            width: '220px',
                            maxHeight: '240px',
                            overflowY: 'auto',
                          }}
                          className="absolute right-0 top-full mt-1 shadow-2xl z-50 animate-in fade-in zoom-in-95 font-season-sans custom-scrollbar"
                        >
                          {availableDivisions.map((div) => {
                            const currentDiv =
                              stagedDivisions[user.id] !== undefined
                                ? stagedDivisions[user.id]
                                : user.division || 'Retail & Daily Banking';
                            const isSelected = currentDiv.toLowerCase() === div.toLowerCase();
                            return (
                              <button
                                key={div}
                                type="button"
                                onClick={() => {
                                  setStagedDivisions((prev) => ({ ...prev, [user.id]: div }));
                                  setOpenDivisionUserId(null);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer text-left ${
                                  isSelected
                                    ? 'bg-[#353535] text-white font-medium'
                                    : 'text-stone-300 hover:bg-[#2c2c2c]'
                                }`}
                              >
                                <span className="truncate">{div}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                              </button>
                            );
                          })}
                          <div className="my-1 border-t border-[#3F3F3F]" />
                          <button
                            type="button"
                            onClick={() => {
                              setOpenDivisionUserId(null);
                              setActiveTab('division');
                            }}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-teal-400 hover:bg-teal-500/10 text-left cursor-pointer transition-colors font-medium"
                          >
                            <span>Manage Divisions</span>
                            <span className="text-[10px] text-teal-400/80 font-normal">
                              Division Tab →
                            </span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Role Selector Button / Display */}
                  <div
                    className="relative shrink-0"
                    style={{
                      width: '104px',
                      height: '36px',
                      paddingLeft: '12px',
                      paddingRight: user.role === 'manager' ? '12px' : '12px',
                      background: '#353535',
                      borderRadius: '8px',
                      outline: isRoleChanged ? '1px solid #FFFFFF' : '1px #353535 solid',
                      outlineOffset: '-1px',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '12px',
                      display: 'flex',
                    }}
                  >
                    {user.role === 'manager' ? (
                      <span
                        style={{
                          flex: '1 1 0',
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          userSelect: 'none',
                          cursor: 'default',
                        }}
                      >
                        Manager
                      </span>
                    ) : (
                      <>
                        <select
                          value={currentStagedRole}
                          disabled={isDeleteActive || isDimmed}
                          onChange={(e) =>
                            handleRoleChange(user.id, e.target.value as 'admin' | 'product')
                          }
                          style={{
                            flex: '1 1 0',
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '0.28px',
                            wordWrap: 'break-word',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            appearance: 'none',
                            cursor: isDeleteActive || isDimmed ? 'default' : 'pointer',
                            paddingRight: '18px',
                          }}
                        >
                          <option value="admin" className="bg-[#353535] text-white">
                            Admin
                          </option>
                          <option value="product" className="bg-[#353535] text-white">
                            Product
                          </option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-white absolute right-2.5 pointer-events-none" />
                      </>
                    )}
                  </div>

                  {/* Delete Icon */}
                  <button
                    type="button"
                    disabled={
                      user.role === 'manager' ||
                      user.id === currentUser.id ||
                      isRoleEditingActive ||
                      isDimmed
                    }
                    onClick={() => {
                      setDeleteTargetUser(user);
                    }}
                    style={{
                      width: '24px',
                      height: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'transparent',
                      border: 'none',
                      cursor:
                        user.role === 'manager' ||
                        user.id === currentUser.id ||
                        isRoleEditingActive ||
                        isDimmed
                          ? 'default'
                          : 'pointer',
                      opacity: user.role === 'manager' || user.id === currentUser.id ? 0.15 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                      flexShrink: 0,
                    }}
                    title={
                      user.role === 'manager' || user.id === currentUser.id
                        ? undefined
                        : `Delete ${user.name}`
                    }
                  >
                    <Trash2
                      className="w-4.5 h-4.5 transition-colors"
                      style={{
                        color: isDeletingThisUser ? '#F87171' : 'rgba(255, 255, 255, 0.25)',
                      }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
