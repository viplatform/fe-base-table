# MUI Table

A reusable table component for React applications built with Material-UI (MUI) and Material React Table.

## Features

- 🎨 **Material-UI Integration**: Built with MUI components for consistent design
- 📊 **Material React Table**: Powered by Material React Table for advanced table functionality
- 🔧 **TypeScript**: Full TypeScript support with proper type definitions
- 📱 **Responsive**: Mobile-friendly and responsive design
- 🎯 **Customizable**: Highly customizable with extensive props and options
- ⚡ **Performance**: Optimized for performance with virtual scrolling support
- 🔍 **Search & Filter**: Built-in search and filtering capabilities
- 📄 **Pagination**: Server-side and client-side pagination support
- 🎨 **Theming**: Supports MUI theming system
- 🎯 **Row Selection**: Single and multi-row selection support
- 📌 **Column Pinning**: Pin columns to left or right
- 🔄 **Column Ordering**: Drag and drop column reordering
- 📊 **Detail Panels**: Expandable row details
- 🎨 **Custom Styling**: Extensive styling customization options

## Installation

```bash
npm install mui-table
# or
yarn add mui-table
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@mui/material": "^5.0.0",
  "@types/react": "^18.0.0 || ^19.0.0",
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

**Note:** `@types/react` is optional and only needed for TypeScript projects.

## Dependencies

The package includes these dependencies:

```json
{
  "@tanstack/react-table": "^8.20.5",
  "dayjs": "^1.11.10",
  "lodash": "^4.17.21",
  "material-react-table": "^3.0.1",
  "@mui/icons-material": "^5.0.0",
  "@mui/x-date-pickers": "^7.18.0"
}
```

## Usage

```tsx
import React from 'react';
import { MuiTable } from 'mui-table';

const MyComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
  ];

  return (
    <MuiTable
      data={data}
      columns={columns}
      enablePagination={true}
      enableSorting={true}
      enableGlobalFilter={true}
    />
  );
};
```

## Props

### Core Props

| Prop        | Type               | Default | Description                      |
| ----------- | ------------------ | ------- | -------------------------------- |
| `data`      | `Array<object>`    | `[]`    | The data to display in the table |
| `columns`   | `Array<ColumnDef>` | `[]`    | Column definitions for the table |
| `isLoading` | `boolean`          | `false` | Shows loading state              |
| `tableRef`  | `RefObject`        | `null`  | Reference to the table container |

### Feature Toggle Props

| Prop                           | Type      | Default | Description                     |
| ------------------------------ | --------- | ------- | ------------------------------- |
| `enablePagination`             | `boolean` | `true`  | Enable pagination               |
| `enableSorting`                | `boolean` | `false` | Enable column sorting           |
| `enableGlobalFilter`           | `boolean` | `true`  | Enable global search            |
| `enableRowSelection`           | `boolean` | `false` | Enable row selection            |
| `enableColumnFilters`          | `boolean` | `true`  | Enable column filters           |
| `enableColumnPinning`          | `boolean` | `false` | Enable column pinning           |
| `enableColumnOrdering`         | `boolean` | `false` | Enable column reordering        |
| `enableColumnDragging`         | `boolean` | `false` | Enable column dragging          |
| `enableStickyHeader`           | `boolean` | `true`  | Enable sticky header            |
| `enableTopToolbar`             | `boolean` | `true`  | Enable top toolbar              |
| `enableBottomToolbar`          | `boolean` | `true`  | Enable bottom toolbar           |
| `enableToolbarInternalActions` | `boolean` | `true`  | Enable internal toolbar actions |
| `enableMultiRowSelection`      | `boolean` | `true`  | Enable multi-row selection      |
| `enableSelectAll`              | `boolean` | `true`  | Enable select all functionality |
| `enableExpandAll`              | `boolean` | `true`  | Enable expand all functionality |
| `enableFacetedValues`          | `boolean` | `true`  | Enable faceted values           |
| `enableHiding`                 | `boolean` | `false` | Enable column hiding            |
| `enableDensityToggle`          | `boolean` | `false` | Enable density toggle           |
| `enableFullScreenToggle`       | `boolean` | `false` | Enable full screen toggle       |
| `enableCellActions`            | `boolean` | `false` | Enable cell actions             |
| `enableColumnActions`          | `boolean` | `false` | Enable column actions           |

### Display Props

| Prop                    | Type      | Default | Description                    |
| ----------------------- | --------- | ------- | ------------------------------ |
| `showColumnFilters`     | `boolean` | `false` | Show column filters by default |
| `showGlobalFilter`      | `boolean` | `true`  | Show global filter by default  |
| `visibleInShowHideMenu` | `boolean` | `false` | Show in column visibility menu |
| `manualPagination`      | `boolean` | `true`  | Enable server-side pagination  |
| `manualExpanding`       | `boolean` | `false` | Enable manual expanding        |

### Configuration Props

| Prop                         | Type                                            | Default     | Description                                |
| ---------------------------- | ----------------------------------------------- | ----------- | ------------------------------------------ |
| `rowCount`                   | `number`                                        | -           | Total row count for server-side pagination |
| `leftFixedColumnIds`         | `string[]`                                      | `[]`        | IDs of columns to pin to the left          |
| `rightFixedColumnIds`        | `string[]`                                      | `[]`        | IDs of columns to pin to the right         |
| `columnOrder`                | `string[]`                                      | `[]`        | Custom column order                        |
| `paginationDisplayMode`      | `'pages' \| 'custom' \| 'default'`              | `'default'` | Pagination display mode                    |
| `positionToolbarAlertBanner` | `'bottom' \| 'head-overlay' \| 'none' \| 'top'` | `'bottom'`  | Alert banner position                      |
| `positionGlobalFilter`       | `'none' \| 'left' \| 'right'`                   | `'left'`    | Global filter position                     |
| `searchBoxPlaceholder`       | `string`                                        | `'Search'`  | Placeholder text for search box            |
| `emptyTableText`             | `string`                                        | -           | Text to display when table is empty        |

### State Props

| Prop               | Type                      | Default | Description             |
| ------------------ | ------------------------- | ------- | ----------------------- |
| `pagination`       | `PaginationState`         | -       | Pagination state        |
| `sorting`          | `SortingState`            | `[]`    | Sorting state           |
| `rowSelection`     | `RowSelectionState`       | `{}`    | Row selection state     |
| `columnVisibility` | `Record<string, boolean>` | `{}`    | Column visibility state |

### Event Handler Props

| Prop                       | Type                                         | Description                           |
| -------------------------- | -------------------------------------------- | ------------------------------------- |
| `onPaginationChange`       | `OnChangeFn<PaginationState>`                | Called when pagination changes        |
| `onSortingChange`          | `OnChangeFn<SortingState>`                   | Called when sorting changes           |
| `onRowSelectionChange`     | `OnChangeFn<RowSelectionState>`              | Called when row selection changes     |
| `onColumnVisibilityChange` | `(e: unknown) => void`                       | Called when column visibility changes |
| `onColumnOrderChange`      | `(e: unknown) => void`                       | Called when column order changes      |
| `onGlobalFilterChange`     | `(searchText: string) => void`               | Called when global filter changes     |
| `onTableContainerScroll`   | `(e: React.UIEvent<HTMLDivElement>) => void` | Called when table container scrolls   |

### Render Props

| Prop                            | Type                          | Description                       |
| ------------------------------- | ----------------------------- | --------------------------------- |
| `renderDetailPanel`             | `({ row }) => JSX.Element`    | Render detail panel for rows      |
| `renderEmptyRowsFallback`       | `() => JSX.Element`           | Render fallback for empty rows    |
| `renderTopToolbarCustomActions` | `(e: unknown) => JSX.Element` | Render custom top toolbar actions |
| `renderToolbarInternalActions`  | `(e: unknown) => JSX.Element` | Render internal toolbar actions   |

### Styling Props

| Prop                     | Type                        | Default | Description                    |
| ------------------------ | --------------------------- | ------- | ------------------------------ |
| `muiPaginationProps`     | `object`                    | -       | MUI pagination component props |
| `muiTableHeadCellProps`  | `object`                    | -       | MUI table head cell props      |
| `muiTableBodyStyleProps` | `React.CSSProperties`       | `{}`    | Table body cell styles         |
| `muiSelectCheckboxProps` | `CheckboxProps \| function` | -       | Select checkbox props          |

### Utility Props

| Prop       | Type                      | Description                   |
| ---------- | ------------------------- | ----------------------------- |
| `getRowId` | `(row: object) => string` | Function to get unique row ID |

## Examples

### Basic Table

```tsx
import { MuiTable } from 'mui-table';

const BasicTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'age', header: 'Age' },
  ];

  return <MuiTable data={data} columns={columns} />;
};
```

### Advanced Table with Features

```tsx
import { MuiTable } from 'mui-table';

const AdvancedTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  ];

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'status', header: 'Status' },
  ];

  return (
    <MuiTable
      data={data}
      columns={columns}
      enablePagination={true}
      enableSorting={true}
      enableGlobalFilter={true}
      enableColumnFilters={true}
      enableRowSelection={true}
      enableColumnPinning={true}
      enableColumnOrdering={true}
      searchBoxPlaceholder='Search users...'
      emptyTableText='No users found'
    />
  );
};
```

### Server-Side Pagination

```tsx
import { MuiTable } from 'mui-table';
import { useState } from 'react';

const ServerSideTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    // ... more data
  ];

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
  ];

  return (
    <MuiTable
      data={data}
      columns={columns}
      manualPagination={true}
      rowCount={1000} // Total number of rows
      pagination={pagination}
      onPaginationChange={setPagination}
    />
  );
};
```

## Development

### Prerequisites

- Node.js 20.x or higher
- Yarn or npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/viplatform/mui-table.git
cd mui-table
```

2. Install dependencies:

```bash
yarn install
```

3. Start development:

```bash
yarn dev
```

### Build

```bash
yarn build
```

### Testing

```bash
yarn test
```

### Linting

```bash
yarn lint
yarn lint:fix
```

## License

MIT

## Support

If you have any questions or need help, please open an issue on GitHub.
