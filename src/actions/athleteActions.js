import actionTypes from './types'

const competitionActions = {
	createNewAthlete(data) {
		return {
                  type: actionTypes.CREATE_NEW_ATHLETE,
                  data
		}
    },
    createNewAthleteSuccess(data) {
		return {
                  type: actionTypes.CREATE_NEW_ATHLETE_SUCCESS,
                  data
		}
    },
    createNewAthleteFailure(error) {
		return {
                  type: actionTypes.CREATE_NEW_ATHLETE_FAILURE,
                  error
		}
	},
}

export default competitionActions