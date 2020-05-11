import React from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import InscriptionContainer from 'components/competition/containers/inscriptionContainer'
import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer'
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer'
import CompetitionExecutionContainer from 'components/competition/containers/competitionExecutionContainer'
import EventContainer from 'components/competition/containers/eventContainer'
import AthleteContainer from 'components/competition/containers/athleteContainer'
import TeamContainer from 'components/competition/containers/teamContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
        text: {
          // Some CSS
          borderRadius: 3,
          border: 0,
          color: 'white',
          padding: '0 30px',
        },
    },
  },
});


const HomeTemplate = ({component: Component, ...Rest}) => {
  return (
    <ThemeProvider theme={theme}>
      <Route {...Rest} render={InputProps => (
        <React.Fragment>
              <AppBar position="static">
                      <Toolbar variant="dense">
                        <Grid container direction="row" spacing={2} style={{justifyContent: "space-around"}}>
                        <Grid item>
                            <Typography variant="h6" color="inherit">
                                SWIM-ADM
                            </Typography>
                          </Grid>
                          <Grid item md={6} style= {{margin: "auto"}}>
                            <ButtonGroup size="large" variant="outlined" color="primary" aria-label="large contained button group">
                              <Link to="/teams"><Button>Teams</Button></Link>
                              <Link to="/athletes"><Button>Athletes</Button></Link>
                              <Link to="/events"><Button>Events</Button></Link>
                              <Link to="/inscriptions"><Button>Inscriptions</Button></Link>
                              <Link to="/runCompetition"><Button>Run Competition</Button></Link>
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      </Toolbar>
                  </AppBar>
          <Component {...InputProps} />
        </React.Fragment>
      )} />
        </ThemeProvider>
  )
};

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path="/" component={CompetitionSelectionContainer} exact/>
          <Route path="/create" component={CompetitionCreationContainer} exact/>
          <HomeTemplate path="/teams" component={TeamContainer} exact/>
          <HomeTemplate path="/events" component={EventContainer} exact/>
          <HomeTemplate path="/athletes" component={AthleteContainer} exact />
          <HomeTemplate path="/inscriptions" component={InscriptionContainer} exact />
          <HomeTemplate path="/runCompetition" component={CompetitionExecutionContainer} exact/>
        </Switch>
    </div>
  );
}

export default App;
