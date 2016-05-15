import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Menu, MenuItem, Paper } from 'material-ui';


let styles = {
    menuStyle: {
      width: 300,
      marginLeft: 30,
      textAlign: 'center',
      cssFloat: 'left'
    },
    menuContainer: {
      width: 200,
      margin: 'auto'
    }
};

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
    <Paper style={styles.menuContainer}>
      <Menu desktop={true} autoWidth={false} style={styles.menuStyle}>
        <MenuItem>
          <IndexLink to="/">Home</IndexLink>
        </MenuItem>
        <MenuItem>
          <Link to="/add-review">Add a review</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
      </Menu>
      </Paper>
      {props.children}      
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
