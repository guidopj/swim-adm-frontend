
import eventSelector from 'selectors/team/teamSelector'

describe('Events selector', () => {

	it('should return default information', () => {
		const mockState = {
			competitions: {
                selectedCompetitionName: "NEW COMPETITION",
                teams: [],
			},
        }
        
        const selectorResult = {
            competition_name: "NEW COMPETITION" ,
            teams: [],
        }

		const teams = eventSelector(mockState)
		expect(teams).toEqual(selectorResult)
    })
})