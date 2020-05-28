
import { athleteSelector } from 'selectors/athlete/athleteSelector'

describe('Athlete selector', () => {

	it('should return default information', () => {
		const mockState = {
		        competitions: {
                                athletes: [],
                                teams: [],
		        }        ,
                }
        
                const selectorResult = {
                        athletes: [],
                        teams: [],
		}

		const athletes = athleteSelector(mockState)
		expect(athletes).toEqual(selectorResult)
        })
})

/* describe('Athlete Filtered', () => {

	it('should return athetes filtered by UNQUI', () => {
		const mockState = {
		        competitions: {
                                athletes: [
                                        {
                                                dni:"111",
                                                name:"athlete 1",
                                                surname:"dsa",
                                                date_of_birth:"2020-05-26",
                                                genre:"MALE",
                                                team:"ut",
                                        },
                                        {
                                                dni:"111344",
                                                name:"athlete 1",
                                                surname:"dsa",
                                                date_of_birth:"2020-05-26",
                                                genre:"MALE",
                                                team:"utaaaaaaaaa",
                                        },
                                        {
                                                dni:"1111",
                                                name:"athlete 2",
                                                surname:"dsa",
                                                date_of_birth:"2020-05-26",
                                                genre:"FEMALE",
                                                team:"UNQUI",
                                        },
                                ],
                                teams: [],
		        }        ,
                }
        
                const selectorResult = [
                        {
                                dni:"1111",
                                name:"athlete 2",
                                surname:"dsa",
                                date_of_birth:"2020-05-26",
                                genre:"FEMALE",
                                team:"UNQUI",
                        }
                ]
                
                const athletes = getAthletesFrom(mockState)("UNQUI")
		expect(athletes).toEqual(selectorResult)
        })
}) */