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
import constants from 'constants.js'
import eventStyles from './eventStyles'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import GenericTable from 'components/helpers/genericTable/genericTable'

 const Event = React.forwardRef((props, ref) => {
    const classes = eventStyles();

    const [meters, setMeters] = useState(25);
    const [style, setStyle] = useState("");
    const [genre, setGenre] = useState("")
    const [ageFrom, setAgeFrom] = useState(7)
    const [ageTo, setAgeTo] = useState(8)
    

    const createNewEvent = ev => {
        props.createEvent({
            meters,
            style,
            genre,
            category_from_age: ageFrom,
            category_to_age: ageTo,
            competition_name: props.competitionName,
        })
    }

    const filterPosibleAges = () => {
        return _.filter(constants.AGES, age => {return age > ageFrom})
    }
  
    return (
            <div>
            <Card className={classes.generalCard}>
                <CardHeader
                    title={"Create New Event"}
                />
                <CardContent>
                    
                    <Grid container spacing={2}>
                        <Grid item lg={4} xs={12} md={6}>
                            <TextField
                                ref={ref}
                                id="event_style"
                                select
                                label="meters"
                                value={meters}
                                onChange={event => setMeters(event.target.value)}
                                className={classes.select}
                            >
                                {constants.METERS.map((style) => (
                                    <MenuItem key={style} value={style}>
                                        {style}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12} lg={4}>
                            <TextField
                                ref={ref}
                                id="event_style"
                                select
                                label="style"
                                value={style}
                                onChange={event => setStyle(event.target.value)}
                                className={classes.select}
                            >
                                {constants.STYLES.map((style) => (
                                    <MenuItem key={style} value={style}>
                                        {style}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12} lg={4}>
                            <TextField
                                ref={ref}
                                className={classes.select}
                                id="genre"
                                select
                                label="genre"
                                value={genre}
                                onChange={event => setGenre(event.target.value)}
                            >
                                {constants.GENRE.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={3} xs={12} lg={4}>
                            <TextField
                                ref={ref}
                                className={classes.select}
                                id="age_from"
                                select
                                label="Age From"
                                value={ageFrom}
                                onChange={event => setAgeFrom(event.target.value)}
                            >
                                {constants.AGES.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={3} xs={12} lg={4}>
                            <TextField
                                ref={ref}
                                className={classes.select}
                                id="age_to"
                                select
                                label="Age To"
                                value={ageTo}
                                onChange={event => setAgeTo(event.target.value)}
                            >
                                {filterPosibleAges().map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
            </CardContent>
            <CardActions >
                <Grid container justify="flex-start" spacing={4} className={classes.actionButtons}>
                    <Grid item md={4} xs={12}>
                        <Button
                            variant="contained"
                            onClick={createNewEvent}
                        >
                            Create New Event
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
        <Grid container className={classes.tableContainer}>
            <Grid item md={10}>
                <GenericTable 
                    tableTitle= "Events"
                    defaultInitialValue= {"No events created"}
                    tableHeaders={constants.EVENT_TABLE_HEADERS}
                    key="id"
                    valuesList= {props.events}
                    elements= {
                        (event) => ({
                        column1: event.eventNro,
                        column2: event.meters,
                        column3: event.style,
                        column5: event.category_from_age,
                        column6: event.category_to_age,
                        column7: event.genre,
                        })
                    }                        
                />
            </Grid>
        </Grid>
    </div>
    )
})


export default Event