<template>
    <div class="header">
        <v-card>
            <v-card-title
                primary-title
                @click="goTo('/users')"
            >
                Users
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(path) {
            this.$router.replace(path);
        }
    }
}
</script>


<style scoped>
    .header .v-card {
        align-items: center;
        background-color: #3FB984;
        box-sizing: border-box;
        color: #FFF;
        display: flex;
        font-size: 1.4rem;
        height: 100%;
    }

    .header .v-card__title {
        cursor: pointer;
    }
</style>

