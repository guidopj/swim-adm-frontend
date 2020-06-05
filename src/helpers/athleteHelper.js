import moment from 'moment'
import _ from 'lodash';

import constants from 'constants.js'

const athleteAge = athlete => moment().diff(moment(athlete.date_of_birth), 'years')

const getAthletesFrom = (athletes, team) => {      
    return athletes.filter(athlete => athlete.team === team)
}
const filterPosibleAges = ageFrom => {
    return _.filter(constants.AGES, age => {return age > ageFrom})
}

const ageBetween = (athlete, minAge, maxAge) => {
    const age = athleteAge(athlete)
    return age >= minAge && age <= maxAge
}

const athletesFromDni = (athletes, dni) => {
    athletes.find(athlete => athlete.dni === dni)
}

export {
    athleteAge,
    getAthletesFrom,
    filterPosibleAges,
    ageBetween,
    athletesFromDni,
}