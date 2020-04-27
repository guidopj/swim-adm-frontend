import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardHeader from '@material-ui/core/CardHeader';
  import _ from 'lodash';
  import Paper from '@material-ui/core/Paper';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';



  import executionStyles from './executionStyles'

 const CompetitionExecution = props => {
    const classes = executionStyles();

    const [teamName, setTeamName] = useState('');
    const [teamNameAbbr, setTeamNameAbbr] = useState('');
    const [teamAdress, setTeamAddress] = useState('');
    const [teamCity, setTeamCity] = useState('');

    const createNewCompetition = ev => {
        ev.preventDefault()
        props.createNewTeam({
            team_name: teamName,
            team_name_abbr: teamNameAbbr,
            team_address: teamAdress,
            team_city: teamCity,
        })
    }
    
  
    return (
        <div>
            <div className={classes.root}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container direction="row" spacing={2}> 
                        <Grid item>
                            <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>LANE</TableCell>
                                    <TableCell align="right">ATHLETE</TableCell>
                                    <TableCell align="right">INSCRIPTION TIME</TableCell>
                                    <TableCell align="right">FINAL TIME</TableCell>
                                    <TableCell align="right">HEAT POSITION</TableCell>
                                    <TableCell align="right">FINAL POSITION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.athletes && props.athletes.map((athlete, idx) => (
                                    <TableRow key={athlete.dni}>
                                        <TableCell component="th" scope="row">
                                            {idx}
                                        </TableCell>
                                        <TableCell align="right">
                                            {athlete.surname} {athlete.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {"00:00:00"}
                                        </TableCell>
                                        <TableCell align="right">
                                        <KeyboardTimePicker
                                            label="Masked timepicker"
                                            format="mm:ss"
                                        />
                                        </TableCell>
                                        <TableCell align="right">
                                            1
                                        </TableCell>
                                        <TableCell align="right">
                                            1
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    </div>
    )
}


export default CompetitionExecution