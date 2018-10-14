import React from 'react';

import CampaignsDetails from './../details';

const CampaignsList = ({ campaigns }) => (
  <div>
    { 
      campaigns.map(campaign => (
        <CampaignsDetails
          key={ campaign.id }
          campaign={ campaign }
        />
      ))
    }
  </div>
);


export default CampaignsList;