import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles'
import topbarStyles from 'generalStyles/topbar.js'
import {
    Link,
    Route,
  } from "react-router-dom";

const HomeTemplate = ({component: Component, ...Rest}) => {
    return (
      <ThemeProvider theme={topbarStyles}>
        <Route {...Rest} render={InputProps => (
          <React.Fragment>
                <AppBar position="static">
                        <Toolbar variant="dense">
                          <Grid container direction="row" spacing={2} style={{justifyContent: "space-around"}}>
                          <Grid item>
                              <Typography variant="h6" color="inherit">
                                  SWIM-ADM
                              </Typography>
                            </Grid>
                            <Grid item md={6} style= {{margin: "auto"}}>
                              <ButtonGroup size="large" variant="outlined" color="primary" aria-label="large contained button group">
                                <Link disablefocusripple="true" fullwidth="true" to="/teams"><Button>Teams</Button></Link>
                                <Link disablefocusripple="true" fullwidth="true" to="/athletes"><Button>Athletes</Button></Link>
                                <Link disablefocusripple="true" fullwidth="true" to="/events"><Button>Events</Button></Link>
                                <Link disablefocusripple="true" fullwidth="true" to="/inscriptions"><Button>Inscriptions</Button></Link>
                                <Link disablefocusripple="true" fullwidth="true" to="/runCompetition"><Button>Run Competition</Button></Link>
                              </ButtonGroup>
                            </Grid>
                          </Grid>
                        </Toolbar>
                    </AppBar>
            <Component {...InputProps} />
          </React.Fragment>
        )} />
          </ThemeProvider>
    )
  };

  export default HomeTemplate