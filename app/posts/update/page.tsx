'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { getPost, deletePost } from '../../../lib/model';

export default function Upload() {
  const postIdRef = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLTextAreaElement>(null);

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  let getAction = useCallback(() => {
    if (!postIdRef.current) return;
    if (postIdRef.current.value.length > 0) {
      getPost(postIdRef.current.value).then((postInfo) => {
        setPost({ title: postInfo.title, content: postInfo.content });
      });
    }
  }, []);

  let deleteAction = useCallback(() => {
    deletePost(postIdRef.current);
  }, []);

  useEffect(() => {
    // downloadImage();
  }, []);

  return (
    <section className="max-w-[1440px]  max-h-[77] place-self-center w-[1440px] flex flex-col flex-1">
      <h1 className="text-2xl font-semibold mt-4 mb-8">{'文档预览'}</h1>
      <article className="flex flex-1 flex-col">
        <div>
          <input ref={postIdRef} type="text" placeholder="please type post Id"></input>
          <button onClick={getAction}>Fetch Post</button>
        </div>
        <div>
          <div>文章标题</div>
          <input className="w-full" type="text" defaultValue={post.title}></input>
        </div>
        <div className="flex-1 grid gap-20 grid-cols-2 max-h-[800px] ">
          <div className="flex flex-1 flex-col">
            文章内容
            <textarea
              className=" flex-1 w-full border-solid border border-[#cdcdcd]"
              ref={ref2}
              name="Text1"
              rows={5}
              defaultValue={post.content}
            ></textarea>
          </div>
          <div className="flex-1 max-h-[800px] overflow-scroll">
            文章预览
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
        <button className="mt-8" onClick={getAction}>
          发布
        </button>
      </article>
    </section>
  );
}
