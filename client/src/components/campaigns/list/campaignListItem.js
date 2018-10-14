import React from 'react';
import { Link } from 'react-router-dom';

const CampaignListItem = ({ campaign }) => (
  <div>
    <Link to={`/campaigns/${campaign.id}`}>
      <li> Name: { campaign.name } </li>
    </Link>   
  </div>
);

export default CampaignListItem;