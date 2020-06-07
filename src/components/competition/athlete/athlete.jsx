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
import moment from 'moment'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem'
import athleteStyles from './athleteStyles'
import constants from 'constants.js'
import GenericTable from 'components/helpers/genericTable/genericTable'
import { athleteAge } from 'helpers/athleteHelper.js'
import useAthletesFiltered from 'decorators/useAthletesFiltered'

 const AthleteCreation = props => {
    const classes = athleteStyles();

    const [athleteName, setAthleteName] = useState('');
    const [athleteSurname, setAthleteSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(moment().format('YYYY-MM-DD'))
    const [genre, setGenre] = useState('');
    const [athleteTeam, setAthleteTeam] = useState('')
    const [athleteDni, setAthleteDni] = useState(0)
    const athletesFiltered = useAthletesFiltered(props.athletes, athleteTeam);
    
    const createNewAthlete = ev => {
        ev.preventDefault()
        props.createNewAthlete({
            dni: athleteDni,
            name: athleteName,
            surname: athleteSurname,
            date_of_birth: moment(dateOfBirth).format('yyyy-MM-DD'),
            genre,
            team: athleteTeam
        })
    }

    const cleanAllFields = () => {
        setAthleteName('')
        setAthleteSurname('')
        setDateOfBirth('')
        setGenre('')
        setAthleteTeam('')
        setAthleteDni(0)
    }
    
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row" className={classes.root}>
                        <Card className={classes.generalCard}>
                            <CardHeader
                                title="Create New Athlete"
                            />
                        <CardContent>
                        <Grid item lg={12} xs={12} md={6}>
                            <TextField
                                    type="number"
                                    id="athlete_dni"
                                    label="Athlete DNI"
                                    value={athleteDni}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    autoFocus
                                    onChange={event => setAthleteDni(event.target.value)}
                                >
                            </TextField>
                        </Grid>
                        <Grid item lg={4} xs={12} md={6}>
                            <TextField
                                id="athlete_name"
                                label="Athlete Name"
                                value={athleteName}
                                helperText="Athlete Name"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setAthleteName(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item lg={4} xs={12} md={6}>
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
                        </Grid>
                        <Grid item lg={4} xs={12} md={6}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date_of_birth"
                                label="Date of Birth"
                                format="yyyy-MM-dd"
                                value={dateOfBirth}
                                onChange={setDateOfBirth}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} lg={4}>
                            <TextField
                                id="athlete_team"
                                select
                                label="Team"
                                value={athleteTeam}
                                onChange={event => setAthleteTeam(event.target.value)}
                                className={classes.team}
                            >
                                {props.teams.map((team) => (
                                    <MenuItem key={team.team_name_abbr} value={team.team_name_abbr}>
                                        {team.team_name_abbr + "-" + team.team_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12} lg={4}>
                            <TextField
                                className={classes.genre}
                                id="genre"
                                select
                                label="genre"
                                value={genre}
                                onChange={event => setGenre(event.target.value)}
                                helperText="Athlete gerne"
                            >
                                {constants.GENRE.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                            onClick={cleanAllFields}
                        >
                            Clean All Fields
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
        <Grid item md={6} xs={12} lg={6}>
            <GenericTable 
                tableTitle= "Athletes"
                defaultInitialValue= {`No athletes created for team ${athleteTeam}`}
                tableHeaders={constants.ATHLETE_TABLE_HEADERS}
                distinguish_by= "dni"
                valuesList= {athletesFiltered}
                elements= {
                    (athlete) => ({
                    column1: athlete.dni,
                    column2: athlete.name,
                    column3: athlete.surname,
                    column4: athleteAge(athlete),
                    column5: athlete.team,
                    column6: athlete.genre
                })
            }                        
            />
        </Grid>
        </Grid>
        </MuiPickersUtilsProvider>
    )
}


export default AthleteCreation