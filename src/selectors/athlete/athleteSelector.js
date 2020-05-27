import { createSelector } from 'reselect'

const competitionData = state => state.competitions

export default createSelector(
	competitionData,
	competition => {
		return {
			athletes: competition.athletes,
			teams: competition.teams,
			getAthletesFrom: team => competition.athletes.filter(athlete => athlete.team === team)
		}
	}
)