'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { labels, priorities, statuses } from '../data/data';
import { Task } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'transactionID',
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易单号" />,
    cell: ({ row }) => <div className="max-w-[200] truncate">{row.getValue('transactionID')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'transactionTime',
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易时间" />,
    cell: ({ row }) => <div className="max-w-[150]  truncate">{row.getValue('transactionTime')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'counterParty',
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易商户" />,
    cell: ({ row }) => <div className="max-w-[100] truncate">{row.getValue('counterParty')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'amountCNY',
    header: ({ column }) => <DataTableColumnHeader column={column} title="金额" />,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.amountCNY.toString());
      return (
        <div className="flex space-x-2  w-[60px]">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">{row.getValue('amountCNY')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'transactionType',
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易类型" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 w-[60px]">
          <span className="max-w-[500px] truncate font-medium">{row.getValue('transactionType')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'inOrOut',
    header: ({ column }) => <DataTableColumnHeader column={column} title="收/支/其他" />,
    cell: ({ row }) => {
      // const status = statuses.find((status) => status.label);

      // if (!status) {
      //   return null;
      // }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />} */}
          <span>{row.getValue('inOrOut')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   accessorKey: 'priority',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
  //   cell: ({ row }) => {
  //     const priority = priorities.find((priority) => priority.value === row.getValue('priority'));

  //     if (!priority) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
  //         <span>{priority.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    accessorKey: 'paymentMethod',
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易方式" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge variant="outline">{row.getValue('paymentMethod')}</Badge>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
