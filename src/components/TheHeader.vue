<script>
import SearchBar from './SearchBar.vue';

export default {

    components:{
        SearchBar,
    }
}
</script>

<template>
    <header>
        <nav class="navbar d-flex bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand fs-1"><img src="../assets/img/boolflix-logo.png" alt=""></a>
                <SearchBar></SearchBar>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

nav{
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
}




</style>