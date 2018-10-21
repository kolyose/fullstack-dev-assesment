import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCampaignById } from './../../../store/actions';
import config from './../../../config'

import Spinner from './../../spinner';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { renderStatusIcon, renderPlatformIcon } from './../../helpers';
import styles from './styles';

const renderShortDate = milliseconds => {
  const date = new Date(milliseconds);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

class CampaignDetails extends Component {
  componentDidMount() {
    const { campaign, match } = this.props;
    if (!campaign) {
      this.props.getCampaignById(match.params.id);
    }
  }

  render() {
    const { campaign, classes } = this.props;
    return (
      <section className={ classes.section }>
        { !campaign ? 
          <Spinner/> :
          <Card className={ classes.root }>           
            <CardHeader title={
                <div className={ classes.header }>
                  <div className={ classes.titles }>
                    <Typography variant="h5" align="left">{ campaign.name }</Typography>
                    <Typography variant="h6" align="left" color="textSecondary" noWrap>{ campaign.goal }</Typography>
                  </div>
                  <div className={ classes.status }>       
                    <Hidden xsDown>
                      <Typography variant="subtitle1" className={ classes[`status${campaign.status}`] }>
                        { campaign.status }
                      </Typography>
                    </Hidden>
                    { renderStatusIcon(campaign.status, classes) }         
                  </div>
                  <div className={ classes.budget }>
                    <Hidden xsDown>
                      <Typography variant="subtitle1">Total budget: </Typography>
                    </Hidden>
                    <Typography variant="subtitle1" className={ classes.price }>€{ campaign.total_budget }</Typography>
                  </div>
                </div>
              }/>  
            <Divider light/>
            <CardContent>
              {
               Object.entries(campaign.platforms).map(([ platformName, platformData ]) => (
                <ExpansionPanel key={ platformName }>
                  <ExpansionPanelSummary className={ classes.platformSummary } expandIcon={ <ExpandMoreIcon/> }>
                    <figure className={ classes.platformIcon }>
                      <img alt={ platformName } 
                        src={ renderPlatformIcon(platformName) }/>                  
                    </figure>    
                    <Hidden xsDown>               
                      <div className={ classes.platformName }>
                        <Typography variant="subtitle1" align="left">{ platformName }</Typography>
                      </div>
                    </Hidden>
                    <div className={ classes.platformStatus }>
                      <Hidden xsDown>
                        <Typography variant="subtitle2" className={ classes[`status${platformData.status}`] } paragraph>
                          { platformData.status }
                        </Typography>
                      </Hidden>
                      { renderStatusIcon(platformData.status, classes) }
                    </div>
                    <div className={ classes.platformBudget }>
                      <Typography variant="subtitle2" className={ classes.price }>
                        €{ `${platformData.remaining_budget}/${platformData.total_budget} `}
                      </Typography>
                    </div>
                    <div className={ classes.platformDates }>
                      <Hidden xsDown>
                        <Typography variant="subtitle2">
                          { `${new Date(platformData.start_date).toDateString()} - ${new Date(platformData.end_date).toDateString()} `}
                        </Typography>
                      </Hidden>
                      <Hidden smUp>
                        <Typography variant="subtitle2">
                          { `${renderShortDate(platformData.start_date)} - ${renderShortDate(platformData.end_date)} `}
                        </Typography>
                      </Hidden>
                    </div>
                  </ExpansionPanelSummary>
                  <Divider light/>
                  <ExpansionPanelDetails className={ classes.platformDetails }>
                    <div className={ classes.platformImage } style={
                      { 
                        width: 'auto',
                        height: 200,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${config.BASE_URL}images/${platformData.creatives.image})`
                      }}
                    />                             
                    <div className={ classes.platformCreatives }>
                      <Typography variant="subtitle1">{ platformData.creatives.header }</Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        { platformData.creatives.description }
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>                  
                </ExpansionPanel>
                ))
              }             
            </CardContent>            
          </Card>
        }       
      </section>
    );
  }
}

CampaignDetails.propTypes = {
  match: PropTypes.object.isRequired,
  campaign: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    name: PropTypes.string,
    goal: PropTypes.string,
    total_budget: PropTypes.number,
    platforms:  PropTypes.object,
  }),
}

const mapStateToProps = ({ campaigns }, { match }) => ({
  campaign: campaigns.list.find(({ id }) => id === Number(match.params.id))
});

export default connect(mapStateToProps, { getCampaignById })(withStyles(styles)(CampaignDetails));