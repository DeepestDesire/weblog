/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../component/layout';
import { useCallback, useEffect, useRef } from 'react';
import { dealWithData, deletePost, downloadImage } from './model';

export default function Upload() {
  const ref1 = useRef('title');
  const ref2 = useRef('content');

  let onClick = useCallback((e) => {
    dealWithData(ref1.current.value, ref2.current.value);
  }, []);

  let deleteAction = useCallback((e) => {
    deletePost(ref1.current.value, ref2.current.value);
  }, []);

  useEffect(() => {
    // downloadImage();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{'文档上传'}</title>
      </Head>
      <section className="max-w-[1440px] place-self-center flex w-[1440px]">
        <article className="flex-1">
          <h1 className="text-2xl font-semibold mt-4 mb-8">{'文档上传'}</h1>
          <div>
            <div>文章标题</div>
            <input ref={ref1} type="text"></input>
          </div>
          <div>
            <div>文章内容</div>
            <textarea ref={ref2} name="Text1" cols="40" rows="5"></textarea>
          </div>
          <button onClick={onClick}>发布</button>
        </article>
        <article className="flex-1">
          <h1 className="text-2xl font-semibold mt-4 mb-8">{'文档上传'}</h1>
          <div>
            <div>文章删除</div>
            <input ref={ref1} type="text"></input>
          </div>
          <button onClick={deleteAction}>删除文档</button>
        </article>
      </section>
      <h2 className="max-w-[1440px] place-self-center ">
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
