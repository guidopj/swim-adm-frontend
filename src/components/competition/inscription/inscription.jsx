import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import _ from 'lodash';
import constants from 'constants.js'
import inscriptionStyles from './inscriptionStyles'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import GenericTable from 'components/helpers/genericTable/genericTable'
import moment from 'moment'

 const CompetitionCreation = props => {
    const classes = inscriptionStyles();

    const [athletesFiltered, setAthletesFiltered] = useState([]);
    const [eventsFiltered, setEventsFiltered] = useState([]);
    const [team, setTeam] = useState("");
    const [inscriptions, setInscriptions] = useState([])
    const [checked, setChecked] = useState(false)
    const [selectedAthlete, setSelectedAthlete] = useState({});
    

    const createNewInscriptions = ev => {

    }

    const ageBetween = (athlete, minAge, maxAge) => {
        console.log(athlete.date_of_birth)
        const athleteAge = moment(athlete.date_of_birth).diff(moment(), 'years')
        console.log(athleteAge)
        return athleteAge >= minAge && athleteAge <= maxAge
    }

    const getAthletesFrom = team => {        
        return props.athletes.filter(athlete => athlete.team_id === team)
    }

    const getEventsFor = athlete => {
        return props.events.filter(event => event.genre === athlete.genre && ageBetween(athlete, event.ageFrom, event.ageTo ))
    }

    const updateInscriptionTable = team => {
        setTeam(team)
        setAthletesFiltered(getAthletesFrom(team))
    }

    const updateSelectableEventsTable = athleteDni => {
        const athleteFromDni = athletesFiltered.find(athlete => athlete.dni === parseInt(athleteDni, 10))
        setSelectedAthlete(athleteFromDni)
        setEventsFiltered(getEventsFor(athleteFromDni))
    }

    const handleInscriptionChange = (ev, athlete) =>{
        setChecked(ev.target.checked)
        if(ev.target.checked) {
            setInscriptions([...inscriptions, athlete])
        } else {
            const filteredInscriptions = inscriptions.filter(inscription => inscription.dni !== athlete.dni)
            setInscriptions(filteredInscriptions)
        }
      }
  
    return (
        <div className={classes.root}>
            <Card className={classes.generalCard}>
                <CardHeader
                    title={"Inscriptions"}
                />
                <CardContent>
                    
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12} lg={4}>
                            <TextField
                                className={classes.select}
                                id="inscription"
                                select
                                label="Select Team"
                                value={team}
                                onChange={event => updateInscriptionTable(event.target.value)}
                            >
                                {props.teams && props.teams.map((team) => (
                                    <MenuItem key={team.team_name_abbr} value={team.team_name_abbr}>
                                        {team.team_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
            </CardContent>
        </Card>
        <Grid container className={classes.tableContainer} spacing={2}>
            <Grid item md={4}>
                <GenericTable 
                    tableHeaders={constants.INSCRIPTION_TABLE_HEADERS}
                    key="dni"
                    valuesList= {athletesFiltered}
                    elements= {
                        (athlete) => ({
                            column1: <Radio
                                        checked={selectedAthlete.dni === athlete.dni}
                                        onChange={ev => updateSelectableEventsTable(ev.target.value)}
                                        value={athlete.dni}
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />,
                            column2: athlete.dni,
                            column3: athlete.name,
                            column4: athlete.surname,
                        })
                    }                        
                />
            </Grid>
            <Grid item md={6}>
                <GenericTable 
                    tableHeaders={constants.EVENT_TABLE_HEADERS}
                    key="nro"
                    valuesList= {eventsFiltered}
                    elements= {
                        athlete => ({
                            column1: <Checkbox
                                        checked={checked}
                                        color="primary"
                                        onChange={ev => handleInscriptionChange(ev, athlete)} 
                                    />,
                            column2: athlete.dni,
                            column3: athlete.name,
                            column4: athlete.surname,
                        })
                    }                        
                />
            </Grid>
        </Grid>

        <Grid container
            spacing={4}
            className={classes.footer} 
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item md={4} xs={12}>
                <Button
                    variant="contained"
                    onClick={createNewInscriptions}
                >
                    Create New Inscriptions
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
    </div>
    )
}


export default CompetitionCreation