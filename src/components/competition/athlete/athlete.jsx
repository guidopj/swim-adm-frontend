import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardHeader from '@material-ui/core/CardHeader';
  import _ from 'lodash';
  import moment from 'moment'
  import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  import MenuItem from '@material-ui/core/MenuItem'


  import athleteStyles from './athleteStyles'

 const CompetitionCreation = props => {
    const classes = athleteStyles();

    const [athleteName, setAthleteName] = useState('');
    const [athleteSurname, setAthleteSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(moment().format('YYYY-MM-DD'))
    const [genre, setGenre] = useState('');
    

    const createNewAthlete = ev => {
        ev.preventDefault()
        props.createNewAthlete({
            name: athleteSurname,
            surname: athleteSurname,
            date_of_birth: dateOfBirth,
            genre,
        })
    }
    
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"Create New Athlete"}
                />
                <CardContent>
                    
                    <Grid container>
                        <Grid item lg={4} xs={12} md={6}>
                            <TextField
                                id="athlete_name"
                                label="Athlete Name"
                                value={athleteName}
                                helperText="Athlete Name"
                                variant="outlined"
                                margin="normal"
                                required
                                autoFocus
                                onChange={event => setAthleteName(event.target.value)}
                            >
                            </TextField>
                            <TextField
                                id="athlete_surname"
                                label="Athlete Surname"
                                value={athleteSurname}
                                helperText="Athlete Surname"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setAthleteSurname(event.target.value)}
                            >
                            </TextField>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date_of_birth"
                                label="Date of Birth"
                                format="dd/MM/yyyy"
                                value={dateOfBirth}
                                onChange={setDateOfBirth}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <TextField
                                id="genre"
                                select
                                label="genre"
                                value={genre}
                                onChange={event => setGenre(event.target.value)}
                                helperText="Athlete gerne"
                            >
                                {["MALE", "FEMALE"].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        
                    </Grid>
            </CardContent>
            <CardActions >
                <Grid container justify="flex-start" spacing={4} className={classes.actionButtons}>
                    <Grid item md={4} xs={12}>
                        <Button
                            variant="contained"
                            onClick={createNewAthlete}
                        >
                            Create New Athlete
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