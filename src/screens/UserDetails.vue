<template>
    <div class="user-details">
        User Details
        <strong style="font-size: 2rem" v-if="loadingDetails">Loading ...</strong> <br />
        <pre v-if="!loadingDetails">{{ selectedUser }}</pre>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'UserDetails',
    computed: {
        ...mapState(['loadingDetails', 'selectedUser'])
    },
    methods: {
        ...mapActions(['getUserById'])
    },
    mounted() {
        this.getUserById(this.$route.params.id);
    }
}
</script>

