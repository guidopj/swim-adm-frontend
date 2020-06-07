import actionTypes from './types'

const homeActions = {
    moveToEvents() {
	    return {
            type: actionTypes.MOVE_TO_EVENTS,
	    }
    },
    moveToTeams() {
        return {
            type: actionTypes.MOVE_TO_TEAMS,
	    }
    },
    moveToInscriptions() {
        return {
            type: actionTypes.MOVE_TO_INSCRIPTIONS,
	    }
    },
    moveToAthletes() {
        return {
            type: actionTypes.MOVE_TO_ATHLETES,
	    }
    },
    moveToRunCompetition() {
        return {
            type: actionTypes.MOVE_TO_RUN_COMPETITION,
	    }
    }
}

export default homeActions