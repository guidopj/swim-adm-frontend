import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
    overrides: {
      MuiButton: {
          text: {
            borderRadius: 3,
            border: 0,
            color: 'white',
            padding: '0 30px',
          },
      },
    },
  });