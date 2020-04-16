import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreation from 'components/competition/creation/competitionCreation'

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path={'/'} component={CompetitionSelectionContainer} exact/>
          <Route path={'/create'} component={CompetitionCreation} exact/>
        </Switch>
    </div>
  );
}

export default App;
