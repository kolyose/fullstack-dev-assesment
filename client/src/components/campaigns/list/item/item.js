import React from 'react';
import { Link } from 'react-router-dom';

// components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// icons
import ScheduledIcon from '@material-ui/icons/Schedule';
import DeliveringIcon from '@material-ui/icons/Update';
import EndedIcon from '@material-ui/icons/CheckCircle';

import styles from './styles';


const renderIconByStatus = (status, classes) => {
  switch(status) {
    case 'Delivering': {
      return <DeliveringIcon className={ classes.statusDelivering }/>;
    }
    case 'Ended': {
      return <EndedIcon className={ classes.statusEnded }/>;
    }
    case 'Scheduled': {
      return <ScheduledIcon className={ classes.statusScheduled }/>;
    }
    default:
      return null;
  }
};

const resolveContext = require.context('../../../../assets', true);  

const CampaignListItem = ({ campaign, classes }) => (
  <div>
    <Link className={ classes.link } to={ `/campaigns/${campaign.id}` }>
      <Paper className={ classes.paper }>
        <Grid item container justify="space-between"> 
          <Grid item>
            { 
              renderIconByStatus(campaign.status, classes) 
            }
          </Grid>
          <Grid item>         
            <Typography variant="h6" noWrap>{ campaign.name }</Typography>
            <Typography variant="subtitle1" color="textSecondary" noWrap>{ campaign.goal }</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" align="right" className={ classes.price }>€{ campaign.total_budget }</Typography>
            <ul className={ classes.platformIconsList }>
              { 
                Object.keys(campaign.platforms).map(platform => (
                  <li key={ platform } >
                    <img className={ classes.platformIcon } 
                      alt={ platform}
                      src={ resolveContext(`./${platform}.svg`) }/>
                  </li>
                ))
              }
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Link>   
  </div>
);

export default withStyles(styles)(CampaignListItem);