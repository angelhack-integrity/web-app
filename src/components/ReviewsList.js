import React, {PropTypes} from 'react';
// import NumberFormatter from '../businessLogic/numberFormatter';

const ReviewsList = ({reviews}) => {
  return (
    <table>
      <tbody>
      <tr>
        <td className="review-label">{reviewLabel}</td>
        <td>
          <table>
            <tbody>
            <tr>
              <td>Review Text</td>
              <td>Review Rating</td>
              <td>User</td>
            </tr>
            <tr>
              <td className={savingsClass}>{reviews.text}</td>
              <td className={savingsClass}>{reviews.rating}</td>
              <td className={savingsClass}>{reviews.user}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.object.isRequired
};

export default ReviewsList;
