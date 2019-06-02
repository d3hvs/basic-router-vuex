<template>
    <v-card
        class="user-item"
        @click="goToUser(user.id)"
    >
        <v-card-title>
            <slot name="child" />
        </v-card-title>
    </v-card>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'UserItem',
    props: {
        user: { type: Object, required: true }
    },
    methods: {
        ...mapMutations(['setSelectedUser']),
        goToUser() {
            this.$router.push(`/user/${this.user.id}`)
        }
    },
    computed: {
        ...mapState(['selectedUser'])
    }
}
</script>


<style scoped>
.user-item {
    border: solid 2px gray;
}

.user-item:hover {
    cursor: pointer;
}
</style>

