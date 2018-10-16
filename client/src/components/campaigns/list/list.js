import React from 'react';
import CampaignListItem from './item';

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


export default CampaignsList;