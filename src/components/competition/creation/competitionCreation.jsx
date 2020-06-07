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

import competitionCreationStyles from './competitionCreationStyles'
import constants from 'constants.js'

 const CompetitionCreation = props => {
    const classes = competitionCreationStyles();
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment())
    const [selectedPoolMeters, setSelectedPoolMeters] = useState(25);
    const [clubName, setClubName] = useState('');
    const [startTime, setStartTime] = useState(moment());
    const [inscriptionStartDate, setInscriptionStartDate] = useState(moment());
    const [inscriptionEndDate, setInscriptionEndDate] = useState(moment());
    const [numberOfLanes, setNumberOfLanes] = useState(5);

    const handlePoolMetersChange = event => setSelectedPoolMeters(event.target.value)

    const createNewCompetition = ev => {
        props.createNewCompetition({
            competition_name: props.competitionName,
            club_name: clubName,
            competition_start_date: moment(startDate).format('YYYY-MM-DD'),
            competition_end_date: moment(endDate).format('YYYY-MM-DD'),
            pool_meters: selectedPoolMeters,
            start_time: moment(startTime).format('HH:mm:ss'),
            inscription_start_date: moment(inscriptionStartDate).format('YYYY-MM-DD HH:mm:ss'),
            inscription_end_date: moment(inscriptionEndDate).format('YYYY-MM-DD HH:mm:ss'),
            number_of_lanes: numberOfLanes
        })
    }
  
    return (
        
    <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Card className={classes.generalCard}>
                <CardHeader
                    title={`New Competition: ${props.competitionName}`}
                />
                <CardContent>
                    
                    <Grid container spacing={2}>
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
                                format="yyyy-MM-dd"
                                helperText="Select a valid competition start date"
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
                                format="yyyy-MM-dd"
                                helperText="Select a valid competition end date"
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
                                helperText="Select a valid starting time"
                                format="HH:mm:ss"
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="inscription_start_date"
                                format="yyyy-MM-dd HH:mm:ss"
                                value={inscriptionStartDate}
                                onChange={setInscriptionStartDate}
                                helperText="Select a valid inscription start date"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} lg={4}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="inscription_End_date"
                                format="yyyy-MM-dd HH:mm:ss"
                                helperText="Select a valid inscription end date"
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
    )
}


export default withRouter(CompetitionCreation)