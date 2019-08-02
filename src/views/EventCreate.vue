<template>
    <div>
        <h1>Create an Event, {{ user.name }}</h1>
        <p>This event was created by {{ user.name }} {{ user.id }}</p>
        <p> There are {{ categoryLength }} categories</p>
        <p>{{ getEventByID(2) }}</p>
        <ul>
            <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    // import {mapState} from 'vuex';

    export default {
        name    : "EventCreate",
        computed: {
            ...mapGetters(['getEventByID']),
            ...mapState(['user', 'categories'])
        }

            // <p>{{ getEvent(1) }}</p>
        // computed: {
        //     categoryLength() {
        //         return this.$store.getters.categoryLength;
        //
        //     },
        //     getEvent(){
        //         return this.$store.getters.getEventByID;
        //     },
        //     ...mapState(['user', 'categories'])
        // }

        // computed: {
        //     categoryLength() {
        //         return this.$store.categories.length;
        //
        //     },
        //     ...mapState(['user', 'categories'])
        // }

        // mapState(['user', 'categories'])

        //     mapState({
        //     user: 'user',
        //     categories: 'categories'
        // })

        //         <h1>Create an Event, {{ userName }}</h1>
        // <p>This event was created by {{ userName }} {{ userId }}</p>

        // mapState({
        //     userName  : state => state.user.name,
        //     userId    : state => state.user.id,
        //     categories: state => state.categories
        // })

        //     {
        //     userName() {
        //         return this.$store.state.user.name;
        //     },
        //     userId() {
        //         return this.$store.state.user.id;
        //     },
        //
        // }
    }
</script>

<style scoped>

</style>