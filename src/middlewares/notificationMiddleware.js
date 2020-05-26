import actionTypes from 'actions/types'
import toastActions from 'actions/toastActions'

const notificationMiddleware = store => next => action => {
  if (action.type === actionTypes.CREATE_EVENT_SUCCESS) {
    store.dispatch(toastActions.addSnackbar({
      type: "success",
      message: 'Event created successfully'
    }));
  }
  else if(action.type === actionTypes.CREATE_EVENT_FAILURE){
    store.dispatch(toastActions.addSnackbar({
      type: "error",
      message: 'Could not create the event'
    }));
  }
  else if(action.type === actionTypes.CREATE_NEW_TEAM_FAILURE){
    store.dispatch(toastActions.addSnackbar({
      type: "error",
      message: 'Could not create the event'
    }));
  }
  else if(action.type === actionTypes.CREATE_NEW_TEAM_SUCCESS){
    store.dispatch(toastActions.addSnackbar({
      type: "success",
      message: 'Team created Successfully'
    }));
  }
  return next(action);
};

export default notificationMiddleware