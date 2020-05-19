import actionTypes from 'actions/types';
  import initialState from './initialState';

  const parseObj = (obj, pk) => {
    const objParsed = JSON.parse(obj)
    return objParsed.map(obj => {
        obj.fields[pk] = obj.pk
        return obj.fields
    }
    )
  }
  
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
            return {
                ...state,
                events: [...state.events, action.data]
            }
        case actionTypes.ADD_INSCRIPTION:
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