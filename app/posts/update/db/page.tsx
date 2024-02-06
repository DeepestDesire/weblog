'use client';
import { useSession } from 'next-auth/react';

import { useCallback, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { getPost, deletePost } from '../../../../lib/model';

export default function Upload() {
  const { data: session } = useSession();

  const postIdRef = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLTextAreaElement>(null);

  const isAdmin = session?.user?.email === 'georgecharles1993@outlook.com';

  useEffect(() => {
    // downloadImage();
  }, []);

  if (!isAdmin) {
    return '404';
  }

  return (
    <section className="max-w-[1440px]  max-h-[77] place-self-center w-[1440px] flex flex-col flex-1">
      <h1 className="text-2xl font-semibold mt-4 mb-8">{'文档预览'}</h1>
    </section>
  );
}
