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
            moveToCreation={props.moveToCreation}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        moveToCreation: competitionActions.moveToCreation,
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