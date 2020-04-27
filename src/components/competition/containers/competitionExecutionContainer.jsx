import React from 'react'
import { connect } from 'react-redux'

import athleteSelector from 'selectors/athlete/athleteSelector'
import { bindActionCreators } from 'redux'
import CompetitionExecution from 'components/competition/execution/execution'
import athleteActions from 'actions/athleteActions'


const CompetitionExecutionContainer = props => {
    return (
        <CompetitionExecution
            athletes={props.athletes}
        />
    )
}

function mapStateToProps(state) {
    return athleteSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAthletes: athleteActions.getAthletes
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionExecutionContainer
)