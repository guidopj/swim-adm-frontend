import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import competitionActions from 'actions/competitionActions'
import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import CompetitionSelection from 'components/competition/selection/competitionSelection'

const CompetitionSelectionContainer = props => {
    const { getExistingCompetitions } = props;

   useEffect(() => {
        getExistingCompetitions()
    }, [getExistingCompetitions])

    return (
        <CompetitionSelection
            competitionNames={props.competitionNames}
            getCompetition={props.getCompetition}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCompetition: competitionActions.getCompetition,
        getExistingCompetitions: competitionActions.getExistingCompetitions,
     }, dispatch)
  }

  CompetitionSelectionContainer.defaultProps = {
    competitionNames: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(
	CompetitionSelectionContainer
)