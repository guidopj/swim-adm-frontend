
import competitionSelector from 'selectors/competition/competitionSelector'

describe('Competition selector', () => {

	it('should return default information', () => {
		const mockState = {
			competitions: {
                competitions: [
                    {
                        competition_name: 'comp1',
                        club_name: 'CLUB NAME',
                    },
                    {
                        competition_name: 'comp2',
                        club_name: 'CLUB NAME',
                    },
                    {
                        competition_name: 'comp3',
                        club_name: 'CLUB NAME',
                    },
                ]
			},
        }
        
        const selectorResult = {competitionNames:  ["comp1", "comp2", "comp3"]}

		const competitions = competitionSelector(mockState)
		expect(competitions).toEqual(selectorResult)
    })
})