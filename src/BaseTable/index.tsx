import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef as columnType,
} from 'material-react-table';
import { OnChangeFn, PaginationState } from '@tanstack/react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import NoDataError from './components/NoDataError';

interface IBaseTable {
  data: { [key: string]: unknown }[];
  columns: { [key: string]: unknown }[] | unknown;
  enableColumnActions?: boolean;
  enableFacetedValues?: boolean;
  enableHiding?: boolean;
  enableDensityToggle?: boolean;
  manualExpanding?: boolean;
  enableFullScreenToggle?: boolean;
  enableSorting?: boolean;
  enableCellActions?: boolean;
  showColumnFilters?: boolean;
  showGlobalFilter?: boolean;
  enableGlobalFilter?: boolean;
  enableToolbarInternalActions?: boolean;
  columnVisibility?: { [key: string]: boolean };
  enableStickyHeader?: boolean;
  visibleInShowHideMenu?: boolean;
  manualPagination?: boolean;
  enablePagination?: boolean;
  enableTopToolbar?: boolean;
  enableBottomToolbar?: boolean;
  enableColumnFilters?: boolean;
  enableExpandAll?: boolean;
  enableColumnPinning?: boolean;
  enableColumnOrdering?: boolean;
  enableColumnDragging?: boolean;
  rowCount?: number;
  leftFixedColumnIds?: string[];
  rightFixedColumnIds?: string[];
  columnOrder?: string[];
  paginationDisplayMode?: 'pages' | 'custom' | 'default';
  positionToolbarAlertBanner?: 'bottom' | 'head-overlay' | 'none' | 'top';
  positionGlobalFilter?: 'none' | 'left' | 'right';
  muiPaginationProps?: { [key: string]: unknown };
  muiTableHeadCellProps?: { [key: string]: unknown };
  maxHeight?: string;
  searchBoxPlaceholder?: string;
  pagination?: PaginationState;
  onColumnOrderChange?: (e: unknown) => void;
  onColumnVisibilityChange?: (e: unknown) => void;
  renderDetailPanel?: () => JSX.Element;
  renderEmptyRowsFallback?: () => JSX.Element;
  renderTopToolbarCustomActions?: (e: unknown) => JSX.Element;
  renderToolbarInternalActions?: (e: unknown) => JSX.Element;
  onPaginationChange?: OnChangeFn<PaginationState> | undefined;
  onGlobalFilterChange?: (searchText: string) => void;
}

const BaseTable = ({
  data,
  columns,
  enableColumnActions = false,
  enableFacetedValues = true,
  enableHiding = false,
  enableDensityToggle = false,
  manualExpanding = false,
  enableFullScreenToggle = false,
  enableSorting = false,
  enableCellActions = false,
  showColumnFilters = false,
  visibleInShowHideMenu = false,
  enableExpandAll = true,
  enablePagination = true,
  showGlobalFilter = true,
  enableGlobalFilter = true,
  enableToolbarInternalActions = true,
  enableStickyHeader = true,
  manualPagination = true,
  enableTopToolbar = true,
  enableBottomToolbar = true,
  enableColumnFilters = true,
  enableColumnPinning = false,
  enableColumnOrdering = false,
  enableColumnDragging = false,
  rowCount,
  columnVisibility = {},
  leftFixedColumnIds = [],
  rightFixedColumnIds = [],
  columnOrder = [],
  paginationDisplayMode = 'default',
  positionToolbarAlertBanner = 'bottom',
  positionGlobalFilter = 'left',
  muiPaginationProps,
  muiTableHeadCellProps,
  maxHeight = '600px',
  pagination,
  searchBoxPlaceholder = 'Search',
  onColumnOrderChange,
  onColumnVisibilityChange,
  onGlobalFilterChange,
  renderDetailPanel,
  renderEmptyRowsFallback = () => <NoDataError />,
  onPaginationChange,
  renderTopToolbarCustomActions,
  renderToolbarInternalActions,
}: IBaseTable) => {
  const table = useMaterialReactTable({
    columns: columns as columnType<{ [key: string]: unknown }>[],
    data,
    enableColumnActions,
    enableFacetedValues,
    enableHiding,
    enableDensityToggle,
    manualExpanding,
    enableFullScreenToggle,
    enableSorting,
    enableCellActions,
    enableGlobalFilter,
    enableToolbarInternalActions,
    initialState: {
      showColumnFilters,
      showGlobalFilter,
      columnPinning: { left: leftFixedColumnIds, right: rightFixedColumnIds },
    },
    paginationDisplayMode,
    positionToolbarAlertBanner,
    positionGlobalFilter,
    enableStickyHeader,
    muiPaginationProps,
    muiTableHeadCellProps,
    manualPagination,
    enablePagination,
    enableTopToolbar,
    enableBottomToolbar,
    enableColumnFilters,
    enableExpandAll,
    rowCount,
    enableColumnPinning,
    enableColumnOrdering,
    enableColumnDragging,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        visibleInShowHideMenu,
      },
      'mrt-row-expand': {
        header: '',
        Cell: () => null,
      },
    },
    muiTableContainerProps: {
      sx: {
        minWidth: '300px',
        maxHeight,
        overflowY: 'auto',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        color: '#000000de',
      },
    },
    muiSearchTextFieldProps: {
      placeholder: searchBoxPlaceholder,
      InputProps: {
        style: { minWidth: '350px' },
      },
    },
    state: {
      columnOrder,
      columnVisibility,
      ...(manualPagination && enablePagination && { pagination }),
    },
    onColumnOrderChange,
    onColumnVisibilityChange,
    renderEmptyRowsFallback,
    onGlobalFilterChange,
    renderDetailPanel,
    onPaginationChange,
    renderTopToolbarCustomActions,
    renderToolbarInternalActions,
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => table.setExpanded({ [row.id]: !row.getIsExpanded() }),
      sx: {
        transform: row.getIsExpanded() ? 'rotate(180deg)' : 'rotate(-90deg)',
        transition: 'transform 0.2s',
      },
    }),
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MaterialReactTable table={table} />
    </LocalizationProvider>
  );
};

export default BaseTable;
