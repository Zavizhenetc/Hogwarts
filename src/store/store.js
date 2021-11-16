import Vue from 'vue'
import Vuex from 'vuex'
import {axiosHarryInstance, } from "../api/api";
import {HARRY_CHARACTERS} from "../api/routes";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navList: [
            {
                title: 'Home',
                path: '/',
                img: null,
                id: 1,
            },
            {
                title: 'Hogwarts staff',
                path: '/',
                img: null,
                id: 2,
            },
            {
                title: 'Hogwarts students',
                path: '/',
                img: null,
                id: 3,
            },
            {
                title: 'Gryffindor',
                path: '/',
                img: 'https://i.ibb.co/Q8mCG6J/griffindor-logo.png',
                id: 4,
            },
            {
                title: 'Hufflepuff',
                path: '/',
                img: 'https://i.ibb.co/XLrbDvT/Hufflepuff-logo.png',
                id: 5,
            },
            {
                title: 'Ravenclaw',
                path: '/',
                img: 'https://i.ibb.co/92B1vm1/Ravenclaw-logo.png',
                id: 6,
            },
            {
                title: 'Slytherin',
                path: '/',
                img: 'https://i.ibb.co/MgD0d4N/Slytherin-logo.png',
                id: 7,
            },
        ],
        harryArr: [],
    },
    getters:{
        GET_NAV_LIST(state){
            return state.navList
        },
        GET_HARRY_CHARACTERS(state) {
            return state.harryArr
        }

    },
    mutations: {
        SET_HARRY_ARR(state, data) {
            state.harryArr = data
        }
    },
    actions: {
        fetchHarry(context) {
            return axiosHarryInstance.get(HARRY_CHARACTERS)
                .then( res => {
                    context.commit('SET_HARRY_ARR', res.data)
                })
                .catch(err => console.log(err))
        }
    },
    modules: {}
})
