import React from 'react';
import CampaignListItem from './item';

import List from '@material-ui/core/List';

const CampaignsList = ({ campaigns }) => (
  <div>
    <List>
    { 
      campaigns.map(campaign => (
        <CampaignListItem
          key={ campaign.id }
          campaign={ campaign }
        />
      ))
    }
    </List>
  </div>
);


export default CampaignsList;