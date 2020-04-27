import actionTypes from 'actions/types';
  import initialState from './initialState';

  const parseTeam = (teams) => {
    const teamsParsed = JSON.parse(teams)
    return teamsParsed.map(team => {
        team.fields["team_name_abbr"] = team.pk
        return team.fields
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
                teams: [],
                events: [],

            };
        case actionTypes.GET_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.data
            };
        case actionTypes.GET_COMPETITION_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                selectedCompetitionName: action.name, 
                teams: parseTeam(action.data.teams),
                events: [],
                athletes: action.data.athletes,
            };
        case actionTypes.GET_ATHLETES_SUCCESS:
            return {
                ...state,
                athletes: action.data,
            }

        default:
            return state;
    }
}

export default competitionsReducer