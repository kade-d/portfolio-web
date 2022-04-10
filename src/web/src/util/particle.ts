import Dot from "@/types/animation/dot";
import Vector from "@/types/animation/vector";

export default class Particle implements Dot {
  position: Vector;
  radius: number;
  color: string;
  velocity: Vector;
  mouse: Vector;
  screen: Vector;
  filled: boolean;

  constructor(
    position: Vector,
    radius: number,
    color: string,
    velocity: Vector,
    mouse: Vector,
    screen: Vector,
    filled: boolean = true
  ) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.mouse = mouse;
    this.screen = screen;
    this.filled = filled;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    // spotlight
    const dotDistance = Math.sqrt(
      (this.position.x - this.mouse.x) ** 2 +
        (this.position.y - this.mouse.y) ** 2
    );
    const distanceRatio = dotDistance / (window.innerWidth / 1.7);

    // this removes the ending parentheses from the rgb color and adds an opacity
    context.fillStyle = `${this.color.slice(0, -1)},${1 - distanceRatio})`;
    if (this.filled) {
      context.fill();
    } else {
      context.stroke();
    }

    this.move();
  }
  move(): void {
    if (this.position.y < 0 || this.position.y > this.screen.y) {
      this.velocity.y = -this.velocity.y;
    } else if (this.position.x < 0 || this.position.x > this.screen.x) {
      this.velocity.x = -this.velocity.x;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
