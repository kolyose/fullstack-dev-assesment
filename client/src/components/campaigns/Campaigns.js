import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../store/actions';

import CampaignsList from './list';
import Spinner from './../spinner';

class Campaigns extends Component {
  componentDidMount() {
    this.props.getCampaigns();
  }

  render() {
    const { isLoading, campaigns } = this.props;
    return (
      <section>
        <div>
          { isLoading ? <Spinner/> : <CampaignsList campaigns={ campaigns }/>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ campaigns }) => ({
  campaigns: campaigns.list,
  isLoading: campaigns.isLoading
});

export default connect(mapStateToProps, actionCreators)(Campaigns);