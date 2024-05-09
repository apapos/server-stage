import {
  PresenceBadgeStatus,
  Avatar,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";

type FileCell = {
  label: string;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type LastUpdateCell = {
  label: string;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
  {
    file: { label: "Meeting notes", },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
    },
  },
  {
    file: { label: "Thursday presentation", },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
    },
  },
  {
    file: { label: "Training recording", },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
    },
  },
  {
    file: { label: "Purchase order", },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "file",
    compare: (a, b) => {
      return a.file.label.localeCompare(b.file.label);
    },
    renderHeaderCell: () => {
      return "File";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout >
          {item.file.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "author",
    compare: (a, b) => {
      return a.author.label.localeCompare(b.author.label);
    },
    renderHeaderCell: () => {
      return "Author";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{ status: item.author.status }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdated",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Last updated";
    },

    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdate",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Last update";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
];

const GridWrap = () => {
  return (
    <DataGrid
      className="flex-1 ml-4"
      items={items}
      columns={columns}
      sortable
      selectionMode="multiselect"
      getRowId={(item) => item.file.label}
      focusMode="composite"
    >
      <DataGridHeader>
        <DataGridRow
          selectionCell={{
            checkboxIndicator: { "aria-label": "Select all rows" },
          }}
        >
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item>
            key={rowId}
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select row" },
            }}
          >
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}
export default GridWrap