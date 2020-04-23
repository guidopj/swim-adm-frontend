import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	competitionsData,
	competitions => {
		
		return {
			teams: competitions.selectedCompetition.teams,
			competition_name: competitions.selectedCompetition.competition_name
		}
	}
)