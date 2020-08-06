

<template>
    <div class="root">
        <div class="header">Kade Dentel</div>
        <div class="content" v-bind:class="{active: isPageActive('/home')}">
            <ul class="nav">
                <li> <router-link tag="md-button" to="/about">About</router-link></li>
                <li> <router-link tag="md-button" to="/home">Home</router-link></li>
                <li> <router-link tag="md-button" to="/portfolio">Portfolio</router-link></li>
            </ul>
            <Home v-if="isPageActive('/home')"></Home>
            <About v-if="isPageActive('/about')"></About>
            <Portfolio v-if="isPageActive('/portfolio')"></Portfolio>
            <img v-if="isPageActive('/home')" alt="curve" src="../assets/mobile_curve.svg"/>
        </div>
    </div>
</template>

<script>

    import Home from "./pages/Home";
    import About from "./pages/About";
    import Portfolio from "./pages/Portfolio";

    export default {
        name: 'Shell',
        components: {
            Home, About, Portfolio
        },
        methods: {
            isPageActive: function (page){
                return page === this.$route.path;
            }
        }
    }

</script>

<style scoped lang="scss">

    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap');

    .root{
        height: 100%;
        width: 100%;
        font-family: 'Montserrat', 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .header {
        text-align: center;
        font-size: 28px;
        padding: .75em;
        width: 100%;
    }

    .router-link-active{
        font-size: 20px;
    }

    .content {
        min-height: 100%;
        display: grid;
        grid-template-rows: 60px auto;
        justify-content: center;
        background-color: white;
        border-radius: 30px 30px 0 0;
    }

    .active {
        min-height: 90%;
        display: grid;
        grid-template-rows: 10% auto;
        justify-content: center;
        background-color: white;
        border-radius: 30px 30px 0 0;
    }

    .nav{
        padding: 0;
        display: flex;
        list-style-type: none;
        justify-content: center;
    }

    li a {
        color: black;
        text-decoration: none;
    }

    img {
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    @media (min-width: 768px) {
        img{
            content:url("../assets/desktop_curve.svg");
        }
    }

</style>
