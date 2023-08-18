// import { Stage, Layer, Circle } from 'konva';
import { DragManager } from './dragManager';

export class App {
  stage;
  layer;
  dragManager;
  constructor({ width, height }) {
    this.initialKonva({ width, height });
    this.initialDragManager();
    this.initialContent();
  }

  initialKonva({ width, height }) {
    console.log('object :>> ', width, height);
    // var stage = new Stage({
    //   container: 'konva', // id of container <div>
    //   width: width,
    //   height: height,
    // });
    // this.stage = stage;
    // // then create layer
    // var layer = new Layer();
    // // create our shape
    // // add the layer to the stage
    // stage.add(layer);
    // // draw the image
    // layer.draw();
  }

  initialDragManager() {
    this.dragManager = new DragManager(this.stage);
    this.stage.add(this.dragManager.layer);
  }

  initialContent() {
    // var circle = new Circle({
    //   x: this.stage.width() / 2,
    //   y: this.stage.height() / 2,
    //   radius: 22,
    //   fill: 'red',
    //   stroke: 'black',
    //   strokeWidth: 4,
    //   draggable: false,
    // });
    // // add the shape to the layer
    // this.dragManager.layer.add(circle);
    // this.dragManager.start(circle);
  }

  start() {
    console.log('start :>> ');
  }
}
