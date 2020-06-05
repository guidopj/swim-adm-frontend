import { ageBetween } from './athleteHelper.js'

const getEventsFor = (events, athlete) => {
    return events.filter(event => event.genre === athlete.genre && ageBetween(athlete, event.category_from_age, event.category_to_age ))
}

export {
    getEventsFor,
}