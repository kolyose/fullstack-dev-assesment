import React from 'react';

// icons
import ScheduledIcon from '@material-ui/icons/Schedule';
import DeliveringIcon from '@material-ui/icons/Update';
import EndedIcon from '@material-ui/icons/CheckCircle';
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import googleIcon from '../../assets/google.svg'

export const renderStatusIcon = (status, classes) => {
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

export const renderPlatformIcon = platform => {
  switch (platform) {
    case 'facebook':
      return facebookIcon;
    case 'instagram':
      return instagramIcon;
    case 'google':
      return googleIcon;
    default:
      return null;
  }
};
