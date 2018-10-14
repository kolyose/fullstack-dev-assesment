import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({  
  link: {
    textDecoration: "none"
  },
  card: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    '&:hover': {
      backgroundColor: grey['300'],
    },
  },
  details: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-end',
  },
  price: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  platformIconsList: {
    display: 'flex',
    listStyleType: 'none'
  },
  platformIcon: {
    height: 16,
    margin: "0 2px",
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