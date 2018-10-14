import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampaignById } from './../../store/actions';

import Spinner from './../spinner';

class CampaignDetails extends Component {
  componentDidMount() {
    const { campaign, match } = this.props;
    if (!campaign) {
      this.props.getCampaignById(match.params.id);
    }
  }

  render() {
    const { campaign } = this.props;
    return (
      <section>
      <div>
        <h1> Details </h1>        
        { campaign ? <p>id: { campaign.id }</p> : <Spinner/> }
      </div>
    </section>    
    );
  }
}

const mapStateToProps = ({ campaigns }, { match }) => ({
  campaign: campaigns.list.find(({ id }) => id === Number(match.params.id))
});

export default connect(mapStateToProps, { getCampaignById })(CampaignDetails);