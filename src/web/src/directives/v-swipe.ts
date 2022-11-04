import { SwipeState, Direction } from "@/types/swipe-state";
import { Directive, ref } from "vue";

const vSwipe: Directive = {
  beforeMount: (el: HTMLElement, binding) => {
    const directions = Object.keys(binding.modifiers) as Direction[];
    const hook = binding.value;
    const state = ref(initState(directions, hook));
    el.addEventListener("touchmove", (e) => onTouchMove(e, state.value));
    el.addEventListener("touchstart", (e) => onTouchStart(e, state.value));
    el.addEventListener("touchend", (e) => onTouchEnd(e, state.value));
  },
  unmounted: (el: HTMLElement) => {
    el.removeEventListener("touchmove", (e) => onTouchMove);
    el.removeEventListener("touchstart", (e) => onTouchStart);
    el.removeEventListener("touchend", (e) => onTouchEnd);
  },
};

const threshold = 30;

function onTouchStart(event: TouchEvent, state: SwipeState) {
  event.preventDefault();
  state.touchstartX = event.touches[0].clientX;
  state.touchstartY = event.touches[0].clientY;
}

function onTouchMove(event: TouchEvent, state: SwipeState) {
  event.preventDefault();
  state.touchmoveX = event.touches[0].clientX;
  state.touchmoveY = event.touches[0].clientY;
}

function onTouchEnd(event: TouchEvent, state: SwipeState) {
  event.preventDefault();
  console.log(event);
  state.touchendX = event.changedTouches[0].clientX;
  state.touchendY = event.changedTouches[0].clientY;

  const deltaX = state.touchendX - state.touchstartX;
  const deltaY = state.touchendY - state.touchstartY;

  let swipeDirection: Direction | undefined;
  if (deltaY > threshold) {
    swipeDirection = Direction.DOWN;
  } else if (deltaY < -threshold) {
    swipeDirection = Direction.UP;
  } else if (deltaX > threshold) {
    swipeDirection = Direction.RIGHT;
  } else if (deltaX < -threshold) {
    swipeDirection = Direction.LEFT;
  }
  if (swipeDirection && state.directions.some((d) => d === swipeDirection)) {
    state.hook(swipeDirection);
  }

  console.log(deltaY);
}

function initState(
  directions: Direction[],
  hook: (direction: Direction) => void
): SwipeState {
  return {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    directions: directions,
    hook: hook,
  };
}

export default vSwipe;
