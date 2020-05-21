
import eventSelector from 'selectors/event/eventSelector'

describe('Event selector', () => {

	it('should return default information', () => {
		const mockState = {
			competitions: {
                selectedCompetitionName: "NEW COMPETITION",
			    events: [],
			},
        }
        
        const selectorResult = {
            competition_name: "NEW COMPETITION" ,
            events: [],
        }

		const events = eventSelector(mockState)
		expect(events).toEqual(selectorResult)
    })
})