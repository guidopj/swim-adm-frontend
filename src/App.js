import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer'

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path={'/'} component={CompetitionSelectionContainer} exact/>
          <Route path={'/create'} component={CompetitionCreationContainer} exact/>
        </Switch>
    </div>
  );
}

export default App;
