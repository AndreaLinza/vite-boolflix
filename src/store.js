import axios from "axios";
import { reactive } from "vue";

export const store = reactive({


    movieList: [],
    search: ""

});

// export function movieList(url) {

//     store.movieList = []

//     axios.get(url, {
//         params: {
//             api_key: "3afb762abea704ef5356e76f574d5431",
//             query: store.search
//         }
//     }).then((response) => {


//         store.movieList = response.data.results;
//         store.search = ""
//     })
// };

export function movieList(urls) {
    store.movieList = [];

    const requests = urls.map((url) => axios.get(url, {
        params: {
            api_key: "3afb762abea704ef5356e76f574d5431",
            query: store.search
        }
    }));
    axios.all(requests).then((responses) => {
        responses.forEach((response) => {
            store.movieList.push(...response.data.results)
            store.search = "";
        })
    })
};

export function starsVote(z) {

    const star = parseFloat(z)
    const ratings = star /2


    const starsTot = 5


    const starPercentage = (ratings / starsTot) * 100;

    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    
    return starPercentageRounded
}





// Chiave API per TheMoviedb
//3afb762abea704ef5356e76f574d5431