import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        plugins: [createPersistedState()],
        heroList: [],
        likeList: [],
        current: 1,
        imgIndex: 1,
        total: 0,
    },
    mutations: {
        setHeroList(state, heroes) {
            state.heroList = heroes
        },
        getTotal(state, val) {
            state.total = val
        },
    },
    actions: {},
    modules: {}
})