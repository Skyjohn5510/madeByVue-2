<template>
    <div id="app">
        <v-app>
            <router-view></router-view>
        </v-app>
    </div>
</template>

<script>

    import Home from './components/Home.vue'

    export default {
        name: 'app',
        components: {
            Home
        },
        data: function () {
            return {
                titleApp: "abc",
                drawer: false
            }
        },
        methods: {

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
        margin-top: 0px;
    }
</style>
