import React from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer'
import HomeContainer from 'components/competition/containers/homeContainer'
import AthleteContainer from 'components/competition/containers/athleteContainer'
import TeamContainer from 'components/competition/containers/teamContainer'
import Home from 'components/competition/home/home'
import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import ButtonGroup from '@material-ui/core/ButtonGroup';
  import Button from '@material-ui/core/Button';

const HomeTemplate = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <React.Fragment>
        <div className="DefaultLayout">
          <AppBar position="static">
                  <Toolbar variant="dense">
                      <Typography variant="h6" color="inherit">
                          SWIM-ADM
                      </Typography>
                                  
                      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                          <Link to="/teams"><Button>Teams</Button></Link>
                          <Link to="/athletes"><Button>Athletes</Button></Link>
                          <Link to="/runCompetition"><Button>Run Competition</Button></Link>
                      </ButtonGroup>
                                  
                  </Toolbar>
              </AppBar>
        </div>
        <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </React.Fragment>
    )} />
  )
};

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path="/" component={CompetitionSelectionContainer} exact/>
          <Route path="/create" component={CompetitionCreationContainer} exact/>
          <HomeTemplate path="/teams" component={TeamContainer} />
          <HomeTemplate path="/athletes" component={AthleteContainer} />
          <HomeTemplate path="/runCompetition" component={RunCompetitionContainer} />
        </Switch>
    </div>
  );
}

export default App;
