import Vue from 'vue';
import VueRouter from 'vue-router';

import UsersList from './screens/UsersList.vue';
import UserDetails from './screens/UserDetails.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/users',
            name: 'users',
            component: UsersList
        },
        {
            path: '/user/:id',
            name: 'user-details',
            component: UserDetails
        },
        {
            path: '*',
            redirect: '/users'
        }
    ]
});

export default router;
