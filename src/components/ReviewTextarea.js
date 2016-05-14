import React, {PropTypes} from 'react';

const ReviewTextarea = (props) => {
  return (
    <textarea
      className="large"
      placeholder={props.placeholder}
      defaultValue={props.value}
      />
  );
};

ReviewTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default ReviewTextarea;
