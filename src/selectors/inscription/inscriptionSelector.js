import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	competitionsData,
	competitions => {
		return {
			competition_name: competitions.selectedCompetitionName,
            events: competitions.events,
			teams: competitions.teams,
			athletes: competitions.athletes,
			inscriptions: competitions.inscriptions,
		}
	}
)