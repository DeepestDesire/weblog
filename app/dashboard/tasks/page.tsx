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
import { useAppSelector } from '@/lib/store/hooks';

import data from './weChat.json';
// export const metadata: Metadata = {
//   title: 'Tasks',
//   description: 'A task and issue tracker build using Tanstack Table.',
// };

// Simulate a database read for tasks.
// async function getTasks() {
//   const tasks = transformTransaction([]);
//   return z.array(taskSchema).parse(tasks);
// }

export default function TaskPage() {
  // const data = useAppSelector((state) => state.weChatBill.data);

  useEffect(() => {
    console.log('weChatBill');
    return () => {};
  }, []);

  console.log('data', data);

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
        <DataTable data={data} columns={columns} />
      </div>
    </>
  );
}
