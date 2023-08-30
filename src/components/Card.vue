<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        }
    }

}

</script>


<template>
    <div class=" my-card h-100">
        <div class="card h-100">
            <img :src="`http://image.tmdb.org/t/p/w500/${card.poster_path}` " class="card-img-top" alt="">
            <div class="card-body">
                <h4 class="card-text fw-bold text-center">{{ card.title ? card.title : card.name }}</h4>
                <div class="hover-content">
                    <p class="card-text fs-2 fw-bold text-center p-2">{{ card.original_title ? card.original_title : card.original_name}}</p>
                    <p class="card-text text-center">Language: {{ card.original_language }}</p>
                    <p class="card-text text-center">Vote: {{ card.vote_count }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.my-card {
    position: relative;

    .hover-content {
        display: none;
        position: absolute;
        inset: 0;

        .card-text{
            
        }
    }

    &:hover {

        .hover-content {
            display: block;
            z-index: 10;
            backdrop-filter: grayscale(100%) blur(5px);
            width: 100%;
            height: 100%;
        }

    }

    .card-body {


        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0);



        &:hover {

            background-color: rgba(0, 0, 0, 0.521);



        }
    }
}



img {
    aspect-ratio: 1/1;
    object-fit: cover;

}
</style>