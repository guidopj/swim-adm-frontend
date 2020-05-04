import { createSelector } from 'reselect'

const competitionData = state => state.competitions

export default createSelector(
	competitionData,
	competition => {
		
		return {
			athletes: competition.athletes,
			teams: competition.teams,
		}
	}
)