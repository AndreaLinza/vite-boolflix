<script>
import {store} from '../store';
import Card from './Card.vue';

export default {

    components:{
        Card,
    },

    data(){
        return{
            store,
        }
    },



}
</script>

<template>

    <div class="container">

        <h2 class="text-light pt-4">
            Movie & Serie TV
        </h2>
        <div class="row row-cols-4 g-4">
            <div class="col py-4" 
            v-for="element in store.movieList">
                <Card :card="element"></Card>

            </div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;



</style>