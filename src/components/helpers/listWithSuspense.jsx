import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

const ListWithSuspense = props => {
    return (
        <List 
            component="nav"
            aria-label="main mailbox folders"
            className={props.classList}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {props.listSubHeader}
                </ListSubheader>
            }>
            <Divider />
           {props.competitionNames.map(c => {
                return(
                    <React.Fragment>
                        <ListItem button className={props.classListItem}>
                            <ListItemText primary={c} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            })
            }
    </List>
    );
}

export default ListWithSuspense