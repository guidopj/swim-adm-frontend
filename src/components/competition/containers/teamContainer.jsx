import React from 'react'
import { connect } from 'react-redux'

import teamSelector from 'selectors/team/teamSelector'
import { bindActionCreators } from 'redux'
import teamActions from 'actions/teamActions'
import TeamCreation from 'components/competition/team/teamCreation'

const TeamContainer = props => {
    return (
        <TeamCreation
            createNewTeam={props.createNewTeam}
            teams={props.teams}
            competition_name={props.competition_name}
            getTeams={props.getTeams}
        />
    )
}

function mapStateToProps(state) {
    return teamSelector(state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewTeam: teamActions.createNewTeam,
        getTeams: teamActions.getTeams,
        openEditTeamModal: teamActions.openEditTeamModal,
        deleteEditTeamModal: teamActions.deleteEditTeamModal,
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	TeamContainer
)