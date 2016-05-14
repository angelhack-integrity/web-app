import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/addReviewActions';
import AddReviewForm from '../components/AddReviewForm';

export const AddReviewPage = (props) => {
  return (
    <AddReviewForm
      saveReview={props.actions.saveReview}
    />
  );
};

AddReviewPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapDispatchToProps
)(AddReviewPage);
