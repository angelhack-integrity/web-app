import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response); //todo save state
};

const LoginPage = () => {
  return (
     <FacebookLogin
        appId="1604112079901556"
        autoLoad={true}
        callback={responseFacebook}
        size="small"
        icon="fa-facebook" />
  );
};

export default LoginPage;
