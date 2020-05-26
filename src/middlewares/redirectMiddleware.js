import actionTypes from 'actions/types'
import { push } from "connected-react-router";

const redirectMiddleware = store => next => action => {
  if (action.type === actionTypes.GET_COMPETITION_SUCCESS) {
    store.dispatch(push(
      {
        pathname: "/teams",
        state: { competitionName: action.name }
      }
    ));
  }
  if(action.type === actionTypes.MOVE_TO_CREATION) {
    store.dispatch(push(
      {
        pathname: "/create",
        state: { competitionName: action.competitionName }
      }
    ));
  }
  if(action.type === actionTypes.CREATE_NEW_COMPETITION_SUCCESS) {
    store.dispatch(push(
      {
        pathname: "/teams",
        state: { competition_name: action.competitionName }
      }
    ));
  }
  return next(action);
};

export default redirectMiddleware