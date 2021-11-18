import Vue from 'vue'
import Vuex from 'vuex'
import {axiosHarryInstance, } from "../api/api";
import {HARRY_CHARACTERS, HARRY_CHARACTERS_STUDENTS, HARRY_CHARACTERS_STAFF, HARRY_CHARACTERS_HOUSE } from "../api/routes";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navList: [
            {
                title: 'All characters',
                path: '/',
                img: null,
                id: 1,
                fetchPath:'HARRY_CHARACTERS',
            },
            {
                title: 'Hogwarts staff',
                path: '/',
                img: null,
                id: 2,
                fetchPath:'HARRY_CHARACTERS_STAFF',
            },
            {
                title: 'Hogwarts students',
                path: '/',
                img: null,
                id: 3,
                fetchPath:'HARRY_CHARACTERS_STUDENTS',
            },
            {
                title: 'Gryffindor',
                path: '/',
                img: 'https://i.ibb.co/Q8mCG6J/griffindor-logo.png',
                id: 4,
                fetchPath:'HARRY_CHARACTERS_HOUSE(gryffindor)',
            },
            {
                title: 'Hufflepuff',
                path: '/',
                img: 'https://i.ibb.co/XLrbDvT/Hufflepuff-logo.png',
                id: 5,
                fetchPath:'HARRY_CHARACTERS_HOUSE(hufflepuff)',
            },
            {
                title: 'Ravenclaw',
                path: '/',
                img: 'https://i.ibb.co/92B1vm1/Ravenclaw-logo.png',
                id: 6,
                fetchPath:'HARRY_CHARACTERS_HOUSE(ravenclaw)',
            },
            {
                title: 'Slytherin',
                path: '/',
                img: 'https://i.ibb.co/MgD0d4N/Slytherin-logo.png',
                id: 7,
                fetchPath:'HARRY_CHARACTERS_HOUSE(slytherin)',
            },
        ],
        harryArr: [],
        descriptionState: false,

    },
    getters:{
        GET_NAV_LIST(state){
            return state.navList
        },
        GET_HARRY_CHARACTERS(state) {
            return state.harryArr
        },
        SHOW_DESCRIPTION(state) {
            return state.descriptionState
        },

    },
    mutations: {
        SET_HARRY_ARR(state, data) {
            state.harryArr = data
        },
        SET_SHOW_DESCRIPTION(state, bool) {
            return this.state.descriptionState = bool
        },
    },
    actions: {
        fetchHarry(context) {
            return axiosHarryInstance.get(HARRY_CHARACTERS)
                .then( res => {
                    context.commit('SET_HARRY_ARR', res.data)
                })
                .catch(err => console.log(err))
        },
        fetchHarryStudents(context) {
            return axiosHarryInstance.get(HARRY_CHARACTERS_STUDENTS)
                .then( res => {
                    context.commit('SET_HARRY_ARR', res.data)
                })
                .catch(err => console.log(err))
        },
        fetchHarryStaff(context) {
            return axiosHarryInstance.get(HARRY_CHARACTERS_STAFF)
                .then( res => {
                    context.commit('SET_HARRY_ARR', res.data)
                })
                .catch(err => console.log(err))
        },
        fetchHarryHouse(context, house) {
            return axiosHarryInstance.get(HARRY_CHARACTERS_HOUSE(house))
                .then( res => {
                    context.commit('SET_HARRY_ARR', res.data)
                })
                .catch(err => console.log(err))
        },
        showCharDescription(context, payload) {
            context.commit('SET_SHOW_DESCRIPTION', payload)
        },
    },
    modules: {}
})
