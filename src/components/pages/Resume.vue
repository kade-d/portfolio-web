<template>
  <div id="resume-root" style="display: grid">
    <div class="md-display-2" style="margin: auto; padding: 32px">Resume</div>
    <div class="resume-contents" style="padding-left: 10%;">
      <div v-for="(point, index) in resumePoints" :key="index">
        <ResumeItem :point="point"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ResumeItem from "./ResumeItem";

  export default {
  name: "About",
  components: {ResumeItem},
  computed: {
    resumePoints(){
      return [
        {
          headline: "Education",
          items: [
            {
              title: "Ball State University",
              subItems: [
                {
                  name: "Expected Grad. - May 2021"
                },
                {
                  name: "BS in Computer Science"
                },
                {
                  name: "GPA: 3.48/4.0"
                }
              ]
            }
          ]
        },
        {
          headline: "Experience",
          items: [
            {
              title: "Accutech Systems",
              subItems: [
                {
                  name: "Worked on a team of 4 student-developers to create a financial advising tool with Vue.js and C#"
                },
                {
                  name: "Created an API using ASP.NET Core"
                },
                {
                  name: "Utilized Agile and Scrum development methodology through 4-week sprints"
                }
              ]
            },
            {
              title: "Techpoint",
              subItems: [
                {
                  name: "Developed Link Up, enabling remote employees to form social bonds with their\n" +
                    "coworkers, using Flutter and Firestore"
                }
              ]
            },
            {
              title: "Ohana",
              subItems: [
                {
                  name: "Engineered a cross-platform mobile application to enable contactless ordering\n" +
                    "for a local restaurant using Flutter and Node.js"
                },
                {
                  name: "Integrated with Square’s APIs to process customer information and payments"
                }
              ]
            },
            {
              title: "BSU Digital Scholarship Lab",
              subItems: [
                {
                  name: "Wrote data aggregation scripts using Python"
                },
                {
                  name: "Created and analyzed vector datasets using ArcGIS"
                }
              ]
            }
          ]
        },
        {
          headline: "Skills",
          items: [
            {
              title: "JavaScript, C#, Java, Vue.js, C++",
            }
          ]
        },

      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.about-row {
  display: flex;
  padding: 1em;
  justify-content: center;
}

.md-card-media {
  overflow: hidden;
}

#my-media {
  background-color: #afafaf;
  justify-content: center;
}

.md-title {
  font-family: "Open Sans", sans-serif;
  padding-top: 16px;
  padding-left: 16px;
  background-color: #424242;
  color: white;
}

#my-subhead {
  background-color: #424242;
  color: rgba(255, 255, 255, 0.87);
  opacity: 100;
  font-size: 16px;
  padding: 8px 16px 16px;
}

@media (min-width: 768px) {
  .md-card {
    width: 50%;
  }
}
</style>
