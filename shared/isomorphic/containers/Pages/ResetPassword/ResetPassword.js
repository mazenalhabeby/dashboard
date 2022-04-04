import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import ResetPasswordStyleWrapper from './ResetPassword.styles';
import Cookies from 'universal-cookie';
import authAction from '@iso/redux/auth/actions';
const cookies = new Cookies();
export default function() {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function changePasswordRequest() {
    let url = authAction.LOGIN_API + 'changePassword';
    let token = cookies.get('token');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(inputs),
    };
    fetch(url, requestOptions)
      .then(res => res.json())
      .then(
        result => {
          if (result.result) {
            //get the token and user name
            // history.push('/profile');
            setError(result.result);
          }

          if (result.error) {
            setError(result.error);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          // if(result.error){
          //   setError(result.error);
          // }
        }
      );
  }
  return (
    <ResetPasswordStyleWrapper className="isoResetPassPage">
      <div className="isoFormContentWrapper">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.resetPassTitle" />
            </Link>
          </div>

          <div className="isoFormHeadText">
            <h3>
              <IntlMessages id="page.resetPassSubTitle" />
            </h3>
            <h2>{!!error ? error : ''}</h2>
            <p>
              <IntlMessages id="page.resetPassDescription" />
            </p>
          </div>

          <div className="isoResetPassForm">
            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                placeholder="Old Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                name="newpassword"
                placeholder="New Password"
                onChange={handleChange}
              />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                name="newpasswordconfirm"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary" onClick={changePasswordRequest}>
                <IntlMessages id="page.resetPassSave" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ResetPasswordStyleWrapper>
  );
}
