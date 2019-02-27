<template>
    <div id="app">
        <v-app>
            <v-toolbar>

                <v-toolbar-title ><span class="red--text">HILTI SHARE</span></v-toolbar-title>
                <v-spacer></v-spacer>
                <div style="margin-right: 190px">
                    <a href="#">Home</a> /
                    <a href="#">Discussion Forum</a> /
                    <a href="#">Hilti News</a>
                </div>
                <v-btn dark color="red">Login / SIgn Up</v-btn>
            </v-toolbar>
            <v-container fluid>
                <v-layout>
                    <img alt="Hilti Homepage Banner" src="" height="300px"/>
                </v-layout>
                <v-flex xs10 offset-xs1 >
                    <v-container>
                        <v-layout>
                            <v-text-field single-line outline placeholder="Product Model / Keyword e.g." prepend-inner-icon="search"></v-text-field>
                        </v-layout>
                        <br>
                        <v-layout column align-start>
                        <h3>Products Category</h3>
                        Find your questions/knowledge based on the categories
                        </v-layout>
                        <v-container fluid grid-list-sm>
                            <v-layout row wrap>
                                <v-flex v-for="i in 12" :key="i" xs3>
                                    <v-card height="140px">
                                        <v-card-text>
                                            <v-layout column class="align-content-center">
                                                <v-flex class="align-content-center">
                                                    <v-img><v-icon>cached</v-icon></v-img>
                                                </v-flex>
                                                Category
                                            </v-layout>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

                        <v-layout column align-start>
                            <h3>Top Topics</h3>
                        </v-layout>
                        <v-layout column>
                            <v-card v-for="i in 4" :key="i">
                                <v-container>
                                    <v-layout>
                                        <v-flex xs3>
                                            <v-layout>
                                                <v-avatar color="blue"></v-avatar>
                                                <v-spacer></v-spacer>
                                                <v-layout column>
                                                <h5>Name</h5><br>
                                                Role
                                                </v-layout>
                                            </v-layout>

                                        </v-flex>
                                        <v-divider vertical color="black"></v-divider>
                                        <v-flex xs9>
                                            <v-layout column>
                                                <div class="pl-3">
                                                    <v-flex><h4>Title</h4></v-flex>
                                                    <v-flex>Can Hilti able to help to make 32mm dia core cutting for 800mm dia circular column? spacing of each core is 150 mm and its through and through bolt fixing application</v-flex>

                                                    <v-flex>
                                                        <br>
                                                        <v-layout row>
                                                            <v-flex>Saturday 1st Feb 2019</v-flex>
                                                            <v-flex class="red--text">Content type</v-flex>
                                                            <v-spacer></v-spacer>
                                                            <v-icon>chat</v-icon>10
                                                        </v-layout>
                                                    </v-flex>
                                                </div>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                            <v-btn block color="blue">More</v-btn>
                        </v-layout>
                        <br><br>
                        <v-layout>
                            <v-flex xs12>
                                <v-card color="red">
                                    <v-card-title>
                                        <v-layout column align-start class="white--text">
                                            <v-flex><v-icon>star</v-icon>Need More Help?</v-flex><br>

                                            <span>Identify your Products</span>
                                            <span>Contact Support</span>
                                            <span>Feedback</span>
                                            <span>Help</span>
                                        </v-layout>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-container>
        </v-app>
    </div>
</template>

<script>



    export default {
        name: 'app',
        components: {

        },
        data: function () {
            return {
                titleApp: "abc",
                drawer: false
            }
        }
        ,
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
