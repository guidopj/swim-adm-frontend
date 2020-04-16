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
	createNewCompetition(data) {
		return {
			type: actionTypes.CREATE_NEW_COMPETITION,
			data,
		}
	},
	createNewCompetitionSuccess(payload) {
		return {
			type: actionTypes.CREATE_NEW_COMPETITION_SUCCESS,
			payload,
		}
	},
	createNewCompetitionFailure(error) {
		return {
			type: actionTypes.CREATE_NEW_COMPETITION_FAILURE,
			error,
		}
	},
}

export default competitionActions