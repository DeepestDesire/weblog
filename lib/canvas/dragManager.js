// import { Layer, Animation } from 'konva';

// export class DragManager {
//   x;
//   y;
//   layer;
//   stage;

//   constructor(stage) {
//     let layer = new Layer();
//     this.layer = layer;
//     this.stage = stage;
//   }

//   start(shape) {
//     shape.on('pointermove', () => {
//       var pointerPos = this.stage.getPointerPosition();
//       this.x = pointerPos.x - 190;
//       this.y = pointerPos.y - 40;
//       console.log('this :>> ', this);
//       // writeMessage('x: ' + x + ', y: ' + y);
//     });

//     let anim = new Animation(function () {}, this.layer);
//     anim.start();
//   }

//   move() {}

//   end() {}
// }
