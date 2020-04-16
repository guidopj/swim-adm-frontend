import actionTypes from './types'

const competitionActions = {
	getExistingCompetitions() {
		return {
			type: actionTypes.GET_EXISTING_COMPETITIONS,
		}
	},
	getExistingCompetitionsSuccess(payload) {
		return {
			type: actionTypes.GET_EXISTING_COMPETITIONS_SUCCESS,
			payload,
		}
	},
	getExistingCompetitionsFailed(error) {
		return {
			type: actionTypes.GET_EXISTING_COMPETITIONS_FAILURE,
			error,
		}
	},
}

export default competitionActions