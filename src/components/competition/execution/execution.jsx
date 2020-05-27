import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Moment from 'react-moment';
import moment from 'moment'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Label from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import executionStyles from './executionStyles'
import GenericList from 'components/helpers/genericList'

const CompetitionExecution = props => {
    const classes = executionStyles();

    const [finalTimes, setFinalTimes] = useState([])
    const [finalTimeViewElements, setFinalTimeViewElements] = useState([TextField, TextField, TextField, TextField, TextField])

    const onFocusOut = event => {
        return !event.currentTarget.contains(document.activeElement)
    }

    const handleKeyPress = (event, idx) => {
        const time = event.target.value
        const finalTime = time.length === 5 ? "0" + time : time

        if(event.key === 'Enter' || onFocusOut(event)){
            const valid = moment(finalTime, ['mmssSS', 'ssSS'], true);
            if(valid.isValid()){
                const finalFormatedTime = valid.format("mm:ss.SS")
                setFinalTimes(Object.assign([...finalTimes], {[idx]: finalFormatedTime}))
                setFinalTimeViewElements(Object.assign([...finalTimeViewElements], {[idx]: Label}))
            } else {
                console.log("NOT VALID")
            }
        }
    }


    
  
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs={4}>
                    <GenericList
                        onItemClick={props.getCompetition}
                        listItems={props.eventsByName}
                        listSubHeader="Events"
                        classList={classes.list}
                        classListItem={classes.listItem}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography component="h1">
                        Heats
                    </Typography>
                    <ButtonGroup size="large" variant="outlined" color="primary" aria-label="large contained button group">
                        {Array(6).fill().map((_, i) =>
                              <Button>{i + 1}</Button>
                        )}
                    </ButtonGroup>
                </Grid>
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
                                            {idx + 1}
                                        </TableCell>
                                        <TableCell align="right">
                                            {athlete.surname} {athlete.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {"00:00:00"}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Moment 
                                                element={finalTimeViewElements[idx]}
                                                format="mm:ss.SS"
                                                parse="mm:ss.SS"
                                                label="Final Time"
                                                type="number"
                                                onKeyUp={(event) => handleKeyPress(event, idx)}
                                                onBlur={(event) => handleKeyPress(event, idx)}
                                            >
                                                {finalTimes[idx]}
                                            </Moment>
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
    </div>
    )
}


export default CompetitionExecution