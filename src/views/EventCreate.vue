<template>
    <div>
        <h1>Create an Event</h1>
        <form @submit.prevent="createEvent">
            <label>Select a category</label>
            <select v-model="event.category">
                <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>

            <h3>Name & describe your event</h3>
            <div class="field">
                <label>Title</label>
                <input v-model="event.title" type="text" placeholder="Add an event title"/>
            </div>

            <div class="field">
                <label>Description</label>
                <input v-model="event.description" type="text" placeholder="Add a description"/>
            </div>

            <h3>Where is your event?</h3>
            <div class="field">
                <label>Location</label>
                <input v-model="event.location" type="text" placeholder="Add a location"/>
            </div>

            <h3>When is your event?</h3>

            <div class="field">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date"/>
            </div>

            <div class="field">
                <label>Select a time</label>
                <select v-model="event.time">
                    <option v-for="time in times" :key="time">{{ time }}</option>
                </select>
            </div>

            <input type="submit" class="button -fill-gradient" value="Submit"/>
        </form>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    // import {mapState, mapGetters} from 'vuex';

    // import {mapState} from 'vuex';

    export default {
        // name    : "EventCreate",
        // computed: {
        //     ...mapGetters(['getEventByID']),
        //     ...mapState(['user', 'categories'])
        // },
        components: {
            Datepicker
        },
        data() {
            const times = [];

            for (let i = 1; i <= 24; i++) {
                times.push(i + ':00')
            }
            return {
                times,
                categories: this.$store.state.categories,
                event     : this.createFreshEventObject()
            }
        },

        methods: {
            createEvent() {
                this.$store
                    .dispatch('createEvent', this.event)
                    .then(() => {
                        this.$router.push({
                            name: 'event-show',
                            params: {
                                id: this.event.id
                            }
                        });
                        this.event = this.createFreshEventObject();
                    })
                    .catch(() => {
                        console.log('there was a problem creating your event');
                    });
            },
            createFreshEventObject() {
                const user = this.$store.state.user.user;
                const id = Math.floor(Math.random() * 10000000);

                return {
                    id         : id,
                    user       : user,
                    category   : '',
                    organizer  : user,
                    title      : '',
                    description: '',
                    location   : '',
                    date       : '',
                    time       : '',
                    attendees  : []
                }
            }
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
    .field {
        margin-bottom: 24px;
    }
</style>