import React from 'react'
import { connect } from 'react-redux'

import eventSelector from 'selectors/team/teamSelector'
import { bindActionCreators } from 'redux'
import eventActions from 'actions/eventActions'
import Event from 'components/competition/events/event'

const TeamContainer = props => {
    return (
        <Event
            createEvent={props.createEvent}
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