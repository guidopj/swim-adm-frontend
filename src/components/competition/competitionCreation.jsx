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

  import competitionCreationStyles from './competitionCreationStyles'


/*
    club_name = models.CharField(max_length=200)
    competition_start_date = models.DateField(default=timezone.localdate)
    competition_end_date = models.DateField(default=timezone.localdate)
    start_time = models.TimeField(default=timezone.localtime)
    inscription_start_date = models.DateTimeField(default=timezone.now)
    inscription_end_date= models.DateTimeField(default=timezone.now)
    number_of_lanes = models.IntegerField()
    pool_meters = models.IntegerField()

    
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
*/
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

    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [selectedPoolMeters, setSelectedPoolMeters] = useState(25);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
             <div className={classes.root}>
    
    <Card>
        <CardHeader
            title={"New Competition: " + props.competitionTitle}
        />
        <CardContent>
            
                <Grid container>
                    <Grid item xs={4}>
                    <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={selectedPoolMeters}
                    onChange={setSelectedPoolMeters}
                    helperText="Please select your currency"
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
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </Grid>
        </CardContent>
        <CardActions >
            <Grid container justify="flex-start" spacing={4}>
                <Grid item>
                    <Button 
                        variant="contained"
                        className={classes.button}
                    >
                        Crear Alojamiento
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained"        
                    >
                        Limpiar
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