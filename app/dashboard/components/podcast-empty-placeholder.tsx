'use client';

import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { parseCSVFile } from '@/lib/file/csv';

export function PodcastEmptyPlaceholder() {
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 添加这一行

  const handleFileChange = () => {
    // 添加这一行
    const file = fileInputRef.current?.files?.[0]; // 添加这一行
    if (file) {
      console.log('result', parseCSVFile(file));
      parseCSVFile(file).then((data) => {});
    }
  }; // 添加这一行

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/user/bill', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">无消费记录</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">你没有上传交易记录到服务器</p>

        <div className="grid w-full max-w-sm items-start gap-1.5">
          <Input
            id="picture"
            placeholder="请上传 CSV 问题"
            type="file"
            accept=".csv"
            ref={fileInputRef} // 修改这一行
            onChange={handleFileChange} // 修改这一行
          />
          <Button size="sm" className="relative">
            确认
          </Button>
        </div>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Add Podcast
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Podcast</DialogTitle>
              <DialogDescription>Copy and paste the podcast feed URL to import.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Podcast URL</Label>
                <Input id="url" placeholder="https://example.com/feed.xml" />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Podcast</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
      </div>
    </div>
  );
}
