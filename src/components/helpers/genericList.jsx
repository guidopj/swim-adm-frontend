import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';

const GenericList = props => {

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
           {props.listItems.map(item => {
                return(
                    <React.Fragment key={item}>
                        <ListItem button className={props.classListItem} onClick={() => props.onItemClick(item)}>
                            <ListItemText key={item} primary={item} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            })
            }
    </List>
    );
}

export default withRouter(GenericList)