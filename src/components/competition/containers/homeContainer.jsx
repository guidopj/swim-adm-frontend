import React from 'react'
import { connect } from 'react-redux'

import competitionSelector from 'selectors/competition/competitionSelector'
import { bindActionCreators } from 'redux'
import Home from 'components/competition/home/home'
import teamActions from 'actions/teamActions'


const HomeContainer = props => {
    console.log("fds")
    return (
        <Home
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
	HomeContainer
)