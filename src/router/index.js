import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import LoginForm from '../components/LoginForm.vue';
import SignUp from '../components/SignUp.vue';
import MovieDetail from '../components/MovieDetail.vue';
import FilmSearch from '../components/FilmSearch.vue';
import PopularFilm from '../components/PopularFilm.vue';
import ActionFilter from '../components/ActionFilter.vue';
import AdventureFilter from '../components/AdventureFilter.vue';
import ComedyFilter from '../components/ComedyFilter.vue';
import HorrorFilter from '../components/HorrorFilter.vue';
import FeatureFilm from '../components/FeatureFilm.vue';
import TvMovies from '../components/TvMovies.vue';
import PageNotFound from '../components/PageNotFound.vue';
// import { getAuth } from 'firebase/auth'

const routes = [{
        path: '/signup',
        component: SignUp
    },
    {
        path: '/',
        component: LoginForm,

    },
    {
        path: '/landingpage',
        component: LandingPage,


    },
    {
        path: '/movie/:id',
        component: MovieDetail
    },
    {
        path: '/search',
        component: FilmSearch,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/popularity',
        component: PopularFilm,
    },
    {
        path: '/actionfilm',
        component: ActionFilter
    },
    {
        path: '/adventurefilm',
        component: AdventureFilter
    },
    {
        path: '/comedyfilm',
        component: ComedyFilter
    },
    {
        path: '/horrorfilm',
        component: HorrorFilter
    },
    {
        path: '/featurefilm',
        component: FeatureFilm,
    },
    {
        path: '/tvmovies',
        component: TvMovies,
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// router.beforeEach((to, _from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (getAuth().currentUser) {
//             next();
//         } else {
//             next("/");
//         }
//     } else {
//         next();
//     }
// });

export default router