import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import competitionCreationStyles from './competitionCreationStyles'
import DjangoCSRFToken from 'django-react-csrftoken'
import constants from 'constants.js'

 const CompetitionCreation = props => {
    const classes = competitionCreationStyles();

    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'))
    const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedPoolMeters, setSelectedPoolMeters] = useState(25);
    const [clubName, setClubName] = useState('');
    const [startTime, setStartTime] = useState(moment().format('HH:mm:ss'));
    const [inscriptionStartDate, setInscriptionStartDate] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));
    const [inscriptionEndDate, setInscriptionEndDate] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));
    const [numberOfLanes, setNumberOfLanes] = useState(5);

    const handlePoolMetersChange = event => setSelectedPoolMeters(event.target.value)

    const createNewCompetition = ev => {
        ev.preventDefault()
        props.createNewCompetition({
            competition_name: props.competitionName,
            club_name: clubName,
            competition_start_date: moment(startDate).format('YYYY-MM-DD'),
            competition_end_date: moment(endDate).format('YYYY-MM-DD'),
            pool_meters: selectedPoolMeters,
            start_time: moment(startTime).format("HH:mm:ss"),
            inscription_start_date: moment(inscriptionStartDate).format('YYYY-MM-DD hh:mm:ss'),
            inscription_end_date: moment(inscriptionEndDate).format('YYYY-MM-DD hh:mm:ss'),
            number_of_lanes: numberOfLanes
        })
    }
  
    return (
        <div>
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            SWIM-ADM
          </Typography>
        </Toolbar>
      </AppBar>
        <form>
            <DjangoCSRFToken/>
            <div className={classes.root}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Card className={classes.generalCard}>
                        <CardHeader
                            title={"New Competition: " + props.competitionName}
                        />
                        <CardContent>
                            
                            <Grid container>
                                <Grid item lg={4} xs={12} md={6}>
                                    <TextField
                                        id="club_name"
                                        label="Club Name"
                                        value={clubName}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        autoFocus
                                        onChange={event => setClubName(event.target.value)}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <TextField
                                        id="pool_meters"
                                        select
                                        label="Select"
                                        name="pool_meters"
                                        value={selectedPoolMeters}
                                        onChange={handlePoolMetersChange}
                                        helperText="Please select the pool meters"
                                    >
                                    {constants.AVAILABLE_POOL_METERS.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                
                                </Grid>
                                
                                <Grid item xs={12} md={6} lg={4}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="competition_start_date"
                                        label="Start Date"
                                        format="dd/MM/yyyy"
                                        value={startDate}
                                        onChange={setStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="competition_end_date"
                                        label="End Date"
                                        format="dd/MM/yyyy"
                                        value={endDate}
                                        onChange={setEndDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        value={startTime}
                                        onChange={time => setStartTime(moment(time))}
                                        format="HH:mm:ss"
                                        helperText="Starting Time"
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="inscription_start_date"
                                        label="Inscription Start Date"
                                        format="dd/MM/yyyy"
                                        value={inscriptionStartDate}
                                        onChange={setInscriptionStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} lg={4}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="inscription_End_date"
                                        label="Inscription End Date"
                                        format="dd/MM/yyyy"
                                        value={inscriptionEndDate}
                                        onChange={setInscriptionEndDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} lg={4}>
                                    <TextField
                                        id="number_of_lanes"
                                        select
                                        label="Number of Lanes"
                                        value={numberOfLanes}
                                        onChange={event => setNumberOfLanes(event.target.value)}
                                        helperText="Please select the pool number of lanes"
                                    >
                                        {constants.LANES.map((option) => (
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
                                    onClick={createNewCompetition}
                                    variant="contained"
                                >
                                    Create New Competition
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
                </MuiPickersUtilsProvider>
            </div>
        </form>
    </div>
    )
}


export default withRouter(CompetitionCreation)