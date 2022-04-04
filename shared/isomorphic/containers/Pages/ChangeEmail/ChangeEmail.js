import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import FirebaseSignUpForm from '../../FirebaseForm/FirebaseForm';
import authAction from '@iso/redux/auth/actions';
import appActions from '@iso/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';
import Cookies from 'universal-cookie';
import IntlMessages from '@iso/components/utility/intlMessages';
import ChangeEmailStyleWrapper from './ChangeEmail.styles';

const { login } = authAction;
const { clearMenu } = appActions;

export default function SignUp() {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  function signUpRequest() {
    let url = authAction.LOGIN_API + 'register';
    // Inputs Object
    console.log(inputs);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    };
    //
    fetch(url, requestOptions)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          setError(result.error);
        }

        if (result.result == true) {
          //get the token and user name
          const cookies = new Cookies();
          cookies.set('name', result.data.name, { path: '/' });
          cookies.set('email', result.data.email, { path: '/' });
          cookies.set('token', result.data.token, { path: '/' });
          dispatch(login(result.token));
          dispatch(clearMenu());
          history.push('/dashboard');
        }
        if (result.errorInfo) {
          setError(result.errorInfo);
        }
        // Submit the form
        console.log(result);
      });
  }
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  const handleLogin = (token = false) => {
    console.log(token, 'handlelogin');
    // if (token) {
    //   dispatch(login(token));
    // } else {
    //   dispatch(login());
    // }
    // dispatch(clearMenu());
    // history.push('/dashboard');
  };
  return (
    <ChangeEmailStyleWrapper className="isoChangeEmail">
      <form>
        <div className="isoChangeEmailContentWrapper">
          <div className="isoChangeEmailContent">
            <div className="isoLogoWrapper">
              <h1>
                <IntlMessages id="page.signUpTitle" />
              </h1>
            </div>
            <div className="isoSignUpForm">
              <br />
              <h2>{!!error ? error : ''}</h2>

              <p></p>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Please enter your new Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
                <Checkbox>
                  <IntlMessages id="page.signUpTermsConditions" />
                </Checkbox>
              </div>

              <div className="isoInputWrapper">
                <Button type="primary">
                  <IntlMessages id="page.changeEmailButton" />
                </Button>
              </div>
              <div className="isoInputWrapper isoOtherLogin"></div>
            </div>
          </div>
        </div>
      </form>
    </ChangeEmailStyleWrapper>
  );
}
