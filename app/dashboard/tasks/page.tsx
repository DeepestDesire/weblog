'use client';

import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { promise, z } from 'zod';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { UserNav } from './components/user-nav';
import { taskSchema } from './data/schema';
import { useEffect } from 'react';
import { convertListToObjectData } from '@/lib/file/csv';
import data from './data.json';

type Transaction = {
  transactionID: string;
  transactionTime: string;
  transactionType: string;
  debitCreditOther: string;
  paymentMethod: string;
  amountCNY: number;
  counterParty: string;
  merchantOrderID: string;
};

function transformTransaction(data: any[]): Transaction[] {
  return data.map((item) => ({
    transactionID: item['交易单号'],
    transactionTime: item['交易时间'],
    transactionType: item['交易类型'].replace(/\n/g, ''),
    debitCreditOther: item['收/支/其他'],
    paymentMethod: item['交易方式'].replace(/\n/g, ''),
    amountCNY: item['金额(元)'],
    counterParty: item['交易对方'] ? item['交易对方'].replace(/\n/g, '') : '',
    merchantOrderID: item['商户单号'],
  }));
}

// export const metadata: Metadata = {
//   title: 'Tasks',
//   description: 'A task and issue tracker build using Tanstack Table.',
// };

// Simulate a database read for tasks.
async function getTasks() {
  const tasks = transformTransaction([]);
  return z.array(taskSchema).parse(tasks);
}

export default function TaskPage() {
  useEffect(() => {
    // const objData = convertListToObjectData(data.data);
    // console.log('objData', objData);
    return () => {};
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">Here&apos;s a list of your tasks for this month!</p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        {/* <DataTable data={tasks} columns={columns} /> */}
      </div>
    </>
  );
}
