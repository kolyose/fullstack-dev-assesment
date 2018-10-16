import React from 'react';
import CampaignListItem from './item';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const CampaignsList = ({ campaigns }) => (
  <div>
    <Grid container>
    { 
      campaigns.map(campaign => (
        <CampaignListItem
          key={ campaign.id }
          campaign={ campaign }
        />
      ))
    }
    </Grid>
  </div>
);

CampaignsList.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CampaignsList;