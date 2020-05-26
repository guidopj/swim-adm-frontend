import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PoolIcon from '@material-ui/icons/Pool';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import { withRouter } from 'react-router-dom';

import GenericList from 'components/helpers/genericList'

import competitionSelectionStyles from './competitionSelectionStyles'

import PoolImage from 'assets/images/pool.jpg'

const CompetitionSelection = props => {
  const classes = competitionSelectionStyles();
  const [competitionName, setCompetitionName] = useState('');

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item md={6}>
        <Image
            src={PoolImage}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PoolIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Select or Create a Competition
          </Typography>
            <form className={classes.form} onSubmit={() => props.moveToCreation(competitionName)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="competitionName"
                label="new competition name"
                name="competition_name"
                autoFocus
                value={competitionName}
                onChange={event => setCompetitionName(event.target.value)}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create
              </Button>
              
            </form>
              <GenericList
                onItemClick={props.getCompetition}
                listItems={props.competitionNames}
                listSubHeader="Existing competitions"
                classList={classes.list}
                classListItem={classes.listItem}
              />
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(CompetitionSelection)