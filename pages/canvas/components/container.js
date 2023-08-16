'use client';
import { useEffect, useRef } from 'react';
import { Stage, Layer, Circle } from 'konva';

export default function Container() {
  const container = useRef();
  useEffect(() => {
    console.log();

    var stage = new Stage({
      container: 'konva', // id of container <div>
      width: container.current.offsetWidth,
      height: container.current.offsetHeight,
    });

    // then create layer
    var layer = new Layer();

    // create our shape
    var circle = new Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
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
