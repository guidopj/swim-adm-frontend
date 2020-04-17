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
  import _ from 'lodash';
  import moment from 'moment'

  import competitionCreationStyles from './competitionCreationStyles'

 const CompetitionCreation = React.forwardRef((props, ref) => {
    const classes = competitionCreationStyles();

    const availableMeters = [
        {
          value: '25',
          label: '25',
        },
        {
          value: '50',
          label: '50',
        },
      ];

    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'))
    const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedPoolMeters, setSelectedPoolMeters] = useState(25);
    const [clubName, setClubName] = useState('');
    const [startTime, setStartTime] = useState(moment().format('hh:mm:ss'));
    const [inscriptionStartDate, setInscriptionStartDate] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));
    const [inscriptionEndDate, setInscriptionEndDate] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));
    const [numberOfLanes, setNumberOfLanes] = useState(5);

    const handlePoolMetersChange = event => setSelectedPoolMeters(event.target.value)

    const createNewCompetition = ev => {
        ev.preventDefault()
        props.createNewCompetition({
            competition_name: props.competitionName,
            club_name: clubName,
            competition_start_date: startDate,
            competition_end_date: endDate,
            pool_meters: selectedPoolMeters,
            start_time: startTime,
            inscription_start_date: inscriptionStartDate,
            inscription_end_date: inscriptionEndDate,
            number_of_lanes: numberOfLanes
        })
    }
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.root}>
            <Card>
                <CardHeader
                    title={"New Competition: " + props.competitionName}
                />
                <CardContent>
                    
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                id="club_name"
                                label="Club Name"
                                value={clubName}
                                helperText="Please select the club name"
                                variant="outlined"
                                margin="normal"
                                required
                                autoFocus
                                onChange={event => setClubName(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="pool_meters"
                                select
                                ref={ref}
                                label="Select"
                                name="pool_meters"
                                value={selectedPoolMeters}
                                onChange={handlePoolMetersChange}
                                helperText="Please select the pool meters"
                            >
                            {availableMeters.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        
                        </Grid>
                        
                        <Grid item xs={4}>
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

                        <Grid item xs={4}>
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

                        <Grid item xs={4}>
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Start Time"
                                value={startTime}
                                onChange={setStartTime}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>

                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
                            <TextField
                                id="number_of_lanes"
                                select
                                label="Number of Lanes"
                                value={numberOfLanes}
                                onChange={event => setNumberOfLanes(event.target.value)}
                                helperText="Please select the pool number of lanes"
                            >
                                {_.range(5, 11).map((option) => (
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
                    <Grid item>
                        <Button
                            onClick={createNewCompetition}
                            variant="contained"
                        >
                            Create New Competition
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained"        
                        >
                            Clean All Fields
                        </Button>
                    </Grid>
                    <Grid item>
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
    )}
);


export default CompetitionCreation