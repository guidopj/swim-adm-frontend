import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import {
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardHeader from '@material-ui/core/CardHeader';
  import _ from 'lodash';



  import homeStyles from './homeStyles'

 const CompetitionCreation = props => {
    const classes = homeStyles();

    const [teamName, setTeamName] = useState('');
    const [teamNameAbbr, setTeamNameAbbr] = useState('');
    const [teamAdress, setTeamAddress] = useState('');
    const [teamCity, setTeamCity] = useState('');

    const createNewCompetition = ev => {
        ev.preventDefault()
        props.createNewTeam({
            team_name: teamName,
            team_name_abbr: teamNameAbbr,
            team_address: teamAdress,
            team_city: teamCity,
        })
    }
    
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"Create New Team"}
                />
                <CardContent>
                    
                    <Grid container>
                        <Grid item lg={4} xs={12} md={6}>
                            <TextField
                                id="team_name"
                                label="Team Name"
                                value={teamName}
                                helperText="Please select the team name"
                                variant="outlined"
                                margin="normal"
                                required
                                autoFocus
                                onChange={event => setTeamName(event.target.value)}
                            >
                            </TextField>
                            <TextField
                                id="team_name_abbr"
                                label="Team Name Abbreviation"
                                value={teamNameAbbr}
                                helperText="less than 10 letters"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setTeamNameAbbr(event.target.value)}
                            >
                            </TextField>
                            <TextField
                                id="team_address"
                                label="Team Address"
                                value={teamAdress}
                                helperText="Team Address"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setTeamAddress(event.target.value)}
                            >
                            </TextField>
                            <TextField
                                id="team_city"
                                label="Team City"
                                value={teamCity}
                                helperText="Team City"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setTeamCity(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        
                    </Grid>
            </CardContent>
            <CardActions >
                <Grid container justify="flex-start" spacing={4} className={classes.actionButtons}>
                    <Grid item md={4} xs={12}>
                        <Button
                            variant="contained"
                            onClick={createNewCompetition}
                        >
                            Create New Team
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Button 
                            variant="contained"        
                        >
                            Clean All Fields
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link to='/'>
                            <Button 
                                variant="contained"        
                            >
                                Go Back
                            </Button>
                        </Link> 
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </div>
        </MuiPickersUtilsProvider>
    )
}


export default CompetitionCreation