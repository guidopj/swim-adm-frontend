import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PoolIcon from '@material-ui/icons/Pool';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import competitionSelectionStyles from './competitionSelectionStyles'

import PoolImage from 'assets/images/pool.jpg'

export default function CompetitionSelection() {
  const classes = competitionSelectionStyles();

  const prepareNewCompetition = ev => {
    ev.preventDefault()
    console.log(ev.target.value)
  }

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
            <form className={classes.form} onSubmit={prepareNewCompetition}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="new competition name"
                name="competition_name"
                autoComplete="competition_name"
                autoFocus
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
              <Divider className={classes.divider} />
              <List 
                  component="nav"
                  aria-label="main mailbox folders"
                  className={classes.list}
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Existing competitions
                      </ListSubheader>
                    }>
                    <Divider />
                  <ListItem button className={classes.listItem}>
                      <ListItemText primary="Inbox" />
                  </ListItem>
                  <Divider />
                  <ListItem button className={classes.listItem}>
                      <ListItemText primary="Drafts" />
                  </ListItem>
                  <Divider />
              </List>
        </div>
      </Grid>
    </Grid>
  );
}