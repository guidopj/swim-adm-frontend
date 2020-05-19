import actionTypes from './types'

const inscriptionActions = {
    createNewInscriptions(data) {
	    return {
            type: actionTypes.CREATE_NEW_INSCRIPTIONS,
            data,
	    }
    },
    addInscription(inscription) {
	    return {
            type: actionTypes.ADD_INSCRIPTION,
            inscription
	    }
    },
    deleteInscription(inscription) {
	    return {
            type: actionTypes.DELETE_INSCRIPTION,
            inscription
	    }
    },
}

export default inscriptionActions