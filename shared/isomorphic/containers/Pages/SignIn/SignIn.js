import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import FirebaseLoginForm from '../../FirebaseForm/FirebaseForm';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';
import Cookies from 'universal-cookie';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithTwitter,
} from '@iso/lib/firebase/firebase.authentication.util';
import SignInStyleWrapper from './SignIn.styles';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  const [error, setError] = useState(null);
  let history = useHistory();
  let location = useLocation();
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  function signUpRequest() {
    let url = authAction.LOGIN_API + 'login';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    };
    fetch(url, requestOptions)
      .then(res => res.json())
      .then(
        result => {
          if (result.token) {
            //get the token and user name
            const cookies = new Cookies();
            cookies.set('username', result.user.username, { path: '/' });
            cookies.set('name', result.user.name, { path: '/' });
            cookies.set('email', result.user.email, { path: '/' });
            cookies.set('token', result.token, { path: '/' });
            dispatch(login(result.token));
            dispatch(clearMenu());
            history.push('/dashboard');
          }

          if (result.error) {
            setError(result.error);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          if (result.error) {
            setError(result.error);
          }
        }
      );
  }
  function handleLogin(e, token = false) {
    e.preventDefault();

    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/dashboard');
  }
  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <h2>{!!error ? error : ''}</h2>
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Username"
                  autoComplete="true"
                  name="username"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="false"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={signUpRequest}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
            </form>
            <div className="isoInputWrapper isoOtherLogin">
              {/* <Button
                onClick={signInWithFacebook}
                type="primary"
                className="btnFacebook"
              >
                <IntlMessages id="page.signInFacebook" />
              </Button>
              <Button
                onClick={signInWithGoogle}
                type="primary"
                className="btnGooglePlus"
              >
                <IntlMessages id="page.signInGooglePlus" />
              </Button> */}

              {/* <Button
                onClick={() => {
                  Auth0.login();
                }}
                type="primary"
                className="btnAuthZero"
              >
                <IntlMessages id="page.signInAuth0" />
              </Button> */}

              {/* <FirebaseLoginForm
                history={history}
                login={token => dispatch(login(token))}
              /> */}
            </div>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>

              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
