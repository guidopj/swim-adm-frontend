
import athleteSelector from 'selectors/athlete/athleteSelector'

describe('Athlete selector', () => {

	it('should return default information', () => {
		const mockState = {
			competitions: {
                athletes: [],
                teams: [],
			},
        }
        
        const selectorResult = {
                athletes: [],
                teams: [],
		}

		const athletes = athleteSelector(mockState)
		expect(athletes).toEqual(selectorResult)
    })
})