import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import teamSelector from 'selectors/team/teamSelector'
import { bindActionCreators } from 'redux'
import teamActions from 'actions/teamActions'
import TeamCreation from 'components/competition/team/teamCreation'

const TeamContainer = props => {
    const { getTeams } = props;

    useEffect(() => {
        getTeams()
    }, [getTeams])

    return (
        <TeamCreation
            createNewTeam={props.createNewTeam}
            teams={props.teams}
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
     }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(
	TeamContainer
)