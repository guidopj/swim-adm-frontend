import React, { useEffect } from 'react';
import toastSelector from 'selectors/toast/toastSelector'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack';
import { bindActionCreators } from 'redux'

import toastActions from 'actions/toastActions'

const ToastContainer = props => {

    const { snackbars, enqueueSnackbar, deleteSnackbar } = props
    
    useEffect(() => {

        const enqueue = () => {
            snackbars.map(toast => (
                enqueueSnackbar(toast.message, {
                    variant: toast.type,
                    onExited: (event, myKey) => {
                        deleteSnackbar(myKey)
                    },
                })
            ))
        }

        if(snackbars.length) {
            enqueue()
        }
    }, [snackbars, enqueueSnackbar, deleteSnackbar])
    
    return (    
        <div>
            {props.children}
        </div>
    );
}

function mapStateToProps(state) {
    return toastSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        deleteSnackbar: toastActions.closeSnackbar,
     }, dispatch)
  }
    
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(ToastContainer))
