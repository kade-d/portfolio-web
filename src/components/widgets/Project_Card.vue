<template>
    <div class="wrapper">
        <md-card>
            <md-card-header>
                <md-avatar v-if="avatar_image_path != null">
                    <img  class="avatar-image" :src="require('@/assets/' + avatar_image_path + '')" alt= "Avatar Image">
                </md-avatar>

                <div class="md-title" id="card_title">
                    {{title}}
                </div>
                <div class="md-subhead">
                    <a v-if="demo_link != null" :href="demo_link">{{link_title}}</a>
                </div>
            </md-card-header>

            <md-card-media>
                <img :src="require('@/assets/' + main_image_path + '')" alt="Main Image">
            </md-card-media>

            <md-card-content>
                {{description}}
            </md-card-content>


            <div class="trailing-content">
                <div class="start">
                    <div class="built-with">
                        <p class="tool" v-for="(tool) in tech_stack.split(',')" v-bind:key="tool">
                            {{ tool }}
                        </p>
                    </div>
                </div>
                <div class="end">
                    <a v-if="devpost_link != null" :href="devpost_link">
                        <img class="icon" height="30" width="30" src="../../assets/devpost-logo.png" alt="devpost-logo">
                    </a>
                    <a v-if="github_link != null" :href="github_link">
                        <img class="icon" width="30" src="../../assets/github.png" alt="devpost-logo">
                    </a>
                </div>

            </div>

        </md-card>
    </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            avatar_image_path: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            demo_link: {
                type: String,
            },
            link_title: {
                type: String,
            },
            devpost_link: {
                type: String
            },
            github_link: {
              type: String
            },
            main_image_path: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            tech_stack: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

    .wrapper{
        display: flex;
        justify-content: center;
    }

    .md-card {
        margin: 1em;
    }

    .avatar-image {
        border-radius: 50%;
        border-style: solid;
        border-width: thin;
    }

    #card_title {
        font-size: 24px;
        font-family: 'Open Sans', sans-serif;
        background-color: white;
        color: black;
        padding-bottom: 16px;
    }

    .md-subhead {
        overflow: hidden;
        white-space: nowrap;
    }

    .md-card-media {
        padding: 3em 2em;
        background-color: #CBCBCB;
    }

    .icon {
        margin: .5em;
    }

    .trailing-content{
        display: grid;
        grid-template-rows: auto auto;
    }

    .start{
        margin-left: 1em;
        grid-row: 1 / 1;
    }

    .tool {
        font-family: 'Open Sans', sans-serif;
        color: white;
        background-color: #447DA1;
        padding: .5em;
        margin-right: 1em;
        display: inline-block;
    }

    .end{
        display: flex;
        justify-content: flex-end;
        grid-row: 1 / 1;
    }

    @media (min-width: 768px) {
        .md-card{
            width: 50%;
        }
    }

</style>
