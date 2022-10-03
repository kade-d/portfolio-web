<template>
  <div class="hero-background">
    <canvas id="canvas" :style="`background-color: ${theme.bodyColor};`">
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
import { useMouse } from "@vueuse/core";
import { NElement, useThemeVars } from "naive-ui";
import { onMounted, ref, watch } from "vue";

onMounted(() => {
  initialize();
});

const theme = useThemeVars();

const mousePos = useMouse({
  initialValue: {
    x: document.body.scrollWidth / 2,
    y: window.innerHeight / 2,
  },
});

// watch(mousePos.x, (newValue, oldValue) => {
//   console.log(mouse.x, newValue);
//   // mouse.x = lerp(mouse.x, newValue, 0.01); // todo check mousepos on every render so we can lerp
// });

// watch(mousePos.y, (newValue, oldValue) => {
//   // mouse.y = lerp(mouse.y, newValue, 0.01); // todo check mousepos on every render so we can lerp
// });

const numberOfDots = 200;
let screen: Vector = { x: 0, y: 0 };
let mouse: Vector = { x: 0, y: 0 };

let canvas: HTMLCanvasElement | null | undefined;
let context: CanvasRenderingContext2D | null | undefined;
let dots: Dot[];

function initialize() {
  screen = {
    x: document.body.scrollWidth,
    y: window.innerHeight,
  };
  mouse = { x: screen.x / 2, y: screen.y / 2 };
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  context = canvas?.getContext("2d");
  if (!canvas || !context) {
    return;
  }

  canvas.width = screen.x;
  canvas.height = screen.y;
  canvas.style.display = "block";
  context.lineWidth = 0.3;
  context.strokeStyle = theme.value.primaryColor;

  dots = Array.from(
    { length: numberOfDots },
    (_v, _i) =>
      new Particle(
        {
          x: getRandomIntInclusive(0, screen.x),
          y: getRandomIntInclusive(0, screen.y),
        },
        Math.random() * 4,
        theme.value.primaryColor,
        { x: -0.5 + Math.random(), y: -0.5 + Math.random() },
        mouse,
        screen
      )
  );

  const draw = setInterval(render, 1000 / 60.0);
  clearCanvasOnResize(draw);
}

function clearCanvasOnResize(timer: NodeJS.Timer) {
  window.onresize = () => {
    clearInterval(timer);
    initialize();
  };
}

function lerp(start: number, end: number, time: number) {
  return start * (1 - time) + time * end;
}

function render() {
  if (!canvas || !context) {
    return;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  mouse.x = lerp(mouse.x, mousePos.x.value, 0.1); // todo check mousepos on every render so we can lerp
  mouse.y = lerp(mouse.y, mousePos.y.value, 0.1); // todo check mousepos on every render so we can lerp

  for (const dot of dots) {
    dot.draw(context);
  }
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
</script>

<style scoped lang="scss">
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
