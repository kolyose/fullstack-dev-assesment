import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './../modal';

class ErrorBoundary extends Component {
  state = { hasErrorOccured: false };

  componentDidCatch(error) {
    this.setState({ hasErrorOccured: true });
    console.error(error);
  }

  render() {
    if (this.state.hasErrorOccured || this.props.hasErrorOccured) {
      return (
        <Modal title="Error!">
          <h2>{ this.props.errorMessage || "Something went wrong. Please, reload the page" }</h2>
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