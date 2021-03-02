<template>
  <div id="resume-root" style="display: grid">
    <div class="md-display-2" style="margin: auto; padding: 32px">Resume</div>
    <div class="about-row"></div>
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
