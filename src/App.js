import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer'
import HomeContainer from 'components/competition/containers/homeContainer'
import AthleteContainer from 'components/competition/containers/athleteContainer'
import TeamContainer from 'components/competition/containers/teamContainer'
////<Route path={'/home'} component={HomeContainer} exact/>

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path={'/'} component={CompetitionSelectionContainer} exact/>
          <Route path={'/create'} component={CompetitionCreationContainer} exact/>
          <Route path={'/athletes'} component={AthleteContainer} exact/>
          <Route path={'/teams'} component={TeamContainer} exact/>
          <Route path={'/home'} component={HomeContainer} exact/>
        </Switch>
    </div>
  );
}

export default App;
