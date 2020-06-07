import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import InscriptionContainer from 'components/competition/containers/inscriptionContainer'
import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer'
import CompetitionExecutionContainer from 'components/competition/containers/competitionExecutionContainer'
import HomeContainer from 'components/competition/containers/homeContainer'
import EventContainer from 'components/competition/containers/eventContainer'
import AthleteContainer from 'components/competition/containers/athleteContainer'
import TeamContainer from 'components/competition/containers/teamContainer'
import CreationTemplate from 'templates/creationTemplate'
import HomeTemplate from 'templates/homeTemplate'

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path="/" component={CompetitionSelectionContainer} exact/>
          <CreationTemplate path="/create" component={CompetitionCreationContainer} exact/>
          <HomeTemplate path="/teams" component={TeamContainer} exact/>
          <HomeTemplate path="/home" component={HomeContainer} exact/>
          <HomeTemplate path="/events" component={EventContainer} exact/>
          <HomeTemplate path="/athletes" component={AthleteContainer} exact />
          <HomeTemplate path="/inscriptions" component={InscriptionContainer} exact />
          <HomeTemplate path="/runCompetition" component={CompetitionExecutionContainer} exact/>
        </Switch>
    </div>
  );
}

export default App;
