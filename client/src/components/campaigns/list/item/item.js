import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { renderStatusIcon, renderPlatformIcon } from './../../../helpers';

import styles from './styles';

const CampaignListItem = ({ campaign, classes }) => (
  <div>
    <Link className={ classes.link } to={ `/campaigns/${campaign.id}` }>
      <Paper className={ classes.paper }>
        <Grid item container justify="space-between"> 
          <Grid item>
            { 
              renderStatusIcon(campaign.status, classes) 
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
                      alt={ platform }
                      src={ renderPlatformIcon(platform) }/>
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

CampaignListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    name: PropTypes.string,
    goal: PropTypes.string,
    total_budget: PropTypes.number,
    platforms:  PropTypes.object,
  }).isRequired,
};

export default withStyles(styles)(CampaignListItem);