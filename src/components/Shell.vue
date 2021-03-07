<template>
  <v-app>
    <v-navigation-drawer style="background-color: lightgrey" permanent app>
      <div :class="`text-${$vuetify.breakpoint.name}-h5`" style="text-align: center; padding: .75em">Kade Dentel</div>
      <v-list>
        <v-list-item>
          <v-btn text tag="md-button" to="/home">Home</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text tag="md-button" to="/portfolio">Portfolio</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text tag="md-button" to="/resume">Resume</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text tag="md-button" to="/about">About</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main fill-height>
      <v-sheet style="position: relative; height: 100%;">
        <home v-if="isPageActive('/home')"></home>
        <about v-if="isPageActive('/about')"></about>
        <portfolio v-if="isPageActive('/portfolio')"></portfolio>
        <resume v-if="isPageActive('/resume')"></resume>
        <img
            v-if="isPageActive('/home')"
            alt="curve"
            src="../assets/mobile_curve.svg"
            style="position: absolute; width: 100%; bottom: 0;"
        />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default {
  name: "Shell",
  components: {
    Home,
    About,
    Portfolio,
    Resume,
  },
  methods: {
    isPageActive: function (page) {
      return page === this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap");

@media (max-width: 768px) {

}

@media (min-width: 768px) {
  img {
    content: url("../assets/desktop_curve.svg");
  }

  #desktop-nav {
    padding: 1em;
    margin: 0;
    list-style-type: none;
    justify-content: center;
  }

  #desktop-nav li {
    margin: 0 0 6px 0;
  }

  .sidebar {
    height: 100%;
  }
}
</style>
