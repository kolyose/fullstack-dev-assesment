import React from 'react';

// icons
import ScheduledIcon from '@material-ui/icons/Schedule';
import DeliveringIcon from '@material-ui/icons/Update';
import EndedIcon from '@material-ui/icons/CheckCircle';

export const renderIconByStatus = (status, classes) => {
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
