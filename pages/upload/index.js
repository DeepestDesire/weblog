import { useCallback, useEffect, useRef } from 'react';
import { dealWithData, deletePost } from '../../lib/model';

export default function Upload() {
  const ref1 = useRef('title');
  const ref2 = useRef('content');

  let onClick = useCallback(() => {
    dealWithData(ref1.current.value, ref2.current.value);
  }, []);

  let deleteAction = useCallback(() => {
    deletePost(ref1.current.value, ref2.current.value);
  }, []);

  useEffect(() => {
    // downloadImage();
  }, []);

  return (
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
  );
}
