import actionTypes from './types'

const competitionActions = {
	getExistingCompetitions() {
		return {
			type: actionTypes.GET_EXISTING_COMPETITIONS,
		}
	},
}

export default competitionActions