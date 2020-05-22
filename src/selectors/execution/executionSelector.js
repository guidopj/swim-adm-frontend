import { createSelector } from 'reselect'

const competitionsData = state => state.competitions

export default createSelector(
	competitionsData,
	competitions => {
		return {
            events: competitions.events,
            eventsByName: competitions.events.map(event => event.meters + " " + event.style + " " + event.category_from_age + " - " + event.category_to_age + " " + event.genre),
			teams: competitions.teams,
			athletes: competitions.athletes,
			inscriptions: competitions.inscriptions,
		}
	}
)