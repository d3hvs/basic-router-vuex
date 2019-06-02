<template>
    <div class="users-list">
        <user-item
            v-for="user in users"
            :key="user.id"
            :user="user"
        >
            <div slot="child">
                {{ user.name }}
            </div>
        </user-item>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapState, mapMutations } from 'vuex';
import UserItem from '../components/UserItem.vue';

export default {
    name: 'UsersList',
    components: {
        UserItem
    },
    computed: {
        ...mapState(['users'])
    },
    methods: {
        ...mapActions(['getUsers']),
        ...mapMutations(['clearSelectedUser'])
    },
    mounted() {
        this.getUsers();
        this.clearSelectedUser();
    }
}
</script>

<style scoped>
.users-list {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>


