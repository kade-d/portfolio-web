export interface SwipeState {
  touchstartX: number;
  touchstartY: number;
  touchmoveX: number;
  touchmoveY: number;
  touchendX: number;
  touchendY: number;
  directions: Direction[];
  hook: (direction: Direction) => void;
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}
