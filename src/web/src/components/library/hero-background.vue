<template>
  <div class="hero-background" @mousemove="(e) => updateMouse(e)">
    <canvas id="canvas">
      <n-element> </n-element>
    </canvas>
    <div class="hero-background__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dot from "@/types/animation/dot";
import Vector from "@/types/animation/vector";
import Particle from "@/util/particle";
import { NElement } from "naive-ui";
import { onMounted, ref } from "vue";

onMounted(() => {
  initialize();
});

const numberOfDots = 100;
const screen: Vector = { x: document.body.scrollWidth, y: window.innerHeight }; //todo: this makes the canvas taller than the available room
const mouse: Vector = { x: screen.x / 2, y: screen.y / 2 };

let canvas: HTMLCanvasElement | null | undefined;
let context: CanvasRenderingContext2D | null | undefined;
let dots: Dot[];

function initialize() {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  context = canvas?.getContext("2d");
  if (!canvas || !context) {
    return;
  }

  canvas.width = screen.x;
  canvas.height = screen.y;
  canvas.style.display = "block";
  context.lineWidth = 0.3;
  context.strokeStyle = "rgb(81, 162, 233)";

  dots = Array.from(
    { length: numberOfDots },
    (_v, _i) =>
      new Particle(
        {
          x: getRandomIntInclusive(0, screen.x),
          y: getRandomIntInclusive(0, screen.y),
        },
        Math.random() * 4,
        "rgb(81, 162, 233)",
        { x: -0.5 + Math.random(), y: -0.5 + Math.random() },
        mouse,
        screen
      )
  );

  const draw = setInterval(render, 1000 / 60.0);
}

function render() {
  if (!canvas || !context) {
    return;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let dot of dots) {
    dot.draw(context);
  }
}

function updateMouse(e: MouseEvent) {
  var rect = canvas?.getBoundingClientRect();
  mouse.x = e.clientX - (rect?.left ?? 0);
  mouse.y = e.clientY - (rect?.top ?? 0);
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
</script>

<style scoped lang="scss">
#canvas {
  position: absolute;
  z-index: 0;
}

.hero-background {
  width: 100%;
  height: 100%;
  &__content {
    display: flex;
    align-self: center;
    justify-self: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: normal;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>