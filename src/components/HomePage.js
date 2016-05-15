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
import SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied'

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
        primaryText="Colin Sabin"
        secondaryText="Was very impressed with the service I got. You made a very difficult time easier to cope with. Left it all to you and you did a brilliant job  thankyou. My dad would've been proud of the way you looked after him. Thankyou very much xx "
        leftAvatar={<Avatar src="https://placekitten.com/200/100" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Neil Wakefield"
        secondaryText="Excellent service, very proficient & very friendly"
        leftAvatar={<Avatar src="https://placekitten.com/100/100" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Michael Whittaker"
        secondaryText="compassionate understanding always willing to help, very friendly staff at at all times."
        leftAvatar={<Avatar src="https://placekitten.com/200/300" />}
        rightIcon={<SocialSentimentVerySatisfied />}
      />
      <ListItem
        primaryText="Paul Ellis"
        secondaryText="Very Good"
        leftAvatar={<Avatar src="https://placekitten.com/250/300" />}
        rightIcon={<SocialSentimentSatisfied />}
      />
      <ListItem
        primaryText="Kate Kumra"
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
