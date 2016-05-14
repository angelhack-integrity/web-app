import React, {PropTypes} from 'react';
import ReviewTextarea from './ReviewTextarea';

class AddReviewForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
  }  

  save() {
    this.props.saveReview(this.props.saveReview);
  }

  render() {
    const {saveReview} = this.props;

    return (
      <div>
        <h2>What did you think about the service you just witnessed ? </h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="reviewText">Review</label></td>
            <td><ReviewTextarea name="reviewText" value={saveReview.reviewText}/>
            </td>
          </tr>
          </tbody>
        </table>

        <hr/>

        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

AddReviewForm.propTypes = {
  saveReview: PropTypes.func.isRequired
};

export default AddReviewForm;
