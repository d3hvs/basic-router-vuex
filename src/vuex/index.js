import Vue from 'vue';
import Vuex from 'vuex';

import { getUsers, getUserById } from '../services'; 

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loadingDetails: false,
        selectedUser: {},
        users: []
    },
    mutations: {
        clearSelectedUser(state) {
            state.selectedUser = {};
        },
        setSelectedUser(state, user) {
            state.selectedUser = user;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setLoadingDetails(state, isLoading) {
            state.loadingDetails = isLoading;
        }
    },
    actions: {
        getUsers(store) {
            getUsers()
                .then((users) => {
                    store.commit('setUsers', users);
                })
        },
        getUserById(store, id) {
            store.commit('setLoadingDetails', true)
            getUserById(id)
                .then((user) => {
                    store.commit('setSelectedUser', user);
                    store.commit('setLoadingDetails', false)
                });
        }
    }
});

export default store;
