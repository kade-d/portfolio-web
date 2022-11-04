import Project from "@/types/project";

const projects: Project[] = [
  {
    title: "Scorecard App",
    description: "Track scores from your phone while playing mini golf",
    imagePaths: [
      new URL(
        "../assets/projects/scorecard-app/scorecard-hole.png",
        import.meta.url
      ).href,
    ],
    link: "https://clubhousemuncieapp.com",
  },
  {
    title: "Replay Review",
    description: "Review Rocket League replays with your team",
    imagePaths: [
      new URL("../assets/projects/vod-review/vod-review.jpg", import.meta.url)
        .href,
    ],
    link: "https://bakkesplugins.com/plugins/view/173",
    githubLink: "https://github.com/kade-d/ReplayReview",
  },
  {
    title: "Merit Engine",
    description: "Build portfolios and review their historical performance",
    imagePaths: [
      new URL(
        "../assets/projects/merit-engine/merit-engine.png",
        import.meta.url
      ).href,
    ],
  },
  {
    title: "Ohana",
    description: "Place orders for Ohana donuts and ice cream in a mobile app",
    imagePaths: [
      new URL("../assets/projects/ohana/ohana.png", import.meta.url).href,
    ],
  },
];

export default projects;
