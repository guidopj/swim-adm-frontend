import React from 'react'
import { connect } from 'react-redux'

import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import Athlete from 'components/competition/athlete/athlete'
import athleteActions from 'actions/athleteActions'

const AthleteContainer = props => {
    return (
        <Athlete
            createNewAthlete={props.createNewAthlete}
        />
    )
}

function mapStateToProps(state) {
    return competitionSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewAthlete: athleteActions.createNewAthlete,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	AthleteContainer
)