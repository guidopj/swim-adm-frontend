import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TeamCard from 'components/cards/teamCard'
import EventCard from 'components/cards/eventCard'
import InscriptionCard from 'components/cards/inscriptionCard'
import AthleteCard from 'components/cards/athleteCard'
import RunCompetitionCard from 'components/cards/runCompetitionCard'

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
  },

  root: {
    width: 300,
    height: 300,
    paddingLeft: 30,
  },

});

const Home = props => {
  const classes = useStyles()
     
  return (
    <Grid container direction="row" spacing={2} className={classes.container}>
      <Grid item>
        <TeamCard
          classes={classes}
          moveToTeams={props.moveToTeams}
        />
      </Grid>
      <Grid item>
        <AthleteCard
          classes={classes}
          moveToAthletes={props.moveToAthletes}
        />
      </Grid>
      <Grid item>
        <EventCard
          classes={classes}
          moveToEvents={props.moveToEvents}
        />
      </Grid>
      <Grid item>
        <InscriptionCard
          classes={classes}
          moveToInscriptions={props.moveToInscriptions}
        />
      </Grid>
      <Grid item>
        <RunCompetitionCard
          classes={classes}
          moveToInscriptions={props.moveToRunCompetition}
        />
      </Grid>
    </Grid>
  );
};


export default Home