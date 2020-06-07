import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import Home from 'components/competition/home/home'
import eventSelector from 'selectors/event/eventSelector'
import homeActions from 'actions/homeActions.js'

const HomeContainer = props => {
    return (
        <Home 
            moveToEvents={props.moveToEvents}
            moveToTeams={props.moveToTeams}
            moveToInscriptions={props.moveToInscriptions}
            moveToAthletes={props.moveToAthletes}
            moveToRunCompetition={props.moveToRunCompetition}
        />
    )
}

function mapStateToProps(state) {
    return eventSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        moveToEvents: homeActions.moveToEvents,
        moveToTeams: homeActions.moveToTeams,
        moveToInscriptions: homeActions.moveToInscriptions,
        moveToAthletes: homeActions.moveToAthletes,
        moveToRunCompetition: homeActions.moveToRunCompetition,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	HomeContainer
)