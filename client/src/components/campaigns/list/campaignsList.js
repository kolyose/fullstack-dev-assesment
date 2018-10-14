import React from 'react';
import CampaignListItem from './campaignListItem';

const CampaignsList = ({ campaigns }) => (
  <div>
    <ul>
    { 
      campaigns.map(campaign => (
        <CampaignListItem
          key={ campaign.id }
          campaign={ campaign }
        />
      ))
    }
    </ul>
  </div>
);


export default CampaignsList;