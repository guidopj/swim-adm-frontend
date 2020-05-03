  import React from 'react';
  import Paper from '@material-ui/core/Paper';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const GenericTable = props => {
    return(
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {props.tableCells.map(cell =>
                        <TableCell>{cell}</TableCell>
                    )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.object && props.object.athletes.map(obj => (
                        <TableRow key={props.object.pk}>
                            {Object.keys(props.object.athletes).map(field => (
                                    <TableCell component="th" scope="row">
                                        {props.object.athletes[field]}
                                    </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                    
            </Table>
        </TableContainer>
    )
}

export default GenericTable