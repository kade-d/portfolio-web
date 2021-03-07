<template>
  <div id="about-root" style="display: grid">
    <div :class="`text-${$vuetify.breakpoint.name}-h4`" style="margin: auto; padding: 32px">About</div>
    <div class="about-row">
      <v-card max-width="500">
        <v-card-actions id="my-media">
            <v-img max-width="250" src="../../assets/headshot.png" alt="Headshot" />
        </v-card-actions>
          <v-card-title >About Me</v-card-title>
          <div id="my-subhead">
            I grew up with a passion for technology. Ever since writing my first
            program on a TI-84 calculator, I've been hard at work to write
            bigger and better applications. I'm motivated by creating meaningful
            software on cohesive and driven teams.
          </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about-row {
  display: grid;
  padding: 1em;
  justify-content: center;
}

#my-media {
  background-color: #afafaf;
  justify-content: center;
}

#my-subhead, .v-card__title {
  background-color: #424242;
  color: rgba(255, 255, 255, 0.87);
  opacity: 100;
  padding: 8px 16px 16px;
}

@media (min-width: 768px) {
  .md-card {
    width: 50%;
  }
}
</style>
