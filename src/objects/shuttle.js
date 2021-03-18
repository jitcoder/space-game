import { getFrameCoordinates } from '../util';
import {factory} from '../assets';

export default class Ship {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.state = 'idle';
    this.angle = 0;
    this.frame = 0;
    this.sheet = factory.assets.shuttle.sheet;
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx, time) {
    const { x, y } = getFrameCoordinates(this.frame, this.sheet.width, this.sheet.height);
    ctx.drawImage(this.sheet, x, y, 32, 32, this.x, this.y, 32, 32);
    ctx.strokeStyle = 'white';
    ctx.strokeText(time, x, y - 20);
  }
}
