<script>
import { store } from "../store";
import MovieList from "./MovieList.vue";

export default {

    components:{
        MovieList,
        
    },

    data() {
        return {
            store,
            
        }
    },


}

</script>

<template>

    <main>

        
        <MovieList></MovieList>
        
    </main>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;

main{
    background-color: rgb(31, 30, 30);

    .container{
        margin-top: 105px;
    }
}
</style>