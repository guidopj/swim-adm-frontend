import { makeStyles } from '@material-ui/core/styles';

  export default makeStyles((theme) => ({

    select: {
        width: "100%",
    },

    button: {
        marginLeft: theme.spacing(10)
    },
    actionButtons: {
        justifyContent: "space-between"
    },

    generalCard: {
        backgroundColor: 'aliceblue',
        flexGrow: 1,
        marginTop:17,
        margin: "auto",
        width: "50%",
        marginBottom: 30,
    },

    tableContainer: {
        justifyContent: "center",
    },
    footer: {
        position: "absolute",
        bottom: 10,
        textAlign: "center",
    }

}))
