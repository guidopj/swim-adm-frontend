import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	[ competitionsData ],
	competition => ({
		name: competition.name,
	})
)