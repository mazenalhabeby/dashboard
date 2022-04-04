import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Stepper } from 'react-form-stepper';
import Steps from 'react-simple-steps';
import 'bootstrap/dist/css/bootstrap.css';
import './steps.css';
import './steps.js';
import firebaseConfig from '@iso/config/firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default class extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        console.log(userData);
        this.setState({
          currentUser: userData.email,
        });
      }
    });
  }

  constructor(props) {
    super();
    this.state = { currentUser: '' };
  }

  render() {
    let button;
    console.log(cookies.get('status'));
    if (cookies.get('status') == 'Success') {
      button = (
        <button
          class="btn btn-outline-info bbtn-sm profile-button"
          type="button"
        >
          Success
        </button>
      );
    } else {
      button = (
        <Link to={'/dashboard/activation'}>
          <button
            class="btn btn-outline-warning bbtn-sm profile-button"
            type="button"
          >
            Pending
          </button>
        </Link>
      );
    }
    return (
      <div className="instructions">
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-12 ">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile</h4>
                </div>
                <div class="row mt-">
                  <div class="col-md-12">
                    <label class="labels">
                      Username : {cookies.get('username')}{' '}
                    </label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">
                      {' '}
                      Full Name : {cookies.get('username')}{' '}
                    </label>
                  </div>
                </div>
                <div class="row mt-">
                  <div class="col-md-4">
                    <label class="labels">Activation Status </label>
                  </div>
                  <div class="col-md-2">{button}</div>
                </div>
                <br />
                <div class="row mt-">
                  <div class="col-md-4">
                    <label class="labels">Email {cookies.get('email')} </label>
                  </div>
                  <div class="col-md-2">
                    <button
                      class="btn btn-outline-primary bbtn-sm profile-button"
                      type="button"
                    >
                      Change
                    </button>
                  </div>
                </div>
                <br />
                <div class="row mt-">
                  <Link to={'/resetpassword'}>
                    <button
                      class="btn btn-primary profile-button"
                      type="button"
                    >
                      Change Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
