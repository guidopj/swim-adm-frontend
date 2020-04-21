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
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu';



  import homeStyles from './homeStyles'

 const CompetitionCreation = props => {
    const classes = homeStyles();

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
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                SWIM-ADM
                            </Typography>
                        </Toolbar>
                    </AppBar>
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
                            <TextField
                                id="team_name_abbr"
                                label="Team Name Abbreviation"
                                value={teamNameAbbr}
                                helperText="less than 10 letters"
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={event => setTeamNameAbbr(event.target.value)}
                            >
                            </TextField>
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
                            onClick={createNewCompetition}
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
    </div>
</div>
    )
}


export default CompetitionCreation