<script>
import LangFlag from 'vue-lang-code-flags';
import {starsVote} from "../store";

export default {
    components: {
        LangFlag,
    },

    props: {
        card: {
            type: Object,
            required: true,
        }
    },

    methods:{
        starsVote
    }

}

</script>


<template>
    <div class="card h-100">
        <img :src="card.poster_path === null ? `video-movie-placeholder-image-grey.png` : card.poster_path === undefined ? `video-movie-placeholder-image-grey.png` : `http://image.tmdb.org/t/p/w500/${card.poster_path}`"
            class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-text fw-bold text-center">{{ card.title ? card.title : card.name }}</h4>
            <div class="hover-content">
                <img class="b-logo" src="../assets/img/B-Card.png" alt="B">
                <div class="hover-text">
                    <p class="card-text fs-4 fw-bold text-center">
                        {{ card.original_title ? card.original_title : card.original_name }}</p>
                    <p class="card-text text-center">Language: <lang-flag class="flag-w" :iso="card.original_language" />
                    </p>

                    <p class="card-text text-center">Vote:
                        <div class="stars-outer">
                            <div class="stars-inner" :style="`width:${starsVote(card.vote_average)};`"></div>
                        </div>
                    </p>
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


            .stars-outer {
                display: inline-block;
                position: relative;
                font-family: FontAwesome;
            }

            .stars-outer::before {
                content: "\f006 \f006 \f006 \f006 \f006";
            }

            .stars-inner {
                position: absolute;
                top: 0;
                left: 0;
                white-space: nowrap;
                overflow: hidden;
                width: 0;
            }

            .stars-inner::before {
                content: "\f005 \f005 \f005 \f005 \f005";
                color: #f8ce0b;
            }

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