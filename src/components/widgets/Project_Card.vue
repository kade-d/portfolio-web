<template>
    <md-card>
        <md-card-header>
            <md-avatar>
                <img class="avatar-image" :src="require('@/assets/' + avatar_image_path + '')" alt= "Avatar Image">
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
            <a v-if="devpost_link != null" :href="devpost_link">
                <img class="icon" width="30px" src="../../assets/devpost-logo.webp" alt="devpost-logo">
            </a>
        </div>

    </md-card>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            avatar_image_path: {
                type: String,
                required: true
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
            main_image_path: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>

    .md-card{
        margin: 1em;
    }

    .avatar-image {
        border-radius: 50%;
        border-style: solid;
        border-width: thin;
    }

    #card_title {
        font-size: 24px;
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
        display: flex;
        justify-content: flex-end;
    }

</style>
