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
  return next(action);
};

export default redirectMiddleware