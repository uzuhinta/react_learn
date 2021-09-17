import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';

const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn(props) {
  return (
    <div>
      <h3 className="text-center">Login form</h3>
      <StyledFirebaseAuth
        uiCallback={(ui) => ui.disableAutoSignIn()}
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
