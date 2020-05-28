import { createSelector } from 'reselect'

const competitionData = state => state.competitions

const athleteSelector = createSelector(
	(competitionData),
	(competition) => {
		return {
			athletes: competition.athletes,
			teams: competition.teams, 
		}
	}
)

export { athleteSelector }