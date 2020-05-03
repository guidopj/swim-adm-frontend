import actionTypes from './types'

const eventActions = {
    getEvents() {
	    return {
            type: actionTypes.GET_EVENTS,
	    }
    },
    getEventsSuccess(data) {
	    return {
            type: actionTypes.GET_EVENTS_SUCCESS,
            data
		}
    },
    getEventsFailure(error) {
	    return {
            type: actionTypes.GET_EVENTS_FAILURE,
            error
		}
    },
    createEvent() {
	    return {
            type: actionTypes.CREATE_EVENT,
	    }
    },
    createEventSuccess(data) {
	    return {
            type: actionTypes.CREATE_EVENT_SUCCESS,
            data
		}
    },
    createEventFailure(error) {
	    return {
            type: actionTypes.CREATE_EVENT_FAILURE,
            error
		}
    },
}

export default eventActions