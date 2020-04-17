import actionTypes from './types'

const competitionActions = {
	createNewTeam(data) {
		return {
            type: actionTypes.CREATE_NEW_TEAM,
            data
		}
    },
    createNewTeamSuccess(data) {
		return {
            type: actionTypes.CREATE_NEW_TEAM_SUCCESS,
            data
		}
    },
    createNewTeamFailure(data) {
		return {
            type: actionTypes.CREATE_NEW_TEAM_FAILURE,
            data
		}
	},
}

export default competitionActions