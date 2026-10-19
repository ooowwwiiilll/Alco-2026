import { useEffect, useMemo, useRef, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { isEditor, isManager, isProduct, isReleaseAuthor as isAuthorOf } from '../../domain/access';
import { pageTemplateCategory as getPageTemplateCategory } from '../../domain/templates';
import type { ViewMode, SidebarTab, StatusFilter } from './types';
import type {
  AppNotification,
  AppUser,
  DivisionItem,
  MediaItem,
  PageTemplate,
  ReleaseItem,
  SectionTemplate,
} from '../../types';

import { ComponentEditModal } from '../templates/ComponentEditModal';
import { ComponentPreviewModal } from '../templates/ComponentPreviewModal';
import { TemplatePreviewModal } from '../templates/TemplatePreviewModal';
import { DeleteCategoryDialog } from './DeleteCategoryDialog';
import { DeletePageTemplateDialog } from './DeletePageTemplateDialog';
import { DeleteReleaseDialog } from './DeleteReleaseDialog';
import { EditTemplateDialog } from './EditTemplateDialog';
import { ComponentTable } from './ComponentTable';
import { ComponentGrid } from './ComponentGrid';
import { TemplateTable } from './TemplateTable';
import { TemplateGrid } from './TemplateGrid';
import { ReleaseTable } from './ReleaseTable';
import { ReleaseGrid } from './ReleaseGrid';
import { DashboardToolbar } from './DashboardToolbar';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { TemplateSelectionModal } from './TemplateSelectionModal';

export interface DashboardPageProps {
  currentUser: AppUser;
  releases: ReleaseItem[];
  pageTemplates: PageTemplate[];
  templates: SectionTemplate[];
  divisions: DivisionItem[];
  users: AppUser[];
  templateCategories: string[];
  onAddTemplateCategory: (category: string) => void;
  onDeleteTemplateCategory: (category: string) => void;
  pendingApprovalsCount: number;
  unreadNotificationsCount: number;
  notifications: AppNotification[];
  onMarkAllNotificationsAsRead: () => void;
  onApproveRelease: (releaseId: string) => void;
  onRejectRelease: (releaseId: string) => void;
  onOpenNotifications: () => void;
  onOpenUserManagement?: () => void;
  onOpenImageStorageManagement?: () => void;
  onOpenBackup?: () => void;
  onOpenNewTemplateModal: () => void;
  onSelectRelease: (release: ReleaseItem) => void;
  onSelectPageTemplate: (pt: PageTemplate) => void;
  onSelectComponent: (sec: SectionTemplate) => void;
  onRenameComponent?: (templateId: string, newName: string) => void;
  onUpdateComponentTemplate?: (
    templateId: string,
    updatedHtml: string,
    updatedName: string,
  ) => Promise<void>;
  mediaLibrary: MediaItem[];
  onEditPageTemplate: (
    templateId: string,
    newName: string,
    newDesc?: string,
    newCategory?: string,
  ) => void;
  onCreateNewCanvas: () => void;
  onDuplicateRelease: (release: ReleaseItem) => void;
  onDeleteRelease: (releaseId: string) => void;
  onDeletePageTemplate: (templateId: string) => void;
  onShareRelease: (releaseId: string, device?: 'desktop' | 'mobile') => void;
  onPreviewRelease: (release: ReleaseItem) => void;
  onLogout: () => void;
}

export function DashboardPage({
  currentUser,
  releases,
  pageTemplates,
  templates,
  divisions,
  users,
  templateCategories,
  onAddTemplateCategory,
  pendingApprovalsCount,
  unreadNotificationsCount,
  notifications,
  onMarkAllNotificationsAsRead,
  onApproveRelease,
  onRejectRelease,
  onOpenNotifications,
  onOpenUserManagement,
  onOpenImageStorageManagement,
  onOpenBackup,
  onOpenNewTemplateModal,
  onSelectRelease,
  onSelectPageTemplate,
  onSelectComponent,
  onRenameComponent,
  onUpdateComponentTemplate,
  mediaLibrary,
  onEditPageTemplate,
  onCreateNewCanvas,
  onDuplicateRelease,
  onDeleteRelease,
  onDeletePageTemplate,
  onDeleteTemplateCategory,
  onShareRelease,
  onPreviewRelease,
  onLogout,
}: DashboardPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('thumbnail');
  const [activeTab, setActiveTab] = useState<SidebarTab>('releases');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('review');
  const [divisionFilter, setDivisionFilter] = useState<string>('all');
  const [userFilter, setUserFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDivisionDropdownOpen, setIsDivisionDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const [isCreatePageMenuOpen, setIsCreatePageMenuOpen] = useState(false);
  const [isTemplateSelectionOpen, setIsTemplateSelectionOpen] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<PageTemplate | null>(null);
  const [previewComponent, setPreviewComponent] = useState<SectionTemplate | null>(null);
  const [editingComponentTemplate, setEditingComponentTemplate] = useState<SectionTemplate | null>(
    null,
  );
  const [editingTemplate, setEditingTemplate] = useState<PageTemplate | null>(null);
  const [editTemplateName, setEditTemplateName] = useState('');
  const [editTemplateDesc, setEditTemplateDesc] = useState('');
  const [editTemplateCategory, setEditTemplateCategory] = useState('LANDING');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [deleteConfirmCategory, setDeleteConfirmCategory] = useState<string | null>(null);
  const [isAddingCategoryDropdown, setIsAddingCategoryDropdown] = useState(false);
  const [newCategoryDropdownInput, setNewCategoryDropdownInput] = useState('');
  const [isEditTemplateCategoryMode, setIsEditTemplateCategoryMode] = useState(false);
  const [isEditCategoryFilterDropdownMode, setIsEditCategoryFilterDropdownMode] = useState(false);

  const handleDeleteTemplateCategory = (catToDelete: string) => {
    if (templateCategories.length <= 1) return;
    const remaining = templateCategories.filter(
      (c) => c.toUpperCase() !== catToDelete.toUpperCase(),
    );
    if (editTemplateCategory.toUpperCase() === catToDelete.toUpperCase())
      setEditTemplateCategory(remaining[0] || 'LANDING');
    if (templateCategoryFilter.toUpperCase() === catToDelete.toUpperCase())
      setTemplateCategoryFilter('all');
    onDeleteTemplateCategory(catToDelete);
  };

  const handleAddCategoryFromDropdown = () => {
    const trimmed = newCategoryDropdownInput.trim().toUpperCase();
    if (trimmed) {
      if (!templateCategories.some((c) => c.toUpperCase() === trimmed))
        onAddTemplateCategory(trimmed);
      setTemplateCategoryFilter(trimmed);
    }
    setNewCategoryDropdownInput('');
    setIsAddingCategoryDropdown(false);
  };

  const [deleteConfirmItem, setDeleteConfirmItem] = useState<ReleaseItem | null>(null);
  const [deleteConfirmTemplate, setDeleteConfirmTemplate] = useState<PageTemplate | null>(null);

  // Dynamic responsive grid columns based on sidebar state and viewport
  const gridResponsiveClass = useMemo(() => {
    return isSidebarOpen
      ? 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200'
      : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200';
  }, [isSidebarOpen]);

  // Auto-adapt sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const createPageContainerRef = useRef<HTMLDivElement>(null);
  const notificationsContainerRef = useRef<HTMLDivElement>(null);
  const userMenuContainerRef = useRef<HTMLDivElement>(null);
  const divisionContainerRef = useRef<HTMLDivElement>(null);
  const userContainerRef = useRef<HTMLDivElement>(null);
  const componentCategoryContainerRef = useRef<HTMLDivElement>(null);
  const templateCategoryContainerRef = useRef<HTMLDivElement>(null);

  // Template Category Filter State for Tab 'Templates'
  const [templateCategoryFilter, setTemplateCategoryFilter] = useState<string>('all');
  const [isTemplateCategoryDropdownOpen, setIsTemplateCategoryDropdownOpen] = useState(false);

  // Component Category Filter State for Tab 'Components'
  const [componentCategoryFilter, setComponentCategoryFilter] = useState<string>('all');
  const [isComponentCategoryDropdownOpen, setIsComponentCategoryDropdownOpen] = useState(false);

  // Global listener to close popups and dropdowns when user clicks outside
  useEffect(() => {
    const handleGlobalPointerDown = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const target = e.target as Node;
      if (!target) return;

      if (
        isCreatePageMenuOpen &&
        createPageContainerRef.current &&
        !createPageContainerRef.current.contains(target)
      ) {
        setIsCreatePageMenuOpen(false);
      }
      if (
        isNotificationsDropdownOpen &&
        notificationsContainerRef.current &&
        !notificationsContainerRef.current.contains(target)
      ) {
        setIsNotificationsDropdownOpen(false);
      }
      if (
        isUserMenuOpen &&
        userMenuContainerRef.current &&
        !userMenuContainerRef.current.contains(target)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        isDivisionDropdownOpen &&
        divisionContainerRef.current &&
        !divisionContainerRef.current.contains(target)
      ) {
        setIsDivisionDropdownOpen(false);
      }
      if (
        isUserDropdownOpen &&
        userContainerRef.current &&
        !userContainerRef.current.contains(target)
      ) {
        setIsUserDropdownOpen(false);
      }
      if (
        isComponentCategoryDropdownOpen &&
        componentCategoryContainerRef.current &&
        !componentCategoryContainerRef.current.contains(target)
      ) {
        setIsComponentCategoryDropdownOpen(false);
      }
      if (
        isTemplateCategoryDropdownOpen &&
        templateCategoryContainerRef.current &&
        !templateCategoryContainerRef.current.contains(target)
      ) {
        setIsTemplateCategoryDropdownOpen(false);
      }
      if (activeMenuId) {
        const targetEl = target as Element;
        const insideMenu = targetEl.closest?.('[data-card-menu="true"]');
        if (!insideMenu) {
          setActiveMenuId(null);
        }
      }
    };

    document.addEventListener('pointerdown', handleGlobalPointerDown, true);
    document.addEventListener('mousedown', handleGlobalPointerDown, true);
    document.addEventListener('touchstart', handleGlobalPointerDown, true);
    return () => {
      document.removeEventListener('pointerdown', handleGlobalPointerDown, true);
      document.removeEventListener('mousedown', handleGlobalPointerDown, true);
      document.removeEventListener('touchstart', handleGlobalPointerDown, true);
    };
  }, [
    isCreatePageMenuOpen,
    isNotificationsDropdownOpen,
    isUserMenuOpen,
    isDivisionDropdownOpen,
    isUserDropdownOpen,
    isComponentCategoryDropdownOpen,
    isTemplateCategoryDropdownOpen,
    activeMenuId,
  ]);

  // Auto collapse search back to icon mode when search is empty and user clicks outside / inactive
  useEffect(() => {
    if (!isSearchInputOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        if (!searchQuery || searchQuery.trim() === '') {
          setIsSearchInputOpen(false);
          setSearchQuery('');
        }
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isSearchInputOpen, searchQuery]);

  const isProductRole = isProduct(currentUser);
  const isRoleManager = isManager(currentUser);
  const isManagerOrAdmin = isEditor(currentUser);
  const userDivision = (currentUser?.division || '').trim();

  const isReleaseAuthor = (rel: ReleaseItem) => isAuthorOf(currentUser, rel);

  // For product user, visible releases are strictly scoped to their own team/division
  const visibleReleases = useMemo(() => {
    if (!isProductRole || !userDivision) return releases;
    return releases.filter(
      (r) => (r.division || '').trim().toLowerCase() === userDivision.toLowerCase(),
    );
  }, [releases, isProductRole, userDivision]);

  const pendingUsers = (users || []).filter((u) => u.status === 'pending');
  const actualPendingCount = pendingUsers.length || pendingApprovalsCount;
  const latestPendingUser = pendingUsers[0];

  // Divisions offered by the filter: configured divisions plus any found on releases.
  const availableDivisions = useMemo(
    () =>
      [
        ...new Set([
          ...divisions.map((division) => division.name),
          ...releases.map((r) => r.division),
        ]),
      ].filter(Boolean),
    [divisions, releases],
  );

  // Available unique users for filtering (for Product role, ONLY users from the same team)
  const availableUsers = useMemo(() => {
    const set = new Set<string>();
    if (isProductRole && userDivision) {
      // Only users from the same division
      releases.forEach((r) => {
        if (
          r.authorName &&
          (r.division || '').trim().toLowerCase() === userDivision.toLowerCase()
        ) {
          set.add(r.authorName);
        }
      });
      users.forEach((u) => {
        if (u.name && (u.division || '').trim().toLowerCase() === userDivision.toLowerCase()) {
          set.add(u.name);
        }
      });
      if (currentUser?.name) {
        set.add(currentUser.name);
      }
    } else {
      releases.forEach((r) => {
        if (r.authorName) set.add(r.authorName);
      });
      users.forEach((u) => {
        if (u.name) set.add(u.name);
      });
    }
    return Array.from(set);
  }, [releases, users, isProductRole, userDivision, currentUser]);

  // Available unique component categories for filtering (e.g. NAVIGATION, HEADER, FINANCE, etc.)
  const availableComponentCategories = useMemo(() => {
    const set = new Set<string>();
    templates.forEach((t) => {
      if (t.category && t.category.trim()) {
        set.add(t.category.trim().toLowerCase());
      }
    });
    return Array.from(set).sort();
  }, [templates]);

  // Available unique template categories for filtering (e.g. LANDING, PLP, PDP, OTHERS)
  const availableTemplateCategories = useMemo(() => {
    const set = new Set<string>(templateCategories);
    pageTemplates.forEach((pt) => {
      const cat = getPageTemplateCategory(pt);
      if (cat) {
        set.add(cat.toUpperCase());
      }
    });
    return Array.from(set);
  }, [pageTemplates, templateCategories]);

  // Helper for counting templates per category
  const getTemplateCategoryCount = (category: string) => {
    if (category === 'all') return pageTemplates.length;
    return pageTemplates.filter(
      (pt) => getPageTemplateCategory(pt).toLowerCase() === category.toLowerCase(),
    ).length;
  };

  // Helper for counting components per category
  const getCategoryCount = (category: string) => {
    if (category === 'all') return templates.length;
    return templates.filter((t) => (t.category || '').toLowerCase() === category.toLowerCase())
      .length;
  };

  // Count of templates needing review (adapted to division filter if applied, and scoped to team for Product)
  const reviewTemplatesCount = useMemo(() => {
    return visibleReleases.filter((r) => {
      if (r.status !== 'in_review') return false;
      if (
        !isProductRole &&
        divisionFilter !== 'all' &&
        r.division?.toLowerCase() !== divisionFilter.toLowerCase()
      ) {
        return false;
      }
      return true;
    }).length;
  }, [visibleReleases, isProductRole, divisionFilter]);

  // Filtered releases
  const filteredReleases = useMemo(() => {
    return visibleReleases.filter((r) => {
      // Status filter
      if (statusFilter === 'approved' && r.status !== 'approved') return false;
      if (statusFilter === 'review' && r.status !== 'in_review') return false;
      if (statusFilter === 'reject' && r.status !== 'rejected') return false;

      // Division filter (only applies to Admin/Manager; Product role is already scoped to visibleReleases)
      if (
        !isProductRole &&
        divisionFilter !== 'all' &&
        r.division?.toLowerCase() !== divisionFilter.toLowerCase()
      ) {
        return false;
      }

      // User filter
      if (userFilter !== 'all' && r.authorName?.toLowerCase() !== userFilter.toLowerCase()) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = r.name.toLowerCase().includes(query);
        const matchAuthor = (r.authorName || '').toLowerCase().includes(query);
        const matchDivision = (r.division || '').toLowerCase().includes(query);
        if (!matchName && !matchAuthor && !matchDivision) return false;
      }

      return true;
    });
  }, [visibleReleases, statusFilter, isProductRole, divisionFilter, userFilter, searchQuery]);

  // Filtered templates (sorted descending by newest update / creation date)
  const filteredTemplates = useMemo(() => {
    return pageTemplates
      .filter((pt) => {
        // Category filter (e.g. LANDING, PLP, PDP, OTHERS)
        if (templateCategoryFilter !== 'all') {
          if (getPageTemplateCategory(pt).toLowerCase() !== templateCategoryFilter.toLowerCase()) {
            return false;
          }
        }
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchName = pt.name.toLowerCase().includes(query);
          const matchDesc = (pt.description || '').toLowerCase().includes(query);
          const matchCategory = getPageTemplateCategory(pt).toLowerCase().includes(query);
          if (!matchName && !matchDesc && !matchCategory) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return dateB - dateA;
      });
  }, [pageTemplates, templateCategoryFilter, searchQuery]);

  // Filtered section components (sorted descending by newest update / creation date)
  const filteredComponents = useMemo(() => {
    return templates
      .filter((tpl) => {
        // Category filter (e.g. NAVIGATION, HEADER, FINANCE)
        if (componentCategoryFilter !== 'all') {
          if ((tpl.category || '').toLowerCase() !== componentCategoryFilter.toLowerCase()) {
            return false;
          }
        }
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchName = tpl.name.toLowerCase().includes(query);
          const matchCategory = (tpl.category || '').toLowerCase().includes(query);
          if (!matchName && !matchCategory) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return dateB - dateA;
      });
  }, [templates, componentCategoryFilter, searchQuery]);

  // Helper to format date nicely (e.g., "6 Okt 2026")
  const formatDateStr = (dateVal?: string) => {
    if (!dateVal) return '-';
    try {
      const d = new Date(dateVal);
      if (isNaN(d.getTime())) return dateVal;
      const day = d.getDate();
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agt',
        'Sep',
        'Okt',
        'Nov',
        'Des',
      ];
      return `${day} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    } catch {
      return dateVal;
    }
  };

  // Helper for status badge presentation
  const renderStatusPill = (status?: string) => {
    if (status === 'approved') {
      return (
        <div
          style={{
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '4px',
            paddingBottom: '4px',
            background: '#00EFAB',
            borderRadius: '100px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: '12px',
              fontFamily: "'Season Sans', sans-serif",
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            Approved
          </div>
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div
          style={{
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '4px',
            paddingBottom: '4px',
            background: '#DE225A',
            borderRadius: '100px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: '12px',
              fontFamily: "'Season Sans', sans-serif",
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            Reject
          </div>
        </div>
      );
    }
    // Default to 'in_review' / Review
    return (
      <div
        style={{
          paddingLeft: '8px',
          paddingRight: '8px',
          paddingTop: '4px',
          paddingBottom: '4px',
          background: '#DED522',
          borderRadius: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '12px',
            fontFamily: "'Season Sans', sans-serif",
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Review
        </div>
      </div>
    );
  };

  // User avatar helper
  const userInitials = useMemo(() => {
    if (!currentUser?.name) return 'SA';
    const parts = currentUser.name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [currentUser?.name]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        position: 'relative',
        background: 'black',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      className="flex flex-col flex-1 text-white font-season-sans selection:bg-teal-800 bg-black h-screen max-h-screen w-full overflow-hidden"
    >
      <TemplateSelectionModal
        isTemplateSelectionOpen={isTemplateSelectionOpen}
        onCreateNewCanvas={onCreateNewCanvas}
        onSelectPageTemplate={onSelectPageTemplate}
        pageTemplates={pageTemplates}
        setIsTemplateSelectionOpen={setIsTemplateSelectionOpen}
      />

      <DashboardHeader
        actualPendingCount={actualPendingCount}
        createPageContainerRef={createPageContainerRef}
        currentUser={currentUser}
        isCreatePageMenuOpen={isCreatePageMenuOpen}
        isManagerOrAdmin={isManagerOrAdmin}
        isNotificationsDropdownOpen={isNotificationsDropdownOpen}
        isProductRole={isProductRole}
        isUserMenuOpen={isUserMenuOpen}
        latestPendingUser={latestPendingUser}
        notifications={notifications}
        notificationsContainerRef={notificationsContainerRef}
        onApproveRelease={onApproveRelease}
        onLogout={onLogout}
        onMarkAllNotificationsAsRead={onMarkAllNotificationsAsRead}
        onOpenImageStorageManagement={onOpenImageStorageManagement}
        onOpenBackup={onOpenBackup}
        onOpenNewTemplateModal={onOpenNewTemplateModal}
        onOpenUserManagement={onOpenUserManagement}
        onRejectRelease={onRejectRelease}
        onSelectRelease={onSelectRelease}
        releases={releases}
        setIsCreatePageMenuOpen={setIsCreatePageMenuOpen}
        setIsNotificationsDropdownOpen={setIsNotificationsDropdownOpen}
        setIsTemplateSelectionOpen={setIsTemplateSelectionOpen}
        setIsUserMenuOpen={setIsUserMenuOpen}
        unreadNotificationsCount={unreadNotificationsCount}
        userInitials={userInitials}
        userMenuContainerRef={userMenuContainerRef}
      />

      {/* ========================================================
          MAIN BODY LAYOUT (Sidebar + Content Workspace)
         ======================================================== */}
      <div
        style={{
          backgroundColor: '#000000',
          height: 'calc(100vh - 68px)',
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          width: '100%',
          position: 'relative',
          alignItems: 'stretch',
          overflow: 'hidden',
        }}
        className="flex-1 flex w-full relative items-stretch bg-black overflow-hidden h-[calc(100vh-68px)] min-h-0"
      >
        {/* Mobile Backdrop for Sidebar Drawer */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <DashboardSidebar
          activeTab={activeTab}
          isSidebarOpen={isSidebarOpen}
          pageTemplates={pageTemplates}
          setActiveTab={setActiveTab}
          setIsSidebarOpen={setIsSidebarOpen}
          templates={templates}
          visibleReleases={visibleReleases}
        />

        {/* Floating Sidebar Toggle Button (Docked right edge of sticky sidebar) */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          style={{
            position: 'fixed',
            left: isSidebarOpen ? '312px' : '8px',
            top: '96px',
            zIndex: 45,
            background: '#1A1A1A',
            border: '1px solid #353535',
            borderLeft: isSidebarOpen ? 'none' : '1px solid #353535',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            borderTopLeftRadius: isSidebarOpen ? '0px' : '8px',
            borderBottomLeftRadius: isSidebarOpen ? '0px' : '8px',
            padding: '6px 4px',
            cursor: 'pointer',
            transition: 'left 250ms ease',
          }}
          className="hover:bg-[#2c2c2c] text-white flex items-center justify-center shadow-md select-none fixed top-[96px]"
          title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-3.5 h-3.5 text-white" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          )}
        </button>

        {/* ----------------------------------------------------
            RIGHT CONTENT WORKSPACE AREA
           ---------------------------------------------------- */}
        <main
          style={{
            flex: 1,
            margin: '0 auto',
            width: '100%',
            minWidth: 0,
            height: '100%',
            maxHeight: '100%',
            overflowY: 'auto',
            backgroundColor: '#000000',
          }}
          className={`flex flex-col gap-6 sm:gap-8 max-w-[1800px] py-5 sm:py-6 pb-16 transition-all duration-200 bg-black overflow-y-auto custom-scrollbar ${
            isSidebarOpen ? 'px-4 sm:px-6 lg:px-8' : 'pl-11 sm:pl-14 lg:pl-14 pr-4 sm:pr-6 lg:pr-8'
          }`}
        >
          <DashboardToolbar
            activeTab={activeTab}
            availableComponentCategories={availableComponentCategories}
            availableDivisions={availableDivisions}
            availableTemplateCategories={availableTemplateCategories}
            availableUsers={availableUsers}
            componentCategoryContainerRef={componentCategoryContainerRef}
            componentCategoryFilter={componentCategoryFilter}
            divisionContainerRef={divisionContainerRef}
            divisionFilter={divisionFilter}
            getCategoryCount={getCategoryCount}
            getTemplateCategoryCount={getTemplateCategoryCount}
            handleAddCategoryFromDropdown={handleAddCategoryFromDropdown}
            isAddingCategoryDropdown={isAddingCategoryDropdown}
            isComponentCategoryDropdownOpen={isComponentCategoryDropdownOpen}
            isDivisionDropdownOpen={isDivisionDropdownOpen}
            isEditCategoryFilterDropdownMode={isEditCategoryFilterDropdownMode}
            isProductRole={isProductRole}
            isSearchInputOpen={isSearchInputOpen}
            isTemplateCategoryDropdownOpen={isTemplateCategoryDropdownOpen}
            isUserDropdownOpen={isUserDropdownOpen}
            newCategoryDropdownInput={newCategoryDropdownInput}
            pageTemplates={pageTemplates}
            reviewTemplatesCount={reviewTemplatesCount}
            searchContainerRef={searchContainerRef}
            searchInputRef={searchInputRef}
            searchQuery={searchQuery}
            setComponentCategoryFilter={setComponentCategoryFilter}
            setDeleteConfirmCategory={setDeleteConfirmCategory}
            setDivisionFilter={setDivisionFilter}
            setIsAddingCategoryDropdown={setIsAddingCategoryDropdown}
            setIsComponentCategoryDropdownOpen={setIsComponentCategoryDropdownOpen}
            setIsDivisionDropdownOpen={setIsDivisionDropdownOpen}
            setIsEditCategoryFilterDropdownMode={setIsEditCategoryFilterDropdownMode}
            setIsSearchInputOpen={setIsSearchInputOpen}
            setIsTemplateCategoryDropdownOpen={setIsTemplateCategoryDropdownOpen}
            setIsUserDropdownOpen={setIsUserDropdownOpen}
            setNewCategoryDropdownInput={setNewCategoryDropdownInput}
            setSearchQuery={setSearchQuery}
            setStatusFilter={setStatusFilter}
            setTemplateCategoryFilter={setTemplateCategoryFilter}
            setUserFilter={setUserFilter}
            setViewMode={setViewMode}
            statusFilter={statusFilter}
            templateCategoryContainerRef={templateCategoryContainerRef}
            templateCategoryFilter={templateCategoryFilter}
            templates={templates}
            userContainerRef={userContainerRef}
            userDivision={userDivision}
            userFilter={userFilter}
            viewMode={viewMode}
          />

          {/* ====================================================
              CONTENT BODY (Thumbnail Grid vs Listing Table)
             ==================================================== */}
          {activeTab === 'releases' ? (
            /* TAB: FILE RILIS */
            viewMode === 'thumbnail' ? (
              /* THUMBNAIL MODE (RESPONSIVE GRID) */
              <ReleaseGrid
                activeMenuId={activeMenuId}
                filteredReleases={filteredReleases}
                formatDateStr={formatDateStr}
                gridResponsiveClass={gridResponsiveClass}
                isManagerOrAdmin={isManagerOrAdmin}
                isProductRole={isProductRole}
                isReleaseAuthor={isReleaseAuthor}
                onPreviewRelease={onPreviewRelease}
                onSelectRelease={onSelectRelease}
                renderStatusPill={renderStatusPill}
                searchQuery={searchQuery}
                setActiveMenuId={setActiveMenuId}
                setDeleteConfirmItem={setDeleteConfirmItem}
                setPreviewTemplate={setPreviewTemplate}
              />
            ) : (
              /* LISTING MODE (TABLE WITH ACCURATE COLS) */
              <ReleaseTable
                activeMenuId={activeMenuId}
                filteredReleases={filteredReleases}
                formatDateStr={formatDateStr}
                isManagerOrAdmin={isManagerOrAdmin}
                isProductRole={isProductRole}
                isReleaseAuthor={isReleaseAuthor}
                onPreviewRelease={onPreviewRelease}
                onSelectRelease={onSelectRelease}
                renderStatusPill={renderStatusPill}
                searchQuery={searchQuery}
                setActiveMenuId={setActiveMenuId}
                setDeleteConfirmItem={setDeleteConfirmItem}
                setPreviewTemplate={setPreviewTemplate}
              />
            )
          ) : activeTab === 'templates' ? (
            /* TAB: TEMPLATES */
            <div className="flex flex-col w-full">
              {viewMode === 'thumbnail' ? (
                /* THUMBNAIL MODE (RESPONSIVE GRID) */
                <TemplateGrid
                  activeMenuId={activeMenuId}
                  filteredTemplates={filteredTemplates}
                  gridResponsiveClass={gridResponsiveClass}
                  isManagerOrAdmin={isManagerOrAdmin}
                  onSelectPageTemplate={onSelectPageTemplate}
                  searchQuery={searchQuery}
                  setActiveMenuId={setActiveMenuId}
                  setDeleteConfirmTemplate={setDeleteConfirmTemplate}
                  setEditTemplateCategory={setEditTemplateCategory}
                  setEditTemplateDesc={setEditTemplateDesc}
                  setEditTemplateName={setEditTemplateName}
                  setEditingTemplate={setEditingTemplate}
                  setPreviewTemplate={setPreviewTemplate}
                  templateCategoryFilter={templateCategoryFilter}
                />
              ) : (
                /* LISTING MODE (TABLE) FOR TEMPLATES */
                <TemplateTable
                  activeMenuId={activeMenuId}
                  filteredTemplates={filteredTemplates}
                  formatDateStr={formatDateStr}
                  isManagerOrAdmin={isManagerOrAdmin}
                  onSelectPageTemplate={onSelectPageTemplate}
                  searchQuery={searchQuery}
                  setActiveMenuId={setActiveMenuId}
                  setDeleteConfirmTemplate={setDeleteConfirmTemplate}
                  setEditTemplateCategory={setEditTemplateCategory}
                  setEditTemplateDesc={setEditTemplateDesc}
                  setEditTemplateName={setEditTemplateName}
                  setEditingTemplate={setEditingTemplate}
                  setPreviewTemplate={setPreviewTemplate}
                  templateCategoryFilter={templateCategoryFilter}
                />
              )}
            </div>
          ) : /* TAB: KOMPONEN */
          viewMode === 'thumbnail' ? (
            /* THUMBNAIL MODE (RESPONSIVE GRID) */
            <ComponentGrid
              componentCategoryFilter={componentCategoryFilter}
              filteredComponents={filteredComponents}
              gridResponsiveClass={gridResponsiveClass}
              isRoleManager={isRoleManager}
              searchQuery={searchQuery}
              setEditingComponentTemplate={setEditingComponentTemplate}
              setPreviewComponent={setPreviewComponent}
            />
          ) : (
            /* LISTING MODE (TABLE) FOR COMPONENTS */
            <ComponentTable
              componentCategoryFilter={componentCategoryFilter}
              filteredComponents={filteredComponents}
              isRoleManager={isRoleManager}
              searchQuery={searchQuery}
              setEditingComponentTemplate={setEditingComponentTemplate}
              setPreviewComponent={setPreviewComponent}
            />
          )}
        </main>
      </div>

      {/* Template / Release Preview Modal */}
      {previewTemplate && (
        <TemplatePreviewModal
          isOpen={Boolean(previewTemplate)}
          template={previewTemplate}
          templates={templates}
          onClose={() => setPreviewTemplate(null)}
          onUseTemplate={(t) => {
            const matchingRel = releases.find((r) => r.id === t.id);
            if (matchingRel) {
              onSelectRelease(matchingRel);
            } else {
              onSelectPageTemplate(t);
            }
            setPreviewTemplate(null);
          }}
          onDuplicateTemplate={(id) => {
            console.log('Duplicating template', id);
          }}
        />
      )}

      {/* Component Preview Modal */}
      {previewComponent && (
        <ComponentPreviewModal
          isOpen={Boolean(previewComponent)}
          onClose={() => setPreviewComponent(null)}
          template={previewComponent}
          showAddToCanvas={false}
          onRename={isProductRole ? undefined : onRenameComponent}
          hideRename={isProductRole}
          currentUser={currentUser}
          onOpenEdit={(tpl) => setEditingComponentTemplate(tpl)}
        />
      )}

      {/* Component Edit Modal for Role Manager (Text & Image editing) */}
      {editingComponentTemplate && (
        <ComponentEditModal
          isOpen={Boolean(editingComponentTemplate)}
          onClose={() => setEditingComponentTemplate(null)}
          template={editingComponentTemplate}
          currentUser={currentUser}
          mediaLibrary={mediaLibrary}
          onSave={async (templateId, updatedHtml, updatedName) => {
            await onUpdateComponentTemplate?.(templateId, updatedHtml, updatedName);
            setEditingComponentTemplate(null);
          }}
        />
      )}

      <EditTemplateDialog
        editTemplateCategory={editTemplateCategory}
        editTemplateDesc={editTemplateDesc}
        editTemplateName={editTemplateName}
        editingTemplate={editingTemplate}
        isAddingCategory={isAddingCategory}
        isEditTemplateCategoryMode={isEditTemplateCategoryMode}
        newCategoryInput={newCategoryInput}
        onAddTemplateCategory={onAddTemplateCategory}
        onEditPageTemplate={onEditPageTemplate}
        onSelectPageTemplate={onSelectPageTemplate}
        setDeleteConfirmCategory={setDeleteConfirmCategory}
        setEditTemplateCategory={setEditTemplateCategory}
        setEditTemplateDesc={setEditTemplateDesc}
        setEditTemplateName={setEditTemplateName}
        setEditingTemplate={setEditingTemplate}
        setIsAddingCategory={setIsAddingCategory}
        setIsEditTemplateCategoryMode={setIsEditTemplateCategoryMode}
        setNewCategoryInput={setNewCategoryInput}
        templateCategories={templateCategories}
      />

      <DeleteReleaseDialog
        deleteConfirmItem={deleteConfirmItem}
        onDeleteRelease={onDeleteRelease}
        setDeleteConfirmItem={setDeleteConfirmItem}
      />

      <DeletePageTemplateDialog
        deleteConfirmTemplate={deleteConfirmTemplate}
        onDeletePageTemplate={onDeletePageTemplate}
        setDeleteConfirmTemplate={setDeleteConfirmTemplate}
      />

      <DeleteCategoryDialog
        deleteConfirmCategory={deleteConfirmCategory}
        getTemplateCategoryCount={getTemplateCategoryCount}
        handleDeleteTemplateCategory={handleDeleteTemplateCategory}
        setDeleteConfirmCategory={setDeleteConfirmCategory}
      />
    </div>
  );
}
