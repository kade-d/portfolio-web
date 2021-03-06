<template>
  <div style="display: grid">
    <div class="md-display-2" style="margin: auto; padding: 32px">
      Portfolio
    </div>
    <Project_Card
      description="
        We developed Merit Engine to explore a new field of financial advising software. 
        Using Merit Engine, advisors can craft and visualize hypothetical investment strategies, providing
        key information for determining what strategy best fits each client."
      main_image_path="merit-engine.png"
      title="Capstone Project"
      tech_stack="C#, ASP.NET Core, Vue.js"
    >
    </Project_Card>
    <Project_Card
      avatar_image_path="ohana_icon.png"
      description="Ohana's iOS and Android app offers customers a convenient method to order donuts, ice cream, and more from Ohana."
      main_image_path="ohana.png"
      title="Ohana's Mobile App"
      devpost_link="https://devpost.com/software/ohana-mobile-app"
      tech_stack="Flutter, Firebase, Square APIs"
    >
    </Project_Card>
    <Project_Card
      avatar_image_path="techpoint_sos_challenge.png"
      description="Link Up provides remote employees an office-like experience which facilitates collaboration and social interaction."
      main_image_path="linkup-demo-1.gif"
      demo_link="https://techpoint-sos-challenge.web.app/#/"
      devpost_link="https://devpost.com/software/workfromhome_techpointsoschallenge"
      link_title="Live Demo"
      title="Link Up"
      tech_stack="Flutter, Firebase"
    >
    </Project_Card>
    <Project_Card
      description="Replay Review helps Rocket League teams review and analyze their gameplay."
      main_image_path="vod-review-1.jpeg"
      title="Replay Review"
      demo_link="https://bakkesplugins.com/plugins/view/173"
      link_title="More Info"
      tech_stack="C++"
    >
    </Project_Card>
  </div>
</template>

<script>
import Project_Card from "../widgets/Project_Card";

export default {
  name: "Portfolio",
  components: {
    Project_Card,
  },
};
</script>

<style lang="scss">
</style>
