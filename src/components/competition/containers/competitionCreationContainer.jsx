import React from 'react'
import { connect } from 'react-redux'
import competitionActions from 'actions/competitionActions'
import { bindActionCreators } from 'redux'
import CompetitionCreation from 'components/competition/creation/competitionCreation'

const CompetitionCreationContainer = props => {

    return (
        <CompetitionCreation
            createNewCompetition={props.createNewCompetition}
            competitionName={props.location.state.competitionName}
        />
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewCompetition: competitionActions.createNewCompetition,
     }, dispatch)
  }

export default connect("", mapDispatchToProps)(
	CompetitionCreationContainer
)