import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import constants from 'constants.js'
import inscriptionStyles from './inscriptionStyles'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import GenericTable from 'components/helpers/genericTable/genericTable'
import moment from 'moment'

 const Inscription = props => {
    const classes = inscriptionStyles();

    const [athletesFiltered, setAthletesFiltered] = useState([]);
    const [eventsFiltered, setEventsFiltered] = useState([]);
    const [team, setTeam] = useState("");
    const [selectedAthlete, setSelectedAthlete] = useState({});
    

    const createNewInscriptions = () => {
        props.createNewInscriptions({
            inscriptions: props.inscriptions,
            competition_name: props.competitionName,
        })
    }

    const athleteAge = athlete => moment().diff(moment(athlete.date_of_birth), 'years')

    const ageBetween = (athlete, minAge, maxAge) => {
        const age = athleteAge(athlete)
        return age >= minAge && age <= maxAge
    }

    const getAthletesFrom = team => {        
        return props.athletes.filter(athlete => athlete.team === team)
    }

    const getEventsFor = athlete => {
        return props.events.filter(event => event.genre === athlete.genre && ageBetween(athlete, event.category_from_age, event.category_to_age ))
    }

    const updateInscriptionTable = team => {
        setTeam(team)
        setAthletesFiltered(getAthletesFrom(team))
    }

    const updateSelectableEventsTable = athleteDni => {
        const athleteFromDni = athletesFiltered.find(athlete => athlete.dni === athleteDni)
        setSelectedAthlete(athleteFromDni)
        setEventsFiltered(getEventsFor(athleteFromDni))
    }

    const handleInscriptionChange = (ev, inscription) => {
        if(ev.target.checked) {
            props.addInscription(inscription)
        } else {
            props.deleteInscription(inscription)
        }
      }
  
    return (
        <div className={classes.root}>
            <Card className={classes.generalCard}>
                <CardHeader
                    title="Inscriptions"
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
            <Grid item md={10} lg={6}>
                <GenericTable 
                    tableTitle="Athletes"
                    defaultInitialValue="No team selected"
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
                            column5: athleteAge(athlete),
                        })
                    }                        
                />
            </Grid>
            <Grid item md={10} lg={6}>
                <GenericTable
                    tableTitle="Events"
                    defaultInitialValue="No athlete selected"
                    tableHeaders={constants.EVENT_INSCRIPTION_TABLE_HEADERS}
                    key="id"
                    valuesList= {eventsFiltered}
                    elements= {
                        event => ({
                            column1: <Checkbox
                                        checked={props.inscriptions.some(inscription => inscription.athlete === selectedAthlete.dni && inscription.event === event.id)}
                                        color="primary"
                                        onChange={ev => handleInscriptionChange(ev, {athlete: selectedAthlete.dni, event: event.id})} 
                                    />,
                            column2: event.id,
                            column3: event.meters,
                            column4: event.style,
                            column5: event.category_from_age,
                            column6: event.category_to_age,
                            column7: event.genre,
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


export default Inscription