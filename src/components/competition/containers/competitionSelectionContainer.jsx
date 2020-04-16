import React from 'react'
import { connect } from 'react-redux'
import competitionActions from 'actions/competitionActions'
import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import CompetitionSelection from 'components/competition/selection/competitionSelection'

const CompetitionSelectionContainer = props => {

    return (
        <CompetitionSelection
            getExistingCompetitions={props.getExistingCompetitions}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        getExistingCompetitions: competitionActions.getExistingCompetitions,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionSelectionContainer
)