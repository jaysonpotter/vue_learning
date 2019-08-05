import EventService from "@/services/EventService.js";

// makes sure that all mutations, actions, and getters will be namespaced under 'event'
export const namespaced = true;

export const state = {
    events     : [],
    eventsTotal: 0,
    event      : {}
};

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_EVENTS_TOTAL(state, total) {
        state.eventsTotal = total;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }

};

export const actions = {
    createEvent({commit, dispatch}, event) {
        return EventService.postEvent(event)
            .then(() => {
                commit('ADD_EVENT', event);

                const notification = {
                    type: 'success',
                    message: 'Event has been created'
                };
                // root true allows getting into the global $store > notification > add
                dispatch('notification/add', notification, {root: true});
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating event: ' + error.message
                };
                // root true allows getting into the global $store > notification > add
                dispatch('notification/add', notification, {root: true});
                throw error;
            });
    },
    fetchEvents({commit, dispatch}, {perPage, page}) {
        EventService.getEvents(perPage, page)
            .then(response => {
                //console.log('total events are ' + response.headers['x-total-count']);
                commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
                commit('SET_EVENTS', response.data);
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + error.message
                };
                // root true allows getting into the global $store > notification > add
                dispatch('notification/add', notification, {root: true});
            });
    },
    fetchEvent({commit, getters, dispatch}, id) {
        var event = getters.getEventByID(id);

        if (event) {
            commit('SET_EVENT', event);
        } else {
            EventService.getEvent(id)
                .then(response => {
                    commit('SET_EVENT', response.data);
                })
                .catch(error => {
                    const notification = {
                        type: 'error',
                        message: 'There was a problem fetching the event: ' + error.message
                    };
                    // root true allows getting into the global $store > notification > add
                    dispatch('notification/add', notification, {root: true});
                })
        }
    }

};

export const getters = {
    // categoryLength  : state => {
    //     return state.categories.length;
    // },
    // doneTodos       : state => {
    //     return state.todos.filter(todo => todo.done);
    // },
    // activeTodosCount: (state) => {
    //     return state.todos.filter(todo => !todo.done);
    // },
    getEventByID    : state => id => {
        return state.events.find(event => event.id === id);
    }

    // activeTodosCount: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length;
    // }

};