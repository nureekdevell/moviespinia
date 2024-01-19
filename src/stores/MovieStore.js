import {defineStore} from "pinia";
export const useMovieStore = defineStore('movieStore',{
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: 'Spider-Man',
                overview: 'lorem itsp saving dev tools dev qwert dasing',
                poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2F4ES6P4EEO-2021-spiderman-no-way-home-poster-artwork-spiderman-canvas-wall-art-super-hero-spider-man-poster-art-print-paitings-spiderman-movie-poster-wall-decor&psig=AOvVaw2OTBzjMx1PNn5VbrRbqPcP&ust=1705778374020000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjWouOV6oMDFQAAAAAdAAAAABAD',
                release_date: '2019-20-1',
                isWatched: false,
            },
            {
                id: 2,
                original_title: 'Batman',
                overview: 'lorem sss its saving dev tools dev qwerty basing',
                poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthedirect.com%2Farticle%2Fthe-batman-2-cast-characters-sequel-appear&psig=AOvVaw15AcDBLVfc7atzt98J3Wvs&ust=1705778752937000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCfiZmX6oMDFQAAAAAdAAAAABAD',
                release_date: '2019-21-1',
                isWatched: true,
            }
        ]
    })
})