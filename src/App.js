import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import CompetitionSelection from 'components/competition/competitionSelection'

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path={'/'} component={CompetitionSelection} />
        </Switch>
    </div>
  );
}

export default App;
