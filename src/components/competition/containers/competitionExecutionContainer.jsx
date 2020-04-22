import React from 'react'
import { connect } from 'react-redux'

import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import CompetitionExecution from 'components/competition/execution/execution'
import teamActions from 'actions/teamActions'


const CompetitionExecutionContainer = props => {
    return (
        <CompetitionExecution
            createNewTeam={props.createNewTeam}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewTeam: teamActions.createNewTeam,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionExecutionContainer
)