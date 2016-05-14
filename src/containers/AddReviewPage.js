import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/addReviewActions';
import AddReviewForm from '../components/AddReviewForm';
// import Authentication from 'redux-authentication'

// import {connect} from 'react-redux'
// import React, { PropTypes } from 'react'
// import {goToLogin} from 'your-actions'

// @connect(state => ({
//   isAuthenticated: state.isAuthenticated
// }), {
//   goToLogin,//map to props.goToLogin props.actions.goToLogin
// })
// @Authentication

export const AddReviewPage = (props) => {
  return (
    <AddReviewForm
      reviewState={props.reviewState}
      saveReview={props.actions.saveReview}
      
    />
  );
};

AddReviewPage.propTypes = {
  actions: PropTypes.object.isRequired,
  reviewState: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    reviewState: state.reviewState
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewPage);