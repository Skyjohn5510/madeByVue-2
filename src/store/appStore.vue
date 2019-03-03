<script>
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex);
    export default new Vuex.Store({
        state:{
            count:0
        },
        mutations:{
            addCount(state, payload){
                payload ?state.count += payload : state.count++
            }
        },
        actions:{
            incrementCount(context,payload){
                if(payload){
                    context.commit("addCount",payload)
                }else{
                    context.commit("addCount")
                }
            }
        }

    })
</script>

<style scoped>

</style>