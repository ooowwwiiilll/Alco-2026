import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';

import type {
  AppUser,
  PageTemplate,
  PlacedSection,
  ReleaseItem,
  ReleaseStatus,
  SectionTemplate,
  SidebarViewMode,
} from '../../../types';

import { isProduct } from '../../../domain/access';
import { COMPONENT_DRAG_TYPE } from '../../../hooks/useCanvasActions';

import { cleanComponentName } from '../../../utils/format';
import { ComponentPreviewModal } from '../../templates/ComponentPreviewModal';
import { TemplatePreviewModal } from '../../templates/TemplatePreviewModal';
import { ReleaseDetailModal } from '../../releases/ReleaseDetailModal';
import { SidebarDeleteDialog } from './SidebarDeleteDialog';

import { TemplateList } from './TemplateList';
import { ComponentList } from './ComponentList';
import { ReleaseFilterPanel } from './ReleaseFilterPanel';
import { ComponentFilterPanel } from './ComponentFilterPanel';
import { SidebarSearchBar } from './SidebarSearchBar';
import { SidebarSectionTitle } from './SidebarSectionTitle';
import { SidebarTabs } from './SidebarTabs';
import { ReleaseList } from './ReleaseList';

export interface SidebarProps {
  templates: SectionTemplate[];
  pageTemplates: PageTemplate[];
  releases: ReleaseItem[];
  currentUser: AppUser;
  users: AppUser[];
  placedSections: PlacedSection[];
  viewMode: SidebarViewMode;
  setViewMode: (mode: SidebarViewMode) => void;
  onSelectTemplate: (template: SectionTemplate) => void;
  onLoadPageTemplate: (pageTemplate: PageTemplate) => void;
  onDuplicatePageTemplate: (templateId: string) => void;
  onEditPageTemplate: (templateId: string, newName: string) => void;
  onDeletePageTemplate: (templateId: string) => void;
  onLoadRelease: (release: ReleaseItem) => void;
  onDuplicateRelease: (releaseId: string) => void;
  onDeleteRelease: (releaseId: string) => void;
  onEditRelease: (releaseId: string, updates: Partial<ReleaseItem>) => void;
  onApproveRelease: (releaseId: string) => void;
  onRejectRelease: (releaseId: string) => void;
  onChangeReleaseStatus: (releaseId: string, newStatus: ReleaseStatus) => void;
  onShareRelease: (releaseId: string, device?: 'desktop' | 'mobile') => void;
  onOpenSavePageModal: () => void;
  onOpenNewTemplateModal: () => void;
  onOpenSaveReleaseModal: () => void;
  onOpenReleaseHistory: () => void;
  onDeleteCustomTemplate: (templateId: string) => void;
  onRenameTemplate: (templateId: string, newName: string) => void;
  activeTemplateId: string | null;
  activeTemplateName: string | null;
  onToggleSidebar: () => void;
}

export function Sidebar({
  templates,
  pageTemplates,
  releases,
  currentUser,
  users,
  placedSections,
  viewMode,
  setViewMode,
  onSelectTemplate,
  onLoadPageTemplate,
  onDuplicatePageTemplate,
  onEditPageTemplate,
  onDeletePageTemplate,
  onLoadRelease,
  onDuplicateRelease,
  onDeleteRelease,
  onEditRelease,
  onApproveRelease,
  onRejectRelease,
  onChangeReleaseStatus,
  onShareRelease,
  onOpenSavePageModal,
  onOpenNewTemplateModal,
  onOpenSaveReleaseModal,
  onOpenReleaseHistory,
  onDeleteCustomTemplate,
  onRenameTemplate,
  activeTemplateId,
  activeTemplateName,
  onToggleSidebar,
}: SidebarProps) {
  const isProductRole = isProduct(currentUser);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplateFilterId, setSelectedTemplateFilterId] = useState<string>('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Ensure the initial state on a new canvas directly lists all components without auto-filtering by template name
  useEffect(() => {
    setSelectedTemplateFilterId('all');
    setSearchQuery('');
    setIsFilterMenuOpen(false);
    if (
      !activeTemplateId ||
      activeTemplateName === 'New Canvas' ||
      !activeTemplateName ||
      placedSections.length === 0
    ) {
      setViewMode('components');
    }
  }, [activeTemplateId, activeTemplateName, placedSections.length, setViewMode]);

  // Release specific filters: Division & Calendar Date
  const [releaseDivisionFilter, setReleaseDivisionFilter] = useState<string>('all');
  const [releaseDateFilter, setReleaseDateFilter] = useState<string>('');

  // Modals and popup states
  const [previewModalTemplate, setPreviewModalTemplate] = useState<SectionTemplate | null>(null);
  const [previewTemplateModal, setPreviewTemplateModal] = useState<PageTemplate | null>(null);
  const [detailReleaseModal, setDetailReleaseModal] = useState<ReleaseItem | null>(null);
  const [activeMoreMenuId, setActiveMoreMenuId] = useState<string | null>(null);

  // Inline rename states
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editItemName, setEditItemName] = useState('');

  // Confirmation modal
  const [deleteConfirmState, setDeleteConfirmState] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm: () => void;
  } | null>(null);

  const confirmDeleteAction = (
    title: string,
    description: string,
    onConfirm: () => void,
    confirmLabel = 'Hapus',
  ) => {
    setDeleteConfirmState({
      isOpen: true,
      title,
      description,
      confirmLabel,
      onConfirm: () => {
        onConfirm();
        setDeleteConfirmState(null);
      },
    });
  };

  useEffect(() => {
    const handleGlobalClick = () => setActiveMoreMenuId(null);
    if (activeMoreMenuId) {
      window.addEventListener('click', handleGlobalClick);
      return () => window.removeEventListener('click', handleGlobalClick);
    }
  }, [activeMoreMenuId]);

  // Active filter template object
  const activeFilterTemplate = pageTemplates.find(
    (pt) =>
      pt.id === selectedTemplateFilterId ||
      pt.name.toLowerCase() === selectedTemplateFilterId.toLowerCase(),
  );

  // Filtering templates / sections based on search query and active template filter
  const filteredTemplates = templates.filter((template) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      template.name.toLowerCase().includes(q) ||
      (template.description && template.description.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    // Filter by template:
    // "Pada sidebar component, filter nya adalah berdasarkan template. Misalnya filternya "Nav Template", maka daftar component akan menampilkan semua komponen yang digunakan di Nav Template.
    // Jika tidak ada template, maka tidak ada filter."
    if (selectedTemplateFilterId !== 'all' && activeFilterTemplate) {
      const cleanTplName = cleanComponentName(template.name).toLowerCase();
      const isUsed = activeFilterTemplate.sections.some((s) => {
        const cleanSecName = cleanComponentName(s.name).toLowerCase();
        return (
          s.templateId === template.id ||
          cleanSecName === cleanTplName ||
          cleanSecName.includes(cleanTplName) ||
          cleanTplName.includes(cleanSecName) ||
          (s.htmlContent && template.htmlContent && s.htmlContent === template.htmlContent)
        );
      });
      if (!isUsed) return false;
    }

    return true;
  });

  // Filtering page templates
  const filteredPageTemplates = pageTemplates.filter((pt) => {
    const q = searchQuery.toLowerCase();
    return (
      !q ||
      pt.name.toLowerCase().includes(q) ||
      (pt.description && pt.description.toLowerCase().includes(q))
    );
  });

  // Dynamically collect divisions from releases
  const availableDivisions = Array.from(
    new Set(
      releases
        .map((r) => r.division || r.description || '')
        .filter((d) => d && d.trim().length > 0),
    ),
  );

  // Filtering releases based on search query, calendar date, and division
  const isManager = currentUser.role === 'manager';
  const isAdmin = currentUser.role === 'admin';
  const userDivision = currentUser.division.trim().toLowerCase();

  // Base releases visible to the current account based on role and division
  const accountReleases = releases.filter((rel) => {
    // Admin and Role Manager can view releases across divisions
    if (isAdmin || isManager) return true;
    if (userDivision && userDivision !== 'all divisions') {
      const relDiv = (rel.division || rel.description || '').toLowerCase();
      if (!relDiv.includes(userDivision)) {
        return false;
      }
    }
    return true;
  });

  const filteredReleases = accountReleases.filter((rel) => {
    // Only apply search query to releases if we are in releases viewMode
    const q = (viewMode === 'releases' ? searchQuery : '').toLowerCase().trim();
    const matchesSearch =
      !q ||
      rel.name.toLowerCase().includes(q) ||
      (rel.description && rel.description.toLowerCase().includes(q)) ||
      rel.authorName.toLowerCase().includes(q);

    if (!matchesSearch) return false;

    // Division Filter (only for manager or admin)
    if ((isManager || isAdmin) && releaseDivisionFilter !== 'all') {
      const relDiv = (rel.division || rel.description || '').toLowerCase();
      if (!relDiv.includes(releaseDivisionFilter.toLowerCase())) {
        return false;
      }
    }

    // Calendar / Date Filter
    if (releaseDateFilter) {
      if ((rel.updatedAt ?? rel.createdAt).slice(0, 10) !== releaseDateFilter) return false;
    }

    return true;
  });

  const handleDragStart = (e: React.DragEvent, template: SectionTemplate) => {
    e.dataTransfer.setData(COMPONENT_DRAG_TYPE, template.id);
    e.dataTransfer.setData('text/plain', template.id);
  };

  const handleSaveRename = (id: string, type: 'component' | 'template') => {
    const trimmed = editItemName.trim();
    if (trimmed) {
      if (type === 'component' && onRenameTemplate) {
        onRenameTemplate(id, cleanComponentName(trimmed));
      } else if (type === 'template') {
        onEditPageTemplate(id, cleanComponentName(trimmed));
      }
    }
    setEditingItemId(null);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '16px',
          paddingBottom: '32px',
          paddingLeft: '16px',
          paddingRight: '16px',
          background: '#1A1A1A',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '24px',
          display: 'flex',
          overflow: 'hidden',
          borderTopLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          borderBottomLeftRadius: '16px',
        }}
        className="font-season-sans select-none"
      >
        <SidebarTabs
          accountReleases={accountReleases}
          activeTemplateId={activeTemplateId}
          filteredReleases={filteredReleases}
          isProductRole={isProductRole}
          pageTemplates={pageTemplates}
          setViewMode={setViewMode}
          templates={templates}
          viewMode={viewMode}
        />

        {/* Clean Divider Line */}
        {!activeTemplateId && (
          <div
            style={{
              alignSelf: 'stretch',
              height: '1px',
              backgroundColor: '#2A2A2A',
            }}
          />
        )}

        <SidebarSectionTitle
          activeTemplateId={activeTemplateId}
          isProductRole={isProductRole}
          onOpenNewTemplateModal={onOpenNewTemplateModal}
          onOpenReleaseHistory={onOpenReleaseHistory}
          onOpenSavePageModal={onOpenSavePageModal}
          onOpenSaveReleaseModal={onOpenSaveReleaseModal}
          pageTemplates={pageTemplates}
          releases={releases}
          viewMode={viewMode}
        />

        <SidebarSearchBar
          activeFilterTemplate={activeFilterTemplate}
          pageTemplates={pageTemplates}
          releaseDateFilter={releaseDateFilter}
          releaseDivisionFilter={releaseDivisionFilter}
          searchQuery={searchQuery}
          selectedTemplateFilterId={selectedTemplateFilterId}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
        />

        <ComponentFilterPanel
          activeFilterTemplate={activeFilterTemplate}
          isFilterMenuOpen={isFilterMenuOpen}
          pageTemplates={pageTemplates}
          selectedTemplateFilterId={selectedTemplateFilterId}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          setSelectedTemplateFilterId={setSelectedTemplateFilterId}
          viewMode={viewMode}
        />

        <ReleaseFilterPanel
          availableDivisions={availableDivisions}
          currentUser={currentUser}
          isFilterMenuOpen={isFilterMenuOpen}
          releaseDateFilter={releaseDateFilter}
          releaseDivisionFilter={releaseDivisionFilter}
          setReleaseDateFilter={setReleaseDateFilter}
          setReleaseDivisionFilter={setReleaseDivisionFilter}
          viewMode={viewMode}
        />

        {/* Scrollable List Area */}
        <div
          style={{
            alignSelf: 'stretch',
            flex: '1 1 0',
            overflowY: 'auto',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '24px',
            display: 'flex',
            minHeight: 0,
          }}
          className="scrollbar-thin scrollbar-thumb-stone-700 pr-1 pb-16"
        >
          <ComponentList
            activeMoreMenuId={activeMoreMenuId}
            confirmDeleteAction={confirmDeleteAction}
            editItemName={editItemName}
            editingItemId={editingItemId}
            filteredTemplates={filteredTemplates}
            handleDragStart={handleDragStart}
            handleSaveRename={handleSaveRename}
            isProductRole={isProductRole}
            onDeleteCustomTemplate={onDeleteCustomTemplate}
            onSelectTemplate={onSelectTemplate}
            setActiveMoreMenuId={setActiveMoreMenuId}
            setEditItemName={setEditItemName}
            setEditingItemId={setEditingItemId}
            setPreviewModalTemplate={setPreviewModalTemplate}
            viewMode={viewMode}
          />

          <TemplateList
            activeMoreMenuId={activeMoreMenuId}
            confirmDeleteAction={confirmDeleteAction}
            editItemName={editItemName}
            editingItemId={editingItemId}
            filteredPageTemplates={filteredPageTemplates}
            handleSaveRename={handleSaveRename}
            isProductRole={isProductRole}
            onDeletePageTemplate={onDeletePageTemplate}
            onDuplicatePageTemplate={onDuplicatePageTemplate}
            onLoadPageTemplate={onLoadPageTemplate}
            setActiveMoreMenuId={setActiveMoreMenuId}
            setEditItemName={setEditItemName}
            setEditingItemId={setEditingItemId}
            setPreviewTemplateModal={setPreviewTemplateModal}
            viewMode={viewMode}
          />

          <ReleaseList
            activeMoreMenuId={activeMoreMenuId}
            confirmDeleteAction={confirmDeleteAction}
            currentUser={currentUser}
            filteredReleases={filteredReleases}
            onApproveRelease={onApproveRelease}
            onChangeReleaseStatus={onChangeReleaseStatus}
            onDeleteRelease={onDeleteRelease}
            onLoadRelease={onLoadRelease}
            onRejectRelease={onRejectRelease}
            setActiveMoreMenuId={setActiveMoreMenuId}
            setDetailReleaseModal={setDetailReleaseModal}
            viewMode={viewMode}
          />
        </div>
      </div>

      {/* Outside Tab Collapse Button attached to right edge */}
      {onToggleSidebar && (
        <button
          type="button"
          onClick={onToggleSidebar}
          style={{
            position: 'absolute',
            left: '337px',
            top: '28px',
            paddingLeft: '4px',
            paddingRight: '6px',
            paddingTop: '8px',
            paddingBottom: '8px',
            background: '#1A1A1A',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            border: '1px solid #353535',
            borderLeft: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 50,
            boxShadow: '4px 0 12px rgba(0, 0, 0, 0.4)',
          }}
          className="hover:bg-[#262626] text-stone-300 hover:text-white transition-colors"
          title="Hide Sidebar"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-white" />
        </button>
      )}

      {/* Component Preview Modal */}
      <ComponentPreviewModal
        isOpen={Boolean(previewModalTemplate)}
        onClose={() => setPreviewModalTemplate(null)}
        template={previewModalTemplate}
        onAddToCanvas={(tpl) => onSelectTemplate(tpl)}
        onRename={isProductRole ? undefined : (id, newName) => onRenameTemplate?.(id, newName)}
        hideRename={isProductRole}
      />

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        isOpen={Boolean(previewTemplateModal)}
        onClose={() => setPreviewTemplateModal(null)}
        template={previewTemplateModal}
        templates={templates}
        onUseTemplate={(t) => onLoadPageTemplate(t)}
        onDuplicateTemplate={(id) => onDuplicatePageTemplate(id)}
        onRenameTemplate={(id, newName) => onEditPageTemplate(id, newName)}
      />

      <SidebarDeleteDialog
        deleteConfirmState={deleteConfirmState}
        setDeleteConfirmState={setDeleteConfirmState}
      />
      {/* Release Detail Modal */}
      <ReleaseDetailModal
        isOpen={Boolean(detailReleaseModal)}
        onClose={() => setDetailReleaseModal(null)}
        release={detailReleaseModal}
        pageTemplates={pageTemplates}
        users={users}
        currentUser={currentUser}
        onChangeReleaseStatus={onChangeReleaseStatus}
        onShareRelease={onShareRelease}
      />
    </>
  );
}
