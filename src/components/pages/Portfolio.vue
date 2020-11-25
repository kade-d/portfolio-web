<template>
    <div>
        <Project_Card
            avatar_image_path="techpoint_sos_challenge.png"
            description="Link Up provides remote employees an office-like experience which facilitates collaboration and social interaction."
            main_image_path="linkup-demo-1.gif"
            demo_link="https://techpoint-sos-challenge.web.app/#/"
            devpost_link="https://devpost.com/software/workfromhome_techpointsoschallenge"
            link_title="Live Demo"
            title="Link Up"
            tech_stack="Flutter, Firebase">
        </Project_Card>
        <Project_Card
            avatar_image_path="ohana_icon.png"
            description="Ohana's iOS and Android app offers customers a convenient method to order donuts, ice cream, and more from Ohana."
            main_image_path="ohana.png"
            title="Ohana's Mobile App"
            devpost_link="https://devpost.com/software/ohana-mobile-app"
            tech_stack="Flutter, Firebase, Square APIs">
        </Project_Card>
        <Project_Card
            description="An API to manage data for Ball State's Shuttle Bus system."
            main_image_path="shuttle-bus-api.png"
            title="Ball State's Shuttle Bus API"
            github_link="https://github.com/kade-d/BusShuttleAPI"
            tech_stack="Laravel, PHP, MySQL">
        </Project_Card>
    </div>
</template>

<script>
    import Project_Card from "../widgets/Project_Card";

    export default {
        name: "Portfolio",
        components: {
            Project_Card
        },
    }

</script>

<style lang="scss">



</style>
