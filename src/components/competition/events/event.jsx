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
import athleteStyles from './athleteStyles'
import MenuItem from '@material-ui/core/MenuItem'

 const CompetitionCreation = props => {
    const classes = athleteStyles();

    const [meters, setMeters] = useState(0);
    const [style, setStyle] = useState("");
    const [genre, setGenre] = useState("")
    

    const createNewEvent = ev => {
        ev.preventDefault()
        props.createNewEvent({
            meters,
            style,
            genre,
        })
    }
  
    return (
            <div className={classes.root}>
            <Card className={classes.generalCard}>
                <CardHeader
                    title={"Create New Event"}
                />
                <CardContent>
                    
                    <Grid container>
                        <Grid item lg={4} xs={12} md={6}>
                            <TextField
                                    type="number"
                                    id="event_meters"
                                    label="Meters"
                                    value={meters}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    autoFocus
                                    onChange={event => setMeters(event.target.value)}
                                >
                                </TextField>
                            
                            <Grid item md={6} xs={12} lg={4}>
                            <TextField
                                id="event_style"
                                select
                                label="style"
                                value={style}
                                onChange={event => setStyle(event.target.value)}
                                className={classes.team}
                            >
                                {constants.STYLES.map((style) => (
                                    <MenuItem key={style} value={style}>
                                        {style}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                            <TextField
                                className={classes.genre}
                                id="genre"
                                select
                                label="genre"
                                value={genre}
                                onChange={event => setGenre(event.target.value)}
                                helperText="Event gerne"
                            >
                                {constants.GENRE.map((option) => (
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
    </div>
    )
}


export default CompetitionCreation