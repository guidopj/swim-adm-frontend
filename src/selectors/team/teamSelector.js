import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	competitionsData,
	competitions => {
		return {
			teams: competitions.teams && competitions.teams.map(team => team.fields),
			competition_name: competitions.selectedCompetitionName
		}
	}
)