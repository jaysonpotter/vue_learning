<template>
    <h1>Event {{ event.title }}</h1>
</template>

<script>
    import EventService from "../services/EventService.js";

    export default {
        name : "EventShow",
        props: ['id'],
        data(){
            return {
                event: {}
            }
        },
        created() {
            EventService.getEvent(this.id)
                .then(response => {
                    this.event = response.data
                })
                .catch(error => {
                    console.log('There was an error getting event ' + error.response);
                })
        }
    }
</script>

<style scoped>

</style>