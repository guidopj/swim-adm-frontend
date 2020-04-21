import { makeStyles } from '@material-ui/core/styles';

  export default makeStyles((theme) => ({
    
    textField: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginTop:17,
        width: 200,
    },
    
    root: {
        flexGrow: 1,
        marginTop:17,
        margin: "auto",
        width: "50%",
    },

    select: {
        width: 100,
    },

    button: {
        marginLeft: theme.spacing(10)
    },
    actionButtons: {
        justifyContent: "space-between"
    },

    generalCard: {
        backgroundColor: 'aliceblue',
    },
    
    genre: {
        width: "100%",
    },

    team: {
        width: "100%",
    }

}))
