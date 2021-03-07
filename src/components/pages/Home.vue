<template>
    <div>
        <div id="headline" :class="`text-${$vuetify.breakpoint.name}-h3`">Software Developer</div>
        <div class="button-container">
            <v-btn id="view-work-button" to="portfolio" tag="md-button">View my work</v-btn>
        </div>
    </div>
</template>


<script>

    export default {
        name: "Home"
    }

</script>

<style lang="scss" scoped>

    #headline{
      text-align: center;
      font-weight: normal;
      padding: 3em 0 .75em;
      line-height: normal;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    #view-work-button {
        background-color: #447DA1;
        color: white;
    }

</style>
