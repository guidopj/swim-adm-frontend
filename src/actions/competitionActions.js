import actionTypes from './types'

const competitionActions = {
	getCompetition(competitionName){
		return {
			type: actionTypes.GET_COMPETITION,
			competitionName,
		}
	},
	getCompetitionSuccess(name, data){
		return {
			type: actionTypes.GET_COMPETITION_SUCCESS,
			name,
			data,
		}
	},
	getCompetitionFailure(error){
		return {
			type: actionTypes.GET_COMPETITION_FAILURE,
			error,
		}
	},
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
	getExistingCompetitionsFailure(error) {
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
	moveToCreation(competitionName) {
		return {
			type: actionTypes.MOVE_TO_CREATION,
			competitionName
		}
	}
}

export default competitionActions