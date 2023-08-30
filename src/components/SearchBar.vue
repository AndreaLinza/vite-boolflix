<script>
import { store, movieList } from '../store';

export default {

    data(){
        return{
            store,
            urls: ["https://api.themoviedb.org/3/discover/movie", "https://api.themoviedb.org/3/discover/tv"],
        }
    },
    methods:{
        movieList
    },

    mounted(){
        movieList(this.urls)
    }

}

</script>

<template>
    <div class="input-group mb-3 w-auto">
        <input type="text" class="form-control" placeholder="Impegni per stasera?" 
        v-model="store.search">
        <button class="btn btn-outline-danger" type="button">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
</template>

<style lang="scss" scoped></style>