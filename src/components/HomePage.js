import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Paper} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';

let style = {
	containerStyle: {
		width: 300,
		margin: 'auto',
		padding: 20
	}
};

const HomePage = () => {
  return (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Paper style={style.containerStyle}>      
      <List>
      <Subheader>Recent reviews</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="https://placekitten.com/200/100" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="https://placekitten.com/100/100" />}
        rightIcon={<SocialSentimentVeryDissatisfied />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="https://placekitten.com/200/300" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="https://placekitten.com/250/300" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="https://placekitten.com/100/300" />}
        rightIcon={<SocialSentimentVeryDissatisfied />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Previous reviews</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="https://placekitten.com/200/200" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="https://placekitten.com/200/100" />}
      />
    </List>
    </Paper>  
    </MuiThemeProvider>
  );
};

export default HomePage;
