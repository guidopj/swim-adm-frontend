import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import CardHeader from '@material-ui/core/CardHeader';
import GenericTable from 'components/helpers/genericTable/genericTable'
import constants from 'constants.js'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import {
    Link,
  } from "react-router-dom";

import teamCreationStyles from './teamCreationStyles'

 const TeamCreation = props => {
    const classes = teamCreationStyles();

    const [teamName, setTeamName] = useState('');
    const [teamNameAbbr, setTeamNameAbbr] = useState('');
    const [teamAdress, setTeamAddress] = useState('');
    const [teamCity, setTeamCity] = useState('');

    const { getTeams } = props

    useEffect(() => {
        getTeams()
    }, [ getTeams ])

    const createNewTeam = ev => {
        ev.preventDefault()
        props.createNewTeam({
            team_name: teamName,
            team_name_abbr: teamNameAbbr,
            team_address: teamAdress,
            team_city: teamCity,
            competition_name: props.competition_name
        })
        cleanFields()
    }

    const cleanFields = () => {
        setTeamName('')
        setTeamNameAbbr('')
        setTeamAddress('')
        setTeamCity('')
    }

    const editTeam = team => {
        props.openEditTeamModal(team)
    }
    
    return (
        <div>
            <div className={classes.root}>
                <Grid container direction="row"> 
                        <Card className={classes.generalCard}>
                            <CardHeader
                                title="Create New Team"
                            />
                            <CardContent>
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
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={6}>
                                        <TextField
                                            id="team_name_abbr"
                                            label="Team Name Abbreviation"
                                            value={teamNameAbbr}
                                            helperText="less than 10 letters"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            onChange={event => setTeamNameAbbr(event.target.value)}>
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={6}>
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
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={12}>
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
                                    
                            </CardContent>
                            <CardActions >
                                <Grid container justify="flex-start" spacing={4} className={classes.actionButtons}>
                                    <Grid item md={4} xs={12}>
                                        <Button
                                            variant="contained"
                                            onClick={createNewTeam}
                                        >
                                            Create New Team
                                        </Button>
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <Button 
                                            variant="contained"
                                            onClick={cleanFields}
                                        >
                                            Clean All Fields
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                            
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <GenericTable 
                            tableTitle= "Existing Teams"
                            defaultInitialValue= "No Teams Created"
                            tableHeaders={constants.TEAMS_TABLE_HEADERS}
                            distinguish_by= "team_name_abbr"
                            valuesList= {props.teams}
                            elements= {
                                (team) => ({
                                    column1: team.team_name,
                                    column2: team.team_name_abbr,
                                    column3: team.team_address,
                                    column4: team.team_city,
                                    enableEditing: <Link onClick={editTeam}><EditIcon /></Link>,
                                    enableDeleting: <DeleteIcon />,
                                })
                            }
                        />
                    </Grid>
        </div>
    </div>
    )
}


export default TeamCreation