import actionTypes from './types'

const athleteActions = {
  getAthletes() {
		return {
      type: actionTypes.GET_ATHLETES,
		}
  },
  getAthletesSuccess(data) {
		return {
      type: actionTypes.GET_ATHLETES_SUCCESS,
      data
		}
  },
  getAthletesFailure() {
		return {
      type: actionTypes.GET_ATHLETES_FAILURE,
		}
  },
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

export default athleteActions