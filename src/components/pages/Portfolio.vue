<template>
    <div>
        <Project_Card
            avatar_image_path="techpoint_sos_challenge.webp"
            description="Link Up provides remote employees an office-like experience which facilitates collaboration and social interaction."
            main_image_path="link_up.webp"
            demo_link="https://techpoint-sos-challenge.web.app/#/"
            devpost_link="https://devpost.com/software/workfromhome_techpointsoschallenge"
            link_title="Live Demo"
            title="Link Up">
        </Project_Card>
        <Project_Card
                avatar_image_path="ohana_icon.webp"
                description="Ohana's iOS and Android app offers customers an easy method of contactless ordering."
                main_image_path="ohana.webp"
                title="Ohana's App"
                devpost_link="https://devpost.com/software/ohana-mobile-app">
        </Project_Card>
        <Project_Card
                avatar_image_path="ohana_icon.webp"
                description="Ohana's iOS and Android app offers customers an easy method of contactless ordering."
                main_image_path="ohana.webp"
                title="Ohana's App"
                devpost_link="https://devpost.com/software/ohana-mobile-app">
        </Project_Card>
    </div>
</template>

<script>
    import Project_Card from "../widgets/Project_Card";

    export default {
        name: "Portfolio",
        components: {
            Project_Card
        }
    }

</script>

<style lang="scss" scoped>

</style>
