<template>
    <v-container fluid grid-list-md class="ma-0, pa-0">
        <v-layout row wrap>
            <v-flex v-for="i in 12" :key="i" xs3>
                <!--<v-card height="140px">
                    <v-card-text>
                        <v-layout column class="align-content-center">
                            <v-flex class="align-content-center">
                                <v-img>
                                    <v-icon>cached</v-icon>
                                </v-img>
                            </v-flex>
                            Category
                        </v-layout>
                    </v-card-text>
                </v-card> -->
                <v-sheet height="140px" class="elevation-2">
                    <v-layout column fill-height class="text-xs-center">
                        <v-img>
                            <v-icon>cached</v-icon>
                        </v-img>
                        <span>Category</span>
                    </v-layout>
                </v-sheet>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CategoryGrid"
    }
</script>

<style scoped>

</style>