import Vue from 'vue';
import Vuex from 'vuex';

import { getUsers } from '../services'; 

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
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
        }
    },
    actions: {
        getUsers(store) {
            getUsers()
                .then((users) => {
                    store.commit('setUsers', users);
                })
        }
    }
});

export default store;
