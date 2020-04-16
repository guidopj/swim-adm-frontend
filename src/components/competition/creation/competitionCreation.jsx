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

  import competitionCreationStyles from './competitionCreationStyles'

 const CompetitionCreation = props => {
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

    const [endDate, setEndDate] = useState(Date.now());
    const [startDate, setStartDate] = useState(Date.now());
    const [selectedPoolMeters, setSelectedPoolMeters] = useState(25);
    const [clubName, setClubName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [inscriptionStartDate, setInscriptionStartDate] = useState(Date.now());
    const [inscriptionEndDate, setInscriptionEndDate] = useState(Date.now());
    const [numberOfLanes, setNumberOfLanes] = useState(0);
    
    

    /* const handleDateChange = (date) => {
        setSelectedDate(date);
    }; */
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
             <div className={classes.root}>
    
    <Card>
        <CardHeader
            title={"New Competition: " + props.location.state.competitionName}
        />
        <CardContent>
            
                <Grid container>
                    <Grid item xs={4}>
                        <TextField
                            id="club_name"
                            label="Club Name"
                            value={clubName}
                            helperText="Please select the pool meters"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            onChange={event => setClubName(event.target.value)}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="pool_meters"
                            select
                            label="Select"
                            value={selectedPoolMeters}
                            onChange={setSelectedPoolMeters}
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
                        onChange={setNumberOfLanes}
                        helperText="Please select the pool number of lanes"
                    >
                        {_.range(5, 10).map((option) => (
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
    );
}

export default CompetitionCreation