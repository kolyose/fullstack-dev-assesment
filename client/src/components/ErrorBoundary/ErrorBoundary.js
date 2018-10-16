import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './../modal';
import Typography from '@material-ui/core/Typography';

class ErrorBoundary extends Component {
  state = { hasErrorOccured: false };

  componentDidCatch(error) {
    this.setState({ hasErrorOccured: true });
    console.error(error);
  }

  render() {
    const { hasErrorOccured, errorMessage } = this.props;
    if (this.state.hasErrorOccured || hasErrorOccured) {
      return (
        <Modal open>
          <Typography variant="h5" align="center" color="error" gutterBottom>Error!</Typography>
          <Typography variant="h6" align="center" gutterBottom>
            { errorMessage || "Something went wrong." }
          </Typography>
          <Typography variant="caption" align="center"> Please, reload the page </Typography>
        </Modal>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ root }) => ({
  hasErrorOccured: root.hasErrorOccured,
  errorMessage: root.errorMessage
});

export default connect(mapStateToProps)(ErrorBoundary);