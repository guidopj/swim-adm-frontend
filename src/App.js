import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import CompetitionSelection from 'components/competition/competitionSelection'
import CompetitionCreation from 'components/competition/competitionCreation'

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path={'/'} component={CompetitionSelection} exact/>
          <Route path={'/create'} component={CompetitionCreation} exact/>
        </Switch>
    </div>
  );
}

export default App;
