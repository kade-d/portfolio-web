<template>
    <div class="wrapper">
        <v-card max-width="40vw">
            <div style="padding: 16px 0 8px 16px; display: grid; grid-template-columns: fit-content(100%) auto auto">
                <div v-if="avatar_image_path != null" style="width: 48px; margin: auto;">
                    <v-img class="avatar-image" :src="require('@/assets/' + avatar_image_path + '')" alt= "Avatar Image"/>
                </div>

              <div style="display: grid;">
                <v-card-title :class="`text-${$vuetify.breakpoint.name}-h5`" style="margin-top: auto;">
                  {{ title }}
                </v-card-title>
                <div style="padding-left: 16px">

                </div>

              </div>

            </div>


          <v-carousel height="auto" :show-arrows="mainImagesPaths.length > 1" hide-delimiters hide-delimiter-background>
            <v-carousel-item v-for="(path, i) in mainImagesPaths" :key="i">
              <v-img :src="require('@/assets/' + path + '')" alt="Main Image"/>
            </v-carousel-item>
          </v-carousel>

          <div style="display: grid; grid-template-columns: auto auto">
            <v-card-text>
              {{ description }}
            </v-card-text>
            <v-btn outlined id="demo-link" v-if="demo_link != null" :class="`text-${$vuetify.breakpoint.name}-caption`" style="margin: auto 16px auto 0" :href="demo_link" target="_blank">{{ link_title }}
              <v-icon >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </div>




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
                        <v-img class="icon" width="30" src="../../assets/devpost-logo.png" alt="devpost-logo"/>
                    </a>
                    <a v-if="github_link != null" :href="github_link" style="margin: auto;">
                        <v-img class="icon" width="30" src="../../assets/github.png" alt="github-logo"/>
                    </a>
                </div>

            </div>

        </v-card>
    </div>
</template>

<script>
    export default {
      name: "ProjectCard",
      computed: {
          mainImagesPaths(){
            return this.main_image_paths.split(',')
          }
      },
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
        main_image_paths: {
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

    #demo-link {
      color: #0f679e;
      margin: 8px;
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
      grid-template-columns: auto auto;
      justify-content: right;
      grid-row: 1 / 1;
    }

</style>
