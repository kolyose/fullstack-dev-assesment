import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({   
  section: {    
    display: 'flex',
    justifyContent: 'center',
    height: "100vh",
    backgroundColor: grey[400],
  },
  root: {
    overflow: 'auto',
    flexGrow: 1,
    maxWidth: '1024px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price: {    
    fontStyle: 'italic',
  },
  platformSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0,
    '& div': {
      marginTop: 'auto',
      marginBottom: 'auto',
    }
  },
  platformIcon: {       
    margin: 'auto 8px',
    height: 24, 
    width: 24
  },
  platformName: {
    marginLeft: 5,
    flexBasis: '20%'
  },
  platformStatus: {
    flexBasis: '10%',
    display: 'flex',
    flexDirection: 'row'
  },
  platformBudget: {
    flexBasis: '20%'
  },
  platformDates: {
    flexWrap: 'wrap',
  },
  platformDetails: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  platformImage: {  
    flexBasis: '25%',
    flexGrow: 1
  },
  platformCreatives: { 
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
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