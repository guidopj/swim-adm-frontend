import React from 'react'
import { connect } from 'react-redux'

import executionSelector from 'selectors/execution/executionSelector.js'
import { bindActionCreators } from 'redux'
import CompetitionExecution from 'components/competition/execution/execution'
import athleteActions from 'actions/athleteActions'


const CompetitionExecutionContainer = props => {
    return (
        <CompetitionExecution
            athletes={props.athletes}
            eventsByName={props.eventsByName}
        />
    )
}

function mapStateToProps(state) {
    return executionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAthletes: athleteActions.getAthletes
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionExecutionContainer
)