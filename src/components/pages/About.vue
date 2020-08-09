<template>
    <div class="root">
        <div class="about-row">
            <md-card>
                <md-card-media-actions id="my-media">
                    <md-card-media>
                        <img src="../../assets/headshot.png" alt="Headshot">
                    </md-card-media>
                </md-card-media-actions>
                <md-card-header-text>
                    <div class="md-title">About Kade</div>
                    <div class="md-subhead" id="my-subhead">Kade grew up tinkering with technology.
                        He wrote his first program on a TI-84 calculator during a class in high school.
                        Kade is motivated by creating meaningful software on cohesive and driven teams.
                    </div>
                </md-card-header-text>
            </md-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss">

    .about-row{
        display: flex;
        padding: 1em;
        justify-content: center;
    }

    .md-card-media {
        overflow: hidden;
    }

    #my-media {
        background-color: #AFAFAF;
        justify-content: center;
    }

    .md-title {
        font-family: 'Open Sans', sans-serif;
        padding-top: 16px;
        padding-left: 16px;
        background-color: #424242;
        color: white;
    }

     #my-subhead {
         background-color: #424242;
         color: rgba(255, 255, 255, .87);
         opacity: 100;
         font-size: 16px;
         padding: 8px 16px 16px;
     }

    @media (min-width: 768px) {
        .md-card{
            width: 50%;
        }
    }

</style>
