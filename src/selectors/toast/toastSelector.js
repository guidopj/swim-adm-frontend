import { createSelector } from 'reselect'

const snackbarsData = state => state.snackbars

export default createSelector(
	snackbarsData,
	snackbarsData => {
		return {
			snackbars: snackbarsData.snackbars
		}
	}
)