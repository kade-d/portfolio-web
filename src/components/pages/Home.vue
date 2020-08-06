<template>
    <div>
        <h1>I'm a full-stack<br/>software developer.</h1>
        <div class="button-container">
            <router-link id="view-work-button" to="portfolio" tag="md-button">View my work</router-link>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import Button from 'material-components-vue/dist/button'
    Vue.use(Button)

    export default {
        name: "Home"
    }

</script>

<style lang="scss" scoped>

    h1{
        text-align: center;
        font-weight: normal;
        padding-top: 40px;
        padding-bottom: 10px;
        padding-left: .5em;
        padding-right: .5em;
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
