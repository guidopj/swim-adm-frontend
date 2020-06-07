import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Route } from "react-router-dom";

import Footer from 'components/footer/Footer'
import MenuButton from 'templates/menuButton'

const HomeTemplate = ({component: Component, ...Rest}) => {
    return (
      <Route {...Rest} render={InputProps => (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <MenuButton />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="inherit">
                      SWIM-ADM
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Component {...InputProps} />
          <Footer />
        </React.Fragment>
        )} />
    )
  };

  export default HomeTemplate