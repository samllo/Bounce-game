const app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xeeeeee
});

document.body.appendChild(app.view);
const stage = app.stage;

const myGraphic = new PIXI.Graphics();
myGraphic.beginFill(0xBBBBBB);
myGraphic.drawRect(0, 0, 10, 10);
stage.addChild(myGraphic);
console.clear();