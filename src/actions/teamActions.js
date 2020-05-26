import actionTypes from './types'

const teamActions = {
      getTeams() {
		return {
                  type: actionTypes.GET_TEAMS,
		}
      },
      getTeamsSuccess(data) {
		return {
                  type: actionTypes.GET_TEAMS_SUCCESS,
                  data
		}
      },
      getTeamsFailure(data) {
		return {
                  type: actionTypes.GET_TEAMS_FAILURE,
                  data
		}
      },
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
    createNewTeamFailure(error) {
		return {
            type: actionTypes.CREATE_NEW_TEAM_FAILURE,
            error
		}
	},
}

export default teamActions