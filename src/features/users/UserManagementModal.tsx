import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { AppUser, DivisionItem, DivisionStatus } from '../../types';
import { AccountActionFooter } from './AccountActionFooter';
import { AddDivisionDialog } from './AddDivisionDialog';
import { DeleteDivisionDialog } from './DeleteDivisionDialog';
import { DivisionsTab } from './DivisionsTab';
import { EditDivisionDialog } from './EditDivisionDialog';
import { MemberList } from './MemberList';
import { MemberSearch } from './MemberSearch';
import { MembersToolbar } from './MembersToolbar';
import { PendingApprovals } from './PendingApprovals';

interface UserManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AppUser;
  users: AppUser[];
  divisions: DivisionItem[];
  onApproveUser: (userId: string, targetRole?: 'admin' | 'product') => Promise<void>;
  onRejectUser: (userId: string, reason?: string) => Promise<void>;
  onUpdateUserRole: (userId: string, role: 'admin' | 'product') => Promise<void>;
  onUpdateUserDivision: (userId: string, division: string) => Promise<void>;
  onUpdateUserName: (userId: string, name: string) => Promise<void>;
  onDeleteUser: (userId: string) => Promise<void>;
  onAddDivision: (name: string, description?: string, status?: DivisionStatus) => Promise<void>;
  onUpdateDivision: (id: string, updates: Partial<DivisionItem>) => Promise<void>;
  onDeleteDivision: (id: string) => Promise<void>;
}

export function UserManagementModal({
  isOpen,
  onClose,
  currentUser,
  users,
  divisions,
  onApproveUser,
  onRejectUser,
  onUpdateUserRole,
  onUpdateUserDivision,
  onUpdateUserName,
  onDeleteUser,
  onAddDivision,
  onUpdateDivision,
  onDeleteDivision,
}: UserManagementModalProps) {
  const [activeTab, setActiveTab] = useState<'account' | 'division'>('account');
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'admin' | 'product'>('all');
  const [divisionFilter, setDivisionFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<
    'default' | 'name-asc' | 'name-desc' | 'division-asc' | 'division-desc'
  >('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [stagedRoles, setStagedRoles] = useState<{ [userId: string]: 'admin' | 'product' }>({});
  const [stagedDivisions, setStagedDivisions] = useState<{ [userId: string]: string }>({});
  const [stagedNames, setStagedNames] = useState<{ [userId: string]: string }>({});
  const [openDivisionUserId, setOpenDivisionUserId] = useState<string | null>(null);
  const [deleteTargetUser, setDeleteTargetUser] = useState<AppUser | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Division Tab States
  const [divisionSearchQuery, setDivisionSearchQuery] = useState('');
  const [divisionSortOrder, setDivisionSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isAddDivisionModalOpen, setIsAddDivisionModalOpen] = useState(false);
  const [addDivisionForm, setAddDivisionForm] = useState<{
    name: string;
    status: 'Active' | 'Inactive';
  }>({
    name: '',
    status: 'Active',
  });
  const [isEditDivisionModalOpen, setIsEditDivisionModalOpen] = useState(false);
  const [editingDivision, setEditingDivision] = useState<DivisionItem | null>(null);
  const [editDivisionForm, setEditDivisionForm] = useState<{
    name: string;
    status: 'Active' | 'Inactive';
  }>({
    name: '',
    status: 'Active',
  });
  const [deleteDivisionTarget, setDeleteDivisionTarget] = useState<DivisionItem | null>(null);
  const [isSavingDivision, setIsSavingDivision] = useState(false);
  const [isDeletingDivision, setIsDeletingDivision] = useState(false);
  const [divisionFeedback, setDivisionFeedback] = useState<string | null>(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize and reset state every time modal opens or users list updates
  useEffect(() => {
    if (isOpen) {
      const initialRoles: { [userId: string]: 'admin' | 'product' } = {};
      const initialDivs: { [userId: string]: string } = {};
      const initialNames: { [userId: string]: string } = {};
      users.forEach((u) => {
        initialRoles[u.id] = u.role === 'admin' ? 'admin' : 'product';
        initialDivs[u.id] = u.division || 'Retail & Daily Banking';
        initialNames[u.id] = u.name;
      });
      setStagedRoles(initialRoles);
      setStagedDivisions(initialDivs);
      setStagedNames(initialNames);
      setOpenDivisionUserId(null);
      setIsAddDivisionModalOpen(false);
      setIsEditDivisionModalOpen(false);
      setDeleteDivisionTarget(null);
      setEditingDivision(null);
      setDeleteTargetUser(null);
      setSearchQuery('');
      setDivisionSearchQuery('');
      setRoleFilter('all');
      setDivisionFilter('all');
      setSortBy('default');
      setIsFilterOpen(false);
      setIsSortOpen(false);
    }
  }, [isOpen, users]);

  // Click outside to close filter/sort dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const pendingUsers = users.filter((u) => u.status === 'pending');
  const approvedUsers = users.filter((u) => u.status === 'approved' || !u.status);

  // Identify which user is currently having a staged role, division, or name change
  const activeEditingUser = approvedUsers.find((u) => {
    const isManager = u.role === 'manager';
    const currentSavedRole: 'admin' | 'product' = u.role === 'admin' ? 'admin' : 'product';
    const stagedRole = stagedRoles[u.id];
    const roleChanged = !isManager && stagedRole !== undefined && stagedRole !== currentSavedRole;

    const currentSavedDivision = u.division || 'Retail & Daily Banking';
    const stagedDiv = stagedDivisions[u.id];
    const divChanged = stagedDiv !== undefined && stagedDiv !== currentSavedDivision;

    const currentSavedName = u.name;
    const stagedName = stagedNames[u.id];
    const nameChanged = stagedName !== undefined && stagedName !== currentSavedName;

    return roleChanged || divChanged || nameChanged;
  });

  const isRoleEditingActive = !!activeEditingUser;
  const isDeleteActive = !!deleteTargetUser;
  const isActionActive = isRoleEditingActive || isDeleteActive;

  // Extract unique available divisions for filter dropdown
  const availableDivisions = Array.from(
    new Set([
      ...divisions.map((d) => d.name),
      ...approvedUsers.map((u) => u.division).filter(Boolean),
    ]),
  ).filter((d) => d && d !== 'All Divisions');

  // Calculate overall counts
  const adminCount = approvedUsers.filter(
    (u) => (stagedRoles[u.id] !== undefined ? stagedRoles[u.id] : u.role) === 'admin',
  ).length;
  const productCount = approvedUsers.filter(
    (u) => (stagedRoles[u.id] !== undefined ? stagedRoles[u.id] : u.role) === 'product',
  ).length;

  // Sorting & Filtering
  const getRoleWeight = (role: string) => {
    if (role === 'manager') return 0;
    if (role === 'admin') return 1;
    return 2; // product
  };

  const processedMembers = [...approvedUsers]
    .filter((u) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = u.name.toLowerCase().includes(q);
        const matchEmail = u.email.toLowerCase().includes(q);
        const matchDiv = (u.division || '').toLowerCase().includes(q);
        if (!matchName && !matchEmail && !matchDiv) return false;
      }
      // 2. Role Filter
      const effectiveRole = stagedRoles[u.id] !== undefined ? stagedRoles[u.id] : u.role;
      if (roleFilter !== 'all') {
        if (roleFilter === 'admin' && effectiveRole !== 'admin' && effectiveRole !== 'manager')
          return false;
        if (roleFilter === 'product' && effectiveRole !== 'product') return false;
      }
      // 3. Division Filter
      if (divisionFilter !== 'all') {
        if ((u.division || 'All Divisions').toLowerCase() !== divisionFilter.toLowerCase())
          return false;
      }
      return true;
    })
    .sort((a, b) => {
      const roleA = stagedRoles[a.id] !== undefined ? stagedRoles[a.id] : a.role;
      const roleB = stagedRoles[b.id] !== undefined ? stagedRoles[b.id] : b.role;
      const divA = a.division || '';
      const divB = b.division || '';
      const nameA = a.name || '';
      const nameB = b.name || '';

      if (sortBy === 'name-asc') {
        return nameA.localeCompare(nameB, 'id', { sensitivity: 'base' });
      }
      if (sortBy === 'name-desc') {
        return nameB.localeCompare(nameA, 'id', { sensitivity: 'base' });
      }
      if (sortBy === 'division-asc') {
        const divCompare = divA.localeCompare(divB, 'id', { sensitivity: 'base' });
        return divCompare !== 0
          ? divCompare
          : nameA.localeCompare(nameB, 'id', { sensitivity: 'base' });
      }
      if (sortBy === 'division-desc') {
        const divCompare = divB.localeCompare(divA, 'id', { sensitivity: 'base' });
        return divCompare !== 0
          ? divCompare
          : nameA.localeCompare(nameB, 'id', { sensitivity: 'base' });
      }

      // Default Sorting:
      // 1. Role (Admin/Manager terlebih dahulu, lalu Product)
      const weightDiff = getRoleWeight(roleA) - getRoleWeight(roleB);
      if (weightDiff !== 0) return weightDiff;

      // 2. Divisi (Sesuai abjad)
      const divCompare = divA.localeCompare(divB, 'id', { sensitivity: 'base' });
      if (divCompare !== 0) return divCompare;

      // 3. Nama (Sesuai abjad)
      return nameA.localeCompare(nameB, 'id', { sensitivity: 'base' });
    });

  const handleRoleChange = (userId: string, newRole: 'admin' | 'product') => {
    // If we're deleting, don't allow changing role
    if (isDeleteActive) return;
    const target = users.find((u) => u.id === userId);
    if (target?.role === 'manager') return;
    setStagedRoles((prev) => ({ ...prev, [userId]: newRole }));
  };

  const handleCancelRoleChanges = () => {
    const initialRoles: { [userId: string]: 'admin' | 'product' } = {};
    const initialDivs: { [userId: string]: string } = {};
    const initialNames: { [userId: string]: string } = {};
    users.forEach((u) => {
      initialRoles[u.id] = u.role === 'admin' ? 'admin' : 'product';
      initialDivs[u.id] = u.division || 'Retail & Daily Banking';
      initialNames[u.id] = u.name;
    });
    setStagedRoles(initialRoles);
    setStagedDivisions(initialDivs);
    setStagedNames(initialNames);
  };

  const handleCloseModal = () => {
    // Reset all unstored state on close so nothing persists
    handleCancelRoleChanges();
    setDeleteTargetUser(null);
    setSearchQuery('');
    setRoleFilter('all');
    setDivisionFilter('all');
    setSortBy('default');
    setIsFilterOpen(false);
    setIsSortOpen(false);
    onClose();
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      for (const user of approvedUsers) {
        if (user.role !== 'manager') {
          const currentSavedRole = user.role === 'admin' ? 'admin' : 'product';
          const targetRole = stagedRoles[user.id];
          if (targetRole && targetRole !== currentSavedRole) {
            await onUpdateUserRole(user.id, targetRole);
          }
        }
        const currentSavedDiv = user.division || 'Retail & Daily Banking';
        const targetDiv = stagedDivisions[user.id];
        if (targetDiv && targetDiv !== currentSavedDiv && onUpdateUserDivision) {
          await onUpdateUserDivision(user.id, targetDiv);
        }
        const currentSavedName = user.name;
        const targetName = stagedNames[user.id];
        if (
          targetName !== undefined &&
          targetName.trim() &&
          targetName.trim() !== currentSavedName &&
          onUpdateUserName
        ) {
          await onUpdateUserName(user.id, targetName.trim());
        }
      }
    } finally {
      setIsSaving(false);
      onClose();
    }
  };

  const isFilterActive = roleFilter !== 'all' || divisionFilter !== 'all';
  const isSortActive = sortBy !== 'default';

  // Filter and sort divisions for Division tab
  const filteredDivisions = divisions
    .filter((d) => {
      if (!divisionSearchQuery.trim()) return true;
      const q = divisionSearchQuery.toLowerCase();
      return d.name.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      const cmp = a.name.localeCompare(b.name);
      return divisionSortOrder === 'asc' ? cmp : -cmp;
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Outer Modal Container (Fixed frame, overflow-hidden so footer stays stationary) */}
      <div
        ref={modalRef}
        style={{
          width: '100%',
          maxWidth: '840px',
          height: 'min(90vh, 880px)',
          maxHeight: '90vh',
          background: '#212121',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Sticky Fixed Header: Title and Close button only */}
        <div
          className="shrink-0 relative z-20 flex items-center justify-between"
          style={{
            padding: '24px 24px 16px 24px',
            background: '#212121',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
            Account Management
          </div>
          <button
            type="button"
            onClick={handleCloseModal}
            style={{
              width: '28px',
              height: '28px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Close"
          >
            <X className="w-5 h-5 text-white hover:text-stone-300 transition-colors" />
          </button>
        </div>

        {/* Tab Navigation: Account vs Division */}
        <div className="shrink-0 relative z-20 flex items-center gap-8 px-6 border-b border-[#333333] bg-[#212121]">
          <button
            type="button"
            onClick={() => setActiveTab('account')}
            className={`py-3.5 text-sm font-medium transition-all relative cursor-pointer ${
              activeTab === 'account' ? 'text-white' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Account
            {activeTab === 'account' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('division')}
            className={`py-3.5 text-sm font-medium transition-all relative cursor-pointer flex items-center gap-2 ${
              activeTab === 'division' ? 'text-white' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Division
            {activeTab === 'division' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-[#333333] text-stone-300 font-normal">
              {divisions.length}
            </span>
          </button>
        </div>

        {/* Account Tab Content */}
        {activeTab === 'account' && (
          <>
            {/* Unified Scrollable Container: Contains ALL sections (Pending, Reset Requests, Search, Filter/Sort, Members List) */}
            <div
              className="flex-1 min-h-0 overflow-y-auto custom-scrollbar"
              style={{
                padding: '20px 24px 32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: 0,
                overscrollBehavior: 'contain',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255, 255, 255, 0.25) transparent',
              }}
            >
              <PendingApprovals
                isActionActive={isActionActive}
                onApproveUser={onApproveUser}
                onRejectUser={onRejectUser}
                pendingUsers={pendingUsers}
              />

              <MemberSearch
                approvedUsers={approvedUsers}
                isActionActive={isActionActive}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <MembersToolbar
                adminCount={adminCount}
                availableDivisions={availableDivisions}
                divisionFilter={divisionFilter}
                filterRef={filterRef}
                isActionActive={isActionActive}
                isFilterActive={isFilterActive}
                isFilterOpen={isFilterOpen}
                isSortActive={isSortActive}
                isSortOpen={isSortOpen}
                productCount={productCount}
                roleFilter={roleFilter}
                setDivisionFilter={setDivisionFilter}
                setIsFilterOpen={setIsFilterOpen}
                setIsSortOpen={setIsSortOpen}
                setRoleFilter={setRoleFilter}
                setSortBy={setSortBy}
                sortBy={sortBy}
                sortRef={sortRef}
              />

              <MemberList
                activeEditingUser={activeEditingUser}
                approvedUsers={approvedUsers}
                availableDivisions={availableDivisions}
                currentUser={currentUser}
                deleteTargetUser={deleteTargetUser}
                handleRoleChange={handleRoleChange}
                isActionActive={isActionActive}
                isDeleteActive={isDeleteActive}
                isRoleEditingActive={isRoleEditingActive}
                openDivisionUserId={openDivisionUserId}
                processedMembers={processedMembers}
                setActiveTab={setActiveTab}
                setDeleteTargetUser={setDeleteTargetUser}
                setDivisionFilter={setDivisionFilter}
                setOpenDivisionUserId={setOpenDivisionUserId}
                setRoleFilter={setRoleFilter}
                setSearchQuery={setSearchQuery}
                setSortBy={setSortBy}
                setStagedDivisions={setStagedDivisions}
                setStagedNames={setStagedNames}
                stagedDivisions={stagedDivisions}
                stagedNames={stagedNames}
                stagedRoles={stagedRoles}
              />
            </div>

            <AccountActionFooter
              deleteTargetUser={deleteTargetUser}
              handleCancelRoleChanges={handleCancelRoleChanges}
              handleSaveAll={handleSaveAll}
              isRoleEditingActive={isRoleEditingActive}
              isSaving={isSaving}
              onDeleteUser={onDeleteUser}
              setDeleteTargetUser={setDeleteTargetUser}
            />
          </>
        )}

        <DivisionsTab
          activeTab={activeTab}
          divisionSearchQuery={divisionSearchQuery}
          divisionSortOrder={divisionSortOrder}
          filteredDivisions={filteredDivisions}
          setAddDivisionForm={setAddDivisionForm}
          setDeleteDivisionTarget={setDeleteDivisionTarget}
          setDivisionSearchQuery={setDivisionSearchQuery}
          setDivisionSortOrder={setDivisionSortOrder}
          setEditDivisionForm={setEditDivisionForm}
          setEditingDivision={setEditingDivision}
          setIsAddDivisionModalOpen={setIsAddDivisionModalOpen}
          setIsEditDivisionModalOpen={setIsEditDivisionModalOpen}
        />
      </div>

      <AddDivisionDialog
        addDivisionForm={addDivisionForm}
        isAddDivisionModalOpen={isAddDivisionModalOpen}
        isSavingDivision={isSavingDivision}
        onAddDivision={onAddDivision}
        setAddDivisionForm={setAddDivisionForm}
        setDivisionFeedback={setDivisionFeedback}
        setIsAddDivisionModalOpen={setIsAddDivisionModalOpen}
        setIsSavingDivision={setIsSavingDivision}
      />

      <EditDivisionDialog
        editDivisionForm={editDivisionForm}
        editingDivision={editingDivision}
        isEditDivisionModalOpen={isEditDivisionModalOpen}
        isSavingDivision={isSavingDivision}
        onUpdateDivision={onUpdateDivision}
        setDivisionFeedback={setDivisionFeedback}
        setEditDivisionForm={setEditDivisionForm}
        setIsEditDivisionModalOpen={setIsEditDivisionModalOpen}
        setIsSavingDivision={setIsSavingDivision}
      />

      <DeleteDivisionDialog
        deleteDivisionTarget={deleteDivisionTarget}
        isDeletingDivision={isDeletingDivision}
        onDeleteDivision={onDeleteDivision}
        setDeleteDivisionTarget={setDeleteDivisionTarget}
        setDivisionFeedback={setDivisionFeedback}
        setIsDeletingDivision={setIsDeletingDivision}
        users={users}
      />

      {/* Toast Feedback */}
      {divisionFeedback && (
        <div className="fixed bottom-6 right-6 z-[100100] bg-[#00DF81] text-black text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-2 duration-150">
          <Check className="w-4 h-4 text-black" />
          <span>{divisionFeedback}</span>
        </div>
      )}
    </div>
  );
}
