import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/login">Login</Link>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
