import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({  
  link: {
    textDecoration: "none"
  },
  paper: {
    minWidth: '300px',
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,  
    '&:hover': {
      backgroundColor: grey['300'],
    },
  },
  price: {
    margin: theme.spacing.unit/3,
    fontStyle: 'italic',
  },
  platformIconsList: {
    display: 'flex',
    listStyleType: 'none'
  },
  platformIcon: {
    height: 16,    
    margin: theme.spacing.unit/3,
    width: 16
  },
  statusScheduled: {
    color: blueGrey['500']
  },
  statusDelivering: {
    color: amber['800']
  },
  statusEnded: {
    color: green['500']
  },
  
});

export default styles;