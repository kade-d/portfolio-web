<template>
    <div class="wrapper">
        <v-card max-width="700px">
            <div style="padding: 16px; display: grid; grid-template-columns: fit-content(100%) auto">
                <div v-if="avatar_image_path != null" style="width: 48px; margin-right: 16px;">
                    <v-img class="avatar-image" :src="require('@/assets/' + avatar_image_path + '')" alt= "Avatar Image"/>
                </div>

              <div style="display: grid;">
                <v-card-title class="md-title" id="card_title" style="margin-top: auto;">
                  {{ title }}
                </v-card-title>
                <div class="md-subhead">
                  <a id="demo-link" v-if="demo_link != null" :href="demo_link">{{ link_title }}</a>
                </div>
              </div>
            </div>

            <v-img :src="require('@/assets/' + main_image_path + '')" alt="Main Image"/>

            <v-card-text>
                {{description}}
            </v-card-text>


            <div class="trailing-content">
                <div class="start">
                    <div class="built-with">
                        <p class="tool" v-for="(tool) in tech_stack.split(',')" v-bind:key="tool">
                            {{ tool }}
                        </p>
                    </div>
                </div>
                <div class="end">
                    <a v-if="devpost_link != null" :href="devpost_link" style="margin: auto;">
                        <v-img class="icon" height="30" width="30" src="../../assets/devpost-logo.png" alt="devpost-logo"/>
                    </a>
                    <a v-if="github_link != null" :href="github_link" style="margin: auto;">
                        <v-img class="icon" width="30" src="../../assets/github.png" alt="devpost-logo"/>
                    </a>
                </div>

            </div>

        </v-card>
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
    }

    #demo-link {
        color: #0f679e;;
        font-size: 16px;
        font-weight: 600;
    }

    .md-subhead {
        overflow: hidden;
        white-space: nowrap;
    }

    .md-card-media {
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
        display: grid;
        justify-content: right;
        grid-row: 1 / 1;
    }

    @media (min-width: 768px) {
        .md-card{
            width: 50%;
        }
    }

</style>
