import _ from 'lodash';
const constants = {
    STYLES: ["FREESTYLE", "BACKSTROKE", "BREASTSTROKE", "BUTTERFLY", "MEDLEY"],
    METERS: [25,50,100,200,400,800,1500],
    GENRE: ["MALE", "FEMALE"],
    LANES: _.range(5, 11),
    AGES: _.range(7, 80),
    AVAILABLE_POOL_METERS: [25,50],
    EVENT_INSCRIPTION_TABLE_HEADERS: ["SELECT", "NRO", "METERS", "STYLE", "MIN AGE", "MAX AGE", "GENRE"],
    EVENT_TABLE_HEADERS: ["NRO", "METERS", "STYLE", "MIN AGE", "MAX AGE", "GENRE"],
    INSCRIPTION_TABLE_HEADERS: ["INSCRIBE", "DNI", "NAME", "SURNAME", "AGE"],
    ATHLETE_TABLE_HEADERS: ["DNI", "NAME", "SURNAME", "AGE", "TEAM", "GENRE"],
}

export default constants