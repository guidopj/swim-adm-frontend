
import inscriptionSelector from 'selectors/inscription/inscriptionSelector'

describe('Inscription selector', () => {

	it('should return default information', () => {
		const mockState = {
			competitions: {
                selectedCompetitionName: "NEW COMPETITION",
                events: [],
                teams: [],
                athletes: [],
                inscriptions: [],
			},
        }
        
        const selectorResult = {
            competition_name: "NEW COMPETITION" ,
            events: [],
            teams: [],
            athletes: [],
            inscriptions: [],
        }

		const inscriptions = inscriptionSelector(mockState)
		expect(inscriptions).toEqual(selectorResult)
    })
})