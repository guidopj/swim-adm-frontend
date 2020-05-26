import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import teamCreationStyles from './teamCreationStyles'

 const TeamCreation = props => {
    const classes = teamCreationStyles();

    const [teamName, setTeamName] = useState('');
    const [teamNameAbbr, setTeamNameAbbr] = useState('');
    const [teamAdress, setTeamAddress] = useState('');
    const [teamCity, setTeamCity] = useState('');

    const createNewTeam = ev => {
        ev.preventDefault()
        props.createNewTeam({
            team_name: teamName,
            team_name_abbr: teamNameAbbr,
            team_address: teamAdress,
            team_city: teamCity,
            competition_name: props.competition_name
        })
    }
    
    return (
        <div>
            <div className={classes.root}>
                <Grid container direction="row" spacing={2}> 
                    <Grid item>
                        <Card className={classes.generalCard}>
                            <CardHeader
                                title="Create New Team"
                            />
                            <CardContent>
                                <Grid container>
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
                                    <Grid item lg={4} xs={12} md={6}>
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
                    </Grid>
                    <Grid item>
                        <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>TEAM</TableCell>
                                <TableCell align="right">ABBR</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.teams && props.teams.map(team => (
                                <TableRow key={team.team_name_abbr}>
                                    <TableCell component="th" scope="row">
                                        {team.team_name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {team.team_name_abbr}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
        </div>
    </div>
    )
}


export default TeamCreation