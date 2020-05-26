import actionTypes from './types'

const toastActions = {
    closeSnackbar(id) {
    console.log(id)
		return {
            type: actionTypes.CLOSE_SNACKBAR,
            id
		}
    },
    addSnackbar(data) {
		  return {
        type: actionTypes.ADD_SNACKBAR,
        data,
		  }
    }
}

export default toastActions