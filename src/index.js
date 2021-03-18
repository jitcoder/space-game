import Camera from "./camera";
import { factory } from './assets';

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const camera = new Camera(ctx);



const render = (time) => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  s.draw(ctx);
  camera.begin();
  camera.updateViewport();
  camera.end();

  window.requestAnimationFrame(render);
}

(async () => {
  await factory._loaded;
  const s = factory.new('shuttle');
  render(0);
})()