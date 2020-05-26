import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Route } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
          text: {
            // Some CSS
            borderRadius: 3,
            border: 0,
            color: 'white',
            padding: '0 30px',
          },
      },
    },
  });

const CreationTemplate = ({component: Component, ...Rest}) => {
    return (
      <ThemeProvider theme={theme}>
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
                </Grid>
              </Toolbar>
            </AppBar>
              <Component {...InputProps} />
          </React.Fragment>
        )} />
      </ThemeProvider>
    )
};

export default CreationTemplate