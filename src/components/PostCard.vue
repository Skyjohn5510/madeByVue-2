<template>
    <v-card>
        <v-container>
            <v-layout>
                <v-flex xs3>
                    <v-layout fill-height justify-space-around>
                        <v-layout column justify-center>
                            <v-avatar size="70" color="blue"><v-icon>people</v-icon></v-avatar>
                        </v-layout>
                        <v-layout column fill-height align-content-center justify-center>
                            <h4>Name</h4>
                            <span>Role</span>
                        </v-layout>
                    </v-layout>

                </v-flex>
                <v-divider vertical color="black"></v-divider>
                <v-flex xs9>
                    <v-layout column>
                        <div class="pl-3">
                            <v-flex><h4>Title</h4></v-flex>
                            <v-flex>Can Hilti able to help to make 32mm dia core cutting for 800mm
                                dia circular column? spacing of each core is 150 mm and its through
                                and through bolt fixing application
                            </v-flex>

                            <v-flex>
                                <br>
                                <v-layout row>
                                    <v-flex>Saturday 1st Feb 2019</v-flex>
                                    <v-flex class="red--text">Content type</v-flex>
                                    <v-spacer></v-spacer>
                                    <v-icon>chat</v-icon>
                                    10
                                </v-layout>
                            </v-flex>
                        </div>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "PostCard"
    }
</script>

<style scoped>

</style>