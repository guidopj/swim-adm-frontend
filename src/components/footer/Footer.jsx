import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    Link,
  } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
    justifyContent: "space-around",
  },
});

const Footer = props => {
    const classes = useStyles()
     
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item>
                <Link focusripple="false" fullwidth="true" to="/home">Go Back To Home</Link>
            </Grid>
            <Grid item>
                <Link focusripple="false" fullwidth="true" to="/">Go Back To Competition Selection</Link>
            </Grid>
        </Grid>
    );
};


export default Footer