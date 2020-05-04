import React, { useState } from 'react';
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
import executionStyles from './executionStyles'
import TextField from '@material-ui/core/TextField';

const CompetitionExecution = props => {
    const classes = executionStyles();

    const [finalTime, setFinalTime] = useState(moment().format("m:ss.SS"))

    const handleKeyPress = event => {
        const time = event.target.value
        const finalTime = time.length === 5 ? "0" + time : time
        if(event.key === 'Enter'){
            const valid = moment(finalTime, 'mmssSS', true);
            if(valid.isValid()){
                const finalFormatedTime = valid.format("mm:ss.SS")
                console.log(finalFormatedTime)
                setFinalTime(finalFormatedTime)
            } else {
                console.log("NOT VALID")
            }
        }
      }
    
  
    return (
        <div>
            <div className={classes.root}>
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
                                            <Moment 
                                                element={TextField}
                                                title={finalTime}
                                                withTitle
                                                titleFormat="mm:ss.SS"
                                                label="Final Time"
                                                type="number"
                                                onKeyUp={handleKeyPress}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                {finalTime}
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
    </div>
    )
}


export default CompetitionExecution