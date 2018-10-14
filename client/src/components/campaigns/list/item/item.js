import React from 'react';
import { Link } from 'react-router-dom';

// components
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
      <ListItem className={ classes.item }> 
        <ListItemIcon>
          { 
            renderIconByStatus(campaign.status, classes) 
          }
        </ListItemIcon>
        <Card className={ classes.card }>         
          <CardContent>
            <Typography variant="h6" noWrap>{ campaign.name }</Typography>
            <Typography variant="subtitle1" color="textSecondary" noWrap>{ campaign.goal }</Typography>
          </CardContent>
          <CardContent className={ classes.details }>
            <Typography variant="h6" className={ classes.price }>€{ campaign.total_budget }</Typography>
            <ul className={ classes.platformIconsList }>
              { 
                Object.keys(campaign.platforms).map(platform => (
                  <li key={ platform } >
                    <CardMedia         
                      className={ classes.platformIcon } 
                      image={ resolveContext(`./${platform}.svg`) }/>
                  </li>
                ))
              }
            </ul>
          </CardContent>
        </Card>
      </ListItem>
    </Link>   
  </div>
);

export default withStyles(styles)(CampaignListItem);