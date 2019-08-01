<template>
    <router-link :to="{name: 'event-show', params: { id: event.id }}">
    <div class="event-card -shadow">
        <span class="eyebrow">@{{ event.time}} on {{ event.date }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </div>
    </router-link>
</template>

<script>
    import BaseIcon from "./BaseIcon";
    export default {
        name: "EventCard",
        components: {BaseIcon},
        props: {
            event: Object
        }
    }
</script>

<style lang="scss" scoped>
    h4 {
        color: green;
    }
</style>