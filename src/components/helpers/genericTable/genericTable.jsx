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
                    {props.tableHeaders.map(header =>
                        <TableCell>{header}</TableCell>
                    )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.valuesList.map(current => (
                    <TableRow key={current[props.key]}>
                        {Object.keys(props.elements(current)).map(field => (
                            <TableCell component="th" scope="row">
                                {props.elements(current)[field]}
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