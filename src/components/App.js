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
    },
    linkStyle: {
      textDecoration: 'none'
    }
};

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
    <Paper style={styles.menuContainer}>
      <Menu desktop={true} autoWidth={false} style={styles.menuStyle}>
        <MenuItem>
          <IndexLink to="/" style={styles.linkStyle}>Home</IndexLink>
        </MenuItem>
        <MenuItem>
          <Link to="/add-review" style={styles.linkStyle}>Add a review</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" style={styles.linkStyle}>About</Link>
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
