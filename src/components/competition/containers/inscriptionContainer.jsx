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
            addInscription={props.addInscription}
            deleteInscription={props.deleteInscription}
            inscriptions={props.inscriptions}
            competitionName={props.competition_name}
        />
    )
}

function mapStateToProps(state) {
    return inscriptionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        addInscription: inscriptionActions.addInscription,
        deleteInscription: inscriptionActions.deleteInscription,
        createNewInscriptions: inscriptionActions.createNewInscriptions,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	InscriptionContainer
)