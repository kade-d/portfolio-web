<template>
  <div id="about-root" style="display: grid">
    <div class="md-display-2" style="margin: auto; padding: 32px">About</div>
    <div class="about-row">
      <md-card>
        <md-card-media-actions id="my-media">
          <md-card-media>
            <img src="../../assets/headshot.png" alt="Headshot" />
          </md-card-media>
        </md-card-media-actions>
        <md-card-header-text>
          <div class="md-title">About Me</div>
          <div class="md-subhead" id="my-subhead">
            I grew up with a passion for technology. Ever since writing my first
            program on a TI-84 calculator, I've been hard at work to write
            bigger and better applications. I'm motivated by creating meaningful
            software on cohesive and driven teams.
          </div>
        </md-card-header-text>
      </md-card>
    </div>
    <!-- <div style="display: grid; justify-content: center;">
            <p style="display: flex;">Accolades</p>
            <ul>
                <li>Ball State Presidential Scholarship 2018-2021</li>
            </ul>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "About",
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
