import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const ModalWrapper = ({ open, children, classes }) => (
  <Modal open={ open }>
    <div className={ classes.root }>
      { children }
    </div>
  </Modal>
);

ModalWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default withStyles(styles)(ModalWrapper);