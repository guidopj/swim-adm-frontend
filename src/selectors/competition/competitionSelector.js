import { createSelector } from 'reselect'

const competitionsData = state => state.competitions.competitions

export default createSelector(
	competitionsData,
	competitions => {	
		return {
			competitionNames: competitions.map(c => c.competition_name)
		}
	}
)