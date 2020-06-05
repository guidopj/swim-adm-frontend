import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { athleteSelector } from 'selectors/athlete/athleteSelector'
import { bindActionCreators } from 'redux'
import Athlete from 'components/competition/athlete/athlete'
import athleteActions from 'actions/athleteActions'

const AthleteContainer = props => {

    const { getAthletes } = props
    
    useEffect(() => {
        getAthletes()
    }, [ getAthletes ])

    return (
        <Athlete
            createNewAthlete={props.createNewAthlete}
            teams={props.teams}
            athletes={props.athletes}
        />
    )
}

function mapStateToProps(state) {
    return athleteSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewAthlete: athleteActions.createNewAthlete,
        getAthletes: athleteActions.getAthletes,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	AthleteContainer
)