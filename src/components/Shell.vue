<template>
  <div class="root" v-bind:style="getRootStyle">
    <div id="mobile-header">Kade Dentel</div>
    <div class="sidebar">
      <div id="desktop-header">Kade Dentel</div>
      <ul id="desktop-nav">
        <li><v-btn text tag="md-button" to="/home">Home</v-btn></li>
        <li>
          <v-btn text tag="md-button" to="/portfolio">Portfolio</v-btn>
        </li>
        <li>
          <v-btn text tag="md-button" to="/resume">Resume</v-btn>
        </li>
        <li><v-btn text tag="md-button" to="/about">About</v-btn></li>
      </ul>
    </div>
    <div class="content-shell">
      <div class="content">
        <ul id="mobile-nav">
          <li><v-btn tag="md-button" to="/about">About</v-btn></li>
          <li><v-btn tag="md-button" to="/home">Home</v-btn></li>
          <li>
            <v-btn tag="md-button" to="/portfolio">Portfolio</v-btn>
          </li>
          <li>
            <v-btn tag="md-button" to="/resume">Resume</v-btn>
          </li>
        </ul>
        <home v-if="isPageActive('/home')"></home>
        <about v-if="isPageActive('/about')"></about>
        <portfolio v-if="isPageActive('/portfolio')"></portfolio>
        <resume v-if="isPageActive('/resume')"></resume>
      </div>
      <img
        v-if="isPageActive('/home')"
        alt="curve"
        src="../assets/mobile_curve.svg"
      />
    </div>
  </div>
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

  computed: {
    getRootStyle: function () {
      if (this.isPageActive("/portfolio") || this.isPageActive("/resume")) {
        return {
          "overflow-y": "scroll",
        };
      } else {
        return {
          overflow: "hidden",
        };
      }
    },
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

.root {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 10% 90%;
  font-family: "Montserrat", "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content-shell {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px 30px 0 0;
}

.content {
  background-color: white;
  border-radius: 30px 30px 0 0;
  // overflow-y: scroll;
}

#mobile-header,
#desktop-header {
  grid-column: 1 / 3;
  text-align: center;
  font-size: 28px;
  padding: 0.75em;
  width: 100%;
  grid-row: 1;
}

li a {
  color: black;
  text-decoration: none;
}

img {
  margin-top: auto;
  width: 100%;
}

@media (max-width: 768px) {
  .content-shell {
    grid-row: 2;
    grid-column: 1 / 3;
  }

  .sidebar {
    grid-row: 2;
    grid-column: 1;
    display: none;
  }

  .router-link-active {
    font-size: 20px;
  }

  #mobile-nav {
    padding: 1em;
    margin: 0;
    display: flex;
    border-radius: 30px 30px 0 0;
    list-style-type: none;
    background-color: white;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  img {
    content: url("../assets/desktop_curve.svg");
  }

  .content-shell {
    grid-row: 1 / 3;
    grid-column: 2;
    border-radius: 0;
  }

  #mobile-header {
    display: none;
  }

  #mobile-nav {
    display: none;
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
    display: block;
    position: fixed;
  }
}
</style>
