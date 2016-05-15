import React, {PropTypes} from 'react';
import ReviewsList from './ReviewsList';

const HomePage = (props) => {
  return (
      <ReviewsList reviews={props.reviews}/>
  );
};

HomePage.propTypes = {
  reviews: PropTypes.object.isRequired
};

export default HomePage;
