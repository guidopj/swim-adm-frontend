import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import eventActions from 'actions/eventActions'
import Event from 'components/competition/events/event'
import eventSelector from 'selectors/event/eventSelector'

const TeamContainer = props => {
    return (
        <Event
            createEvent={props.createEvent}
            competitionName={props.competition_name}
            events={props.events}
        />
    )
}

function mapStateToProps(state) {
    return eventSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createEvent: eventActions.createEvent,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	TeamContainer
)