<template>
    <div id="home">
        <v-toolbar>

            <v-toolbar-title><span class="red--text">HILTI SHARE</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="toolbar-nav-item" style="">
                <a href="#">Home</a> /
                <a href="#">Discussion Forum</a> /
                <a href="#">Hilti News</a>
            </div>
            <v-btn dark color="red" @click="btnClicked">Login / SIgn Up {{numPoeple}}</v-btn>
        </v-toolbar>

        <v-container fluid>
            <v-layout>
                <img alt="Hilti Homepage Banner" src="" height="300px"/>
            </v-layout>
            <v-flex xs12 lg10 offset-lg1>
                <v-container>
                    <v-layout>
                        <v-text-field single-line outline placeholder="Product Model / Keyword e.g."
                                      prepend-inner-icon="search"></v-text-field>
                    </v-layout>
                    <br>
                    <v-layout column align-start class="mb-2">
                        <h3>Products Category</h3>
                        Find your questions/knowledge based on the categories
                    </v-layout>
                    <CategoryGrid></CategoryGrid>
                    <br><br>
                    <v-layout column align-start>
                        <h3>Top Topics</h3>
                    </v-layout>
                    <v-layout column>
                        <PostCard v-for="i in 4" :key="i"></PostCard>
                        <v-btn block color="blue">More</v-btn>
                    </v-layout>
                    <br><br>
                    <v-layout>
                        <v-flex xs12>
                            <v-card color="red">
                                <v-card-title>
                                    <v-layout column align-start class="white--text">
                                        <v-flex>
                                            <div>

                                            <h2><v-icon>star</v-icon>Need More Help?</h2>
                                            </div>
                                        </v-flex>
                                        <br>

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
    </div>
</template>

<script>
    import CategoryGrid from "@/components/CategoryGrid";
    import PostCard from "@/components/PostCard";
    export default {
        name: "Home",
        components: {PostCard, CategoryGrid},
        data:function() {
            return{

            }
        },
        computed:{
            numPoeple(){
                return this.$store.state.count;
            }
        },
        methods:{
            btnClicked(){
                this.$store.dispatch("incrementCount");
            }
        }
    }
</script>

<style scoped>
    .toolbar-nav-item{
        margin-right: 190px
    }
</style>