'use client';
import { useEffect, useRef } from 'react';
import { App } from '../../../lib/canvas/app';

let app = null;
export default function Container() {
  const container = useRef();
  useEffect(() => {
    app = new App({ width: container.current.offsetWidth, height: container.current.offsetHeight });
    app.start();
  }, []);

  const onClick = function () {};

  return (
    <>
      <div id="konva" ref={container} className="flex flex-1" onClick={onClick}>
        22222
      </div>
    </>
  );
}
