import React, {PropTypes} from 'react';

const ReviewTextarea = (props) => {
  return (
    <textarea
      className="medium"
      placeholder={props.placeholder}>
      {props.value}
      </textarea>
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
