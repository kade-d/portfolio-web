import Badge from "@/types/badge";

const badges: Badge[] = [
  {
    image: new URL("../../assets/projects/badges/js.svg", import.meta.url).href,
  },
  {
    image: new URL("../../assets/projects/badges/csharp.svg", import.meta.url)
      .href,
  },
  {
    image: new URL("../../assets/projects/badges/ts.svg", import.meta.url).href,
  },
  {
    image: new URL("../../assets/projects/badges/vue.svg", import.meta.url)
      .href,
  },
];

export default badges;
