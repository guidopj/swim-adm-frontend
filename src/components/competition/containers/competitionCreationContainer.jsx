import React from 'react'
import { connect } from 'react-redux'
import competitionActions from 'actions/competitionActions'
import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import CompetitionCreation from 'components/competition/creation/competitionCreation'

const CompetitionSelectionContainer = props => {

    return (
        <CompetitionCreation
            createNewCompetition={props.createNewCompetition}
            competitionName={props.location.state.competitionName}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewCompetition: competitionActions.createNewCompetition,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionSelectionContainer
)