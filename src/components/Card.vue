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
    <div class="card h-100">
        <img :src="card.poster_path === null ? `video-movie-placeholder-image-grey.png` : `http://image.tmdb.org/t/p/w500/${card.poster_path}`"
            class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-text fw-bold text-center">{{ card.title ? card.title : card.name }}</h4>
            <div class="hover-content">
                <img class="b-logo" src="../assets/img/B-Card.png" alt="B">
                <div class="hover-text">
                    <p class="card-text fs-4 fw-bold text-center">{{ card.original_title ? card.original_title :
                        card.original_name }}</p>
                    <p class="card-text text-center">Language: {{ card.original_language }}</p>
                    <p class="card-text text-center">Vote: {{ card.vote_count }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
    position: relative;

    .hover-content {
        display: none;


        .b-logo {
            position: absolute;
            padding: 1rem;
        }

        .hover-text {
            padding: 1rem;
            margin-top: 4rem;
        }
    }

    &:hover {

        .hover-content {
            display: block;
            position: absolute;
            inset: 0;
            backdrop-filter: grayscale(100%) blur(5px);
            background-color: rgba(0, 0, 0, 0.61);
            width: 100%;
            height: 100%;
        }

    }

    .card-body {


        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0);



        &:hover {

            background-color: rgba(0, 0, 0);



        }
    }
}



img {
    aspect-ratio: 1/1;
    object-fit: cover;

}
</style>