import type { ViewMode, SidebarTab, StatusFilter } from './types';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { LayoutGrid, List } from 'lucide-react';

import { type PageTemplate, type SectionTemplate } from '../../types';
import { ComponentCategoryFilter } from './toolbar/ComponentCategoryFilter';
import { TemplateCategoryFilter } from './toolbar/TemplateCategoryFilter';
import { UserFilter } from './toolbar/UserFilter';
import { DivisionFilter } from './toolbar/DivisionFilter';
import { StatusFilterPills } from './toolbar/StatusFilterPills';
import { SearchToggle } from './toolbar/SearchToggle';

export interface DashboardToolbarProps {
  activeTab: SidebarTab;
  availableComponentCategories: string[];
  availableDivisions: string[];
  availableTemplateCategories: string[];
  availableUsers: string[];
  componentCategoryContainerRef: RefObject<HTMLDivElement | null>;
  componentCategoryFilter: string;
  divisionContainerRef: RefObject<HTMLDivElement | null>;
  divisionFilter: string;
  getCategoryCount: (category: string) => number;
  getTemplateCategoryCount: (category: string) => number;
  handleAddCategoryFromDropdown: () => void;
  isAddingCategoryDropdown: boolean;
  isComponentCategoryDropdownOpen: boolean;
  isDivisionDropdownOpen: boolean;
  isEditCategoryFilterDropdownMode: boolean;
  isProductRole: boolean;
  isSearchInputOpen: boolean;
  isTemplateCategoryDropdownOpen: boolean;
  isUserDropdownOpen: boolean;
  newCategoryDropdownInput: string;
  pageTemplates: PageTemplate[];
  reviewTemplatesCount: number;
  searchContainerRef: RefObject<HTMLDivElement | null>;
  searchInputRef: RefObject<HTMLInputElement | null>;
  searchQuery: string;
  setComponentCategoryFilter: Dispatch<SetStateAction<string>>;
  setDeleteConfirmCategory: Dispatch<SetStateAction<string | null>>;
  setDivisionFilter: Dispatch<SetStateAction<string>>;
  setIsAddingCategoryDropdown: Dispatch<SetStateAction<boolean>>;
  setIsComponentCategoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setIsDivisionDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditCategoryFilterDropdownMode: Dispatch<SetStateAction<boolean>>;
  setIsSearchInputOpen: Dispatch<SetStateAction<boolean>>;
  setIsTemplateCategoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setIsUserDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setNewCategoryDropdownInput: Dispatch<SetStateAction<string>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setStatusFilter: Dispatch<SetStateAction<StatusFilter>>;
  setTemplateCategoryFilter: Dispatch<SetStateAction<string>>;
  setUserFilter: Dispatch<SetStateAction<string>>;
  setViewMode: Dispatch<SetStateAction<ViewMode>>;
  statusFilter: StatusFilter;
  templateCategoryContainerRef: RefObject<HTMLDivElement | null>;
  templateCategoryFilter: string;
  templates: SectionTemplate[];
  userContainerRef: RefObject<HTMLDivElement | null>;
  userDivision: string;
  userFilter: string;
  viewMode: ViewMode;
}

export function DashboardToolbar({
  activeTab,
  availableComponentCategories,
  availableDivisions,
  availableTemplateCategories,
  availableUsers,
  componentCategoryContainerRef,
  componentCategoryFilter,
  divisionContainerRef,
  divisionFilter,
  getCategoryCount,
  getTemplateCategoryCount,
  handleAddCategoryFromDropdown,
  isAddingCategoryDropdown,
  isComponentCategoryDropdownOpen,
  isDivisionDropdownOpen,
  isEditCategoryFilterDropdownMode,
  isProductRole,
  isSearchInputOpen,
  isTemplateCategoryDropdownOpen,
  isUserDropdownOpen,
  newCategoryDropdownInput,
  pageTemplates,
  reviewTemplatesCount,
  searchContainerRef,
  searchInputRef,
  searchQuery,
  setComponentCategoryFilter,
  setDeleteConfirmCategory,
  setDivisionFilter,
  setIsAddingCategoryDropdown,
  setIsComponentCategoryDropdownOpen,
  setIsDivisionDropdownOpen,
  setIsEditCategoryFilterDropdownMode,
  setIsSearchInputOpen,
  setIsTemplateCategoryDropdownOpen,
  setIsUserDropdownOpen,
  setNewCategoryDropdownInput,
  setSearchQuery,
  setStatusFilter,
  setTemplateCategoryFilter,
  setUserFilter,
  setViewMode,
  statusFilter,
  templateCategoryContainerRef,
  templateCategoryFilter,
  templates,
  userContainerRef,
  userDivision,
  userFilter,
  viewMode,
}: DashboardToolbarProps) {
  return (
    <>
      {/* ====================================================
              TOOLBAR ROW (Status Pills, Division Dropdown, Views)
             ==================================================== */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center justify-between gap-3 sm:gap-4 w-full">
        {/* Left Controls: Search Toggle Icon + Status Filter Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap min-w-0 max-w-full">
          <SearchToggle
            isSearchInputOpen={isSearchInputOpen}
            searchContainerRef={searchContainerRef}
            searchInputRef={searchInputRef}
            searchQuery={searchQuery}
            setIsSearchInputOpen={setIsSearchInputOpen}
            setSearchQuery={setSearchQuery}
          />

          <StatusFilterPills
            activeTab={activeTab}
            reviewTemplatesCount={reviewTemplatesCount}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
          />
        </div>

        {/* Right Controls: Division Filter Dropdown + View Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end shrink-0 ml-auto sm:ml-0">
          <DivisionFilter
            activeTab={activeTab}
            availableDivisions={availableDivisions}
            divisionContainerRef={divisionContainerRef}
            divisionFilter={divisionFilter}
            isDivisionDropdownOpen={isDivisionDropdownOpen}
            isProductRole={isProductRole}
            setDivisionFilter={setDivisionFilter}
            setIsDivisionDropdownOpen={setIsDivisionDropdownOpen}
            userDivision={userDivision}
          />

          <UserFilter
            activeTab={activeTab}
            availableUsers={availableUsers}
            isUserDropdownOpen={isUserDropdownOpen}
            setIsUserDropdownOpen={setIsUserDropdownOpen}
            setUserFilter={setUserFilter}
            userContainerRef={userContainerRef}
            userFilter={userFilter}
          />

          <TemplateCategoryFilter
            activeTab={activeTab}
            availableTemplateCategories={availableTemplateCategories}
            getTemplateCategoryCount={getTemplateCategoryCount}
            handleAddCategoryFromDropdown={handleAddCategoryFromDropdown}
            isAddingCategoryDropdown={isAddingCategoryDropdown}
            isEditCategoryFilterDropdownMode={isEditCategoryFilterDropdownMode}
            isTemplateCategoryDropdownOpen={isTemplateCategoryDropdownOpen}
            newCategoryDropdownInput={newCategoryDropdownInput}
            pageTemplates={pageTemplates}
            setDeleteConfirmCategory={setDeleteConfirmCategory}
            setIsAddingCategoryDropdown={setIsAddingCategoryDropdown}
            setIsEditCategoryFilterDropdownMode={setIsEditCategoryFilterDropdownMode}
            setIsTemplateCategoryDropdownOpen={setIsTemplateCategoryDropdownOpen}
            setNewCategoryDropdownInput={setNewCategoryDropdownInput}
            setTemplateCategoryFilter={setTemplateCategoryFilter}
            templateCategoryContainerRef={templateCategoryContainerRef}
            templateCategoryFilter={templateCategoryFilter}
          />

          <ComponentCategoryFilter
            activeTab={activeTab}
            availableComponentCategories={availableComponentCategories}
            componentCategoryContainerRef={componentCategoryContainerRef}
            componentCategoryFilter={componentCategoryFilter}
            getCategoryCount={getCategoryCount}
            isComponentCategoryDropdownOpen={isComponentCategoryDropdownOpen}
            setComponentCategoryFilter={setComponentCategoryFilter}
            setIsComponentCategoryDropdownOpen={setIsComponentCategoryDropdownOpen}
            templates={templates}
          />

          {/* View Switcher Pill (Grid vs List) */}
          <div
            style={{
              height: '44px',
              padding: '4px',
              background: '#353535',
              borderRadius: '32px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '4px',
              display: 'flex',
            }}
            className="select-none"
          >
            {/* Grid Button */}
            <button
              type="button"
              onClick={() => setViewMode('thumbnail')}
              style={{
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                background: viewMode === 'thumbnail' ? 'black' : 'transparent',
                borderRadius: '76px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
              }}
              className="transition-all hover:opacity-90"
              title="Thumbnail View"
            >
              <LayoutGrid className="w-4 h-4 text-white" />
            </button>

            {/* List Button */}
            <button
              type="button"
              onClick={() => setViewMode('listing')}
              style={{
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                background: viewMode === 'listing' ? 'black' : 'transparent',
                borderRadius: '76px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
              }}
              className="transition-all hover:opacity-90"
              title="Listing View"
            >
              <List className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
