<template>
    <div id="nav">
        <router-link to="/">Real World Events</router-link> |
        <nav>
            <router-link :to="{name: 'event-list'}">Event List</router-link> |
            <router-link :to="{name: 'event-create'}">Event Create</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>