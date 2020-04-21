import { createSelector } from 'reselect'

const teamsData = state => state.competitions.teams

export default createSelector(
	teamsData,
	teams => {
		
		return {
			teams: teams
		}
	}
)