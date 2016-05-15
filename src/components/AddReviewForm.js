import React, {PropTypes} from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { FormsyText } from 'formsy-material-ui/lib';
import LoginPage from './LoginPage';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

let styles = {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20
    },
    submitStyle: {
      marginTop: 32,
      margin: 'auto'
    },
    dividerStyle: {
      marginTop: 15,
      marginBottom: 15
    }
};

class AddReviewForm extends React.Component {
  

  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
  }  

  save() {
    this.props.saveReview(this.props.reviewState);
  }  

  render() {
    const {reviewState} = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={styles.paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="reviewText"
              validations="isWords"
              required
              hintText="What did you think about me ?"
              floatingLabelText="What did you think about me ?"
              value={reviewState.reviewText}
            />
            <RaisedButton
              onclick={this.save}
              type="submit"
              label="Submit"
              style={styles.submitStyle}
            />

            <Divider style={styles.dividerStyle} />

            <LoginPage />
            
          </Formsy.Form>          
        </Paper>        
      </MuiThemeProvider>
    );
  }
}

AddReviewForm.propTypes = {
  saveReview: PropTypes.func.isRequired,
  reviewState: PropTypes.object.isRequired
};

export default AddReviewForm;