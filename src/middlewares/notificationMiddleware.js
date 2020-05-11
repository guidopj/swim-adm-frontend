import actionTypes from 'actions/types'
import { showSnack } from 'react-redux-snackbar';

const notificationMiddleware = store => next => action => {
  if (action.type === actionTypes.CREATE_EVENT_SUCCESS) {
    store.dispatch(showSnack('myUniqueId1', {
      label: 'Yay, that actually worked!',
      timeout: 7000,
      button: { label: 'OK, GOT IT' },
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      }
  }));
  }
  else if(action.type === actionTypes.CREATE_EVENT_FAILURE){
    store.dispatch(showSnack('myUniqueId2', {
      label: 'Yay!',
      timeout: 2000,
      button: { label: 'OK, GOT IT', color: 'red' },
      theming: {
        buttonColor : 'red',
      }
  }));
  }
  return next(action);
};

export default notificationMiddleware