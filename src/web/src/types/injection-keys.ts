import { InjectionKey } from "vue";
import { Direction } from "@/types/swipe-state";

const navigateKey = Symbol() as InjectionKey<(direction: Direction) => void>;

export { navigateKey };
