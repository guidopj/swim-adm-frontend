import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	competitionsData,
	competitions => {
		return {
			teams: competitions.teams,
			competition_name: competitions.selectedCompetitionName
		}
	}
)