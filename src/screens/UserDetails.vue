<template>
    <div class="user-details">
        User Details
        <pre>{{ selectedUser }}</pre>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'UserDetails',
    computed: {
        ...mapState(['selectedUser'])
    }
}
</script>

