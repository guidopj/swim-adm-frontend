import actionTypes from 'actions/types';
import initialState from './initialState';
  
const competitionsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_EXISTING_COMPETITIONS_SUCCESS:
            return {
                ...state,
                competitions: action.payload,
            };
        case actionTypes.CREATE_NEW_COMPETITION_SUCCESS:
            return {
                ...state,
                competitions: [...state.competitions, action.payload],
                selectedCompetitionName: action.payload.competition_name,
                teams: [],
                events: [],
                inscriptions: [],

            };
        case actionTypes.GET_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.data
            };
        case actionTypes.GET_COMPETITION_SUCCESS:
            return {
                ...state,
                selectedCompetitionName: action.name, 
                teams: action.data.teams,
                events: action.data.events,
                athletes: action.data.athletes,
                inscriptions: action.data.inscriptions,
            };
        case actionTypes.GET_ATHLETES_SUCCESS:
            return {
                ...state,
                athletes: action.data,
            }
        case actionTypes.CREATE_NEW_ATHLETE_SUCCESS:
            return {
                ...state,
                athletes: [...state.athletes, action.data]
            }
        case actionTypes.CREATE_EVENT_SUCCESS:
            const eventNro = state.events.length + 1
            return {
                ...state,
                events: [...state.events, { eventNro: eventNro, ...action.data }]
            }
        case actionTypes.CREATE_NEW_TEAM_SUCCESS:
            return {
                ...state,
                events: [...state.teams, action.data]
            }
        case actionTypes.ADD_INSCRIPTION:
            if(Object.keys(state.inscriptions).includes(action.inscription.event)){
                const newInscriptions = Object.assign([...state.inscriptions], { [action.inscription.event]: [...state.inscriptions[action.inscription.event], action.inscription.athlete] })
                console.log(newInscriptions)
            } else {
                const newInscriptions = Object.assign([...state.inscriptions], { [action.inscription.event]: [action.inscription.athlete] })
                console.log(newInscriptions)
            }
            return {
                ...state,
                inscriptions: [...state.inscriptions, action.inscription]
            }
        case actionTypes.DELETE_INSCRIPTION:
            return {
                ...state,
                inscriptions: state.inscriptions.filter(inscription => inscription.athleteDni && inscription.athleteDni !== action.inscription.athleteDni && inscription.eventNro !== action.inscription.eventNro)
            }

        default:
            return state;
    }
}

export default competitionsReducer