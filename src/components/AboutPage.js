import React from 'react';
import '../styles/about-page.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

let styles = {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
  }
}

const AboutPage = () => {
  return (
  	<MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={styles.paperStyle}>
        <div>
		  <h2 className="alt-header">Are you thinking about taking this wonderful project further ?</h2>
		  <p>
			<a href="https://github.com/angelhack-integrity/web-app">Click this bad link</a> to see the project source.
	      </p>
	    </div>
        </Paper>
    </MuiThemeProvider>    
  );
};

export default AboutPage;
