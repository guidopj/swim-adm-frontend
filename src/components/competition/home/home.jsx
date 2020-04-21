import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
  import _ from 'lodash';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu';
  import { withRouter } from 'react-router-dom';
  import ButtonGroup from '@material-ui/core/ButtonGroup';



  import homeStyles from './homeStyles'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


 const Home = props => {
    
  
    const redirect = ev => {
        ev.preventDefault()
        props.history.push({
            pathname: '/teams',
        })
    }

    return (
        <div>
            <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                SWIM-ADM
                            </Typography>
                                
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                                    <Button onClick={redirect}>Oned</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                                
                        </Toolbar>
                    </AppBar>
    </div>
    )
}


export default withRouter(Home)