import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import inscriptionSelector from 'selectors/inscription/inscriptionSelector'

import inscriptionActions from 'actions/inscriptionActions'

import Inscription from 'components/competition/inscription/inscription'


const InscriptionContainer = props => {
    return (
        <Inscription
            createNewInscriptions={props.createNewInscriptions}
            teams={props.teams}
            athletes={props.athletes}
            events={props.events}
        />
    )
}

function mapStateToProps(state) {
    return inscriptionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewInscriptions: inscriptionActions.createNewInscriptions,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	InscriptionContainer
)