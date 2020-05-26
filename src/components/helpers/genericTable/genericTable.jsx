  import React from 'react';
  import Paper from '@material-ui/core/Paper';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const GenericTable = props => {
    return(
        <TableContainer component={Paper} >
            <Typography variant="h6" id="tableTitle">
                {props.tableTitle}
            </Typography>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {props.tableHeaders.map(header =>
                        <TableCell key={header}>{header}</TableCell>
                    )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.valuesList.map(current => (
                    <TableRow key={current[props.key]}>
                        {Object.keys(props.elements(current)).map(field => (
                            <TableCell component="th" scope="row" key={field}>
                                {props.elements(current)[field]}
                            </TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            {!props.valuesList.length && props.defaultInitialValue}
        </TableContainer>
    )
}

export default GenericTable