import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Stepper } from 'react-form-stepper';
import Steps from 'react-simple-steps';
import 'bootstrap/dist/css/bootstrap.css';
import './steps.css';
import './steps.js';

export default class extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src =
      'https://cdn.blockpass.org/widget/scripts/release/3.0.0/blockpass-kyc-connect.prod.js';
    script.async = true;
    //script.onload = () => this.scriptLoaded();
    document.getElementsByTagName('head')[0].appendChild(script);
    //  document.body.appendChild(script);

    script.onload = function() {
      const blockpass = new BlockpassKYCConnect('league_of_pharaohs_ef112', {
        env: 'prod',
        local_user_id: Date.now(),
      });

      blockpass.startKYCConnect();

      blockpass.on('KYCConnectSuccess', () => {
        //add code that will trigger when data have been sent. ex:
        //alert('Success!')
      });

      blockpass.on('KYCConnectClose', () => {
        //add code that will trigger when the workflow is finished. ex:
        //alert('Finished!')
      });

      blockpass.on('KYCConnectCancel', () => {
        //add code that will trigger when the workflow is aborted. ex:
        //alert('Cancelled!')
      });
    };
  }

  scriptLoaded() {
    window.sort();
  }

  constructor(props) {
    super(props);
    this.step = 0;
    this.lop = 0;
    this.kyc = 0;

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // Binding this keyword
    this.handlHideStepOneHide = this.handlHideStepOneHide.bind(this);
    this.handlHideStepTwoHide = this.handlHideStepTwoHide.bind(this);
    this.handlHideStepFinalHide = this.handlHideStepFinalHide.bind(this);
    this.handltepTwoHide = this.handltepTwoHide.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.confirmUpload = this.confirmUpload.bind(this);

    this.handelBack = this.handelBack.bind(this);
    this.state = {
      hideStepOne: false,
      hideStepTwo: false,
      hideStepFinal: false,
      errors: '',
    };
  }

  setErrorMessage(msg) {
    this.setState({ errors: msg });
  }

  handlHideStepOneHide(bool) {
    // Changing state
    this.setState({ hideStepOne: bool });
  }
  handlHideStepTwoHide(bool) {
    this.setState({ hideStepTwo: bool });
  }
  handltepTwoHide(bool) {
    this.setState({ hideStepTwo: bool });
  }
  handlHideStepFinalHide(bool) {
    this.setState({ hideStepFinal: bool });
  }
  //

  confirmUpload() {
    this.handlHideStepOneHide(true);
    this.handlHideStepTwoHide(false);
    this.handlHideStepFinalHide(true);
    this.setErrorMessage('');
    this.step = this.step + 1;
  }

  handleClick() {
    // check if the Terms check or no
    if (this.step == 0) {
      if (this.lop == 1 && this.kyc == 1) {
        // hide step one
        this.handlHideStepOneHide(true);
        this.handlHideStepTwoHide(true);
        // show step two
        this.step = this.step + 1;
        this.setErrorMessage('');
      } else {
        this.setErrorMessage('Please accept terms and conditions !');
      }
    } else {
      // step 2 and 3
      if (this.step == 1) {
        this.setErrorMessage('Confirm docuemnt upload !');
      }
      if (this.step == 2) {
        this.handlHideStepOneHide(true);
        this.setErrorMessage('');
        this.handltepTwoHide(false);
        this.step = this.step + 1;
      }
    }
  }

  handelBack() {
    if (this.step == 1) {
      this.handlHideStepTwoHide(false);
      this.handlHideStepOneHide(false);
      this.handlHideStepFinalHide(false);
      this.step = this.step - 1;
    }
    if (this.step == 2) {
      this.handlHideStepTwoHide(false);
      this.handlHideStepOneHide(false);
      this.handlHideStepFinalHide(false);
      this.step = this.step - 1;
    }
    if (this.step == 3) {
      this.handlHideStepTwoHide(true);
      this.handlHideStepFinalHide(false);
      this.handlHideStepOneHide(true);
      this.step = this.step - 1;
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    const checked = e.target.checked;
    if (checked) {
      if (name == 'lop') {
        this.lop = 1;
      }
      if (name == 'kyc') {
        this.kyc = 1;
      }
    } else {
      if (name == 'lop') {
        this.lop = 0;
      }
      if (name == 'kyc') {
        this.kyc = 0;
      }
    }
  };

  render() {
    return (
      <div class="ActivationText">
        <Steps
          title="Activation"
          steps={['Step One', 'Step Two ', 'Activation']}
          disabled={this.stepsToggole}
          current={this.step}
        />

        <div
          className={
            'card-body ' + (this.state.hideStepOne ? 'hidden' : 'show')
          }
        >
          <h5 class="card-title terms1">
            {' '}
            Please read the following terms and conditions and accept
          </h5>

          <h6 class="card-subtitle mb-2  errorMsg">{this.state.errors}</h6>
          <div class="input-group mb-3 ">
            <div class="input-group-prepend ">
              <div class="input-group-text ActivationTerms">
                <input
                  class="VerificationCheckbox"
                  type="checkbox"
                  value="lop"
                  name="lop"
                  onChange={this.handleChange}
                  aria-label="Checkbox for following text input"
                />
                <label>I agree on the terms and conditions of LOP</label>
              </div>
              <div class="input-group-text ActivationTerms">
                <input
                  class="VerificationCheckbox"
                  type="checkbox"
                  value="kyc"
                  name="kyc"
                  onChange={this.handleChange}
                  aria-label="Checkbox for following text input"
                />
                <p>Agree to verify by documents for KYC</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            'card-body ' + (this.state.hideStepTwo ? 'show' : 'hidden')
          }
        >
          <h5 class="card-title"> Attach Documents</h5>

          <h6 class="card-subtitle mb-2  errorMsg"> {this.state.errors} </h6>

          <button
            id="blockpass-kyc-connect"
            type="button"
            class="btn btn-success btn-lg ActivationTerms"
          >
            Upload Documents
          </button>

          <p>Did you Upload documents !?</p>
          <button
            type="button"
            class="btn btn-danger btn"
            onClick={() =>
              this.setErrorMessage('Please upload your documents !')
            }
          >
            No
          </button>
          <span> </span>
          <button
            type="button"
            onClick={this.confirmUpload}
            class="btn btn-success btn"
          >
            Yes
          </button>
        </div>
        <div
          className={
            'card-body ' + (this.state.hideStepFinal ? 'show' : 'hidden')
          }
        >
          <h5 class="card-title "> Activation</h5>

          <h6 class="card-subtitle mb-2 text-muted danger"> </h6>

          <p>Waiting for activation </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col text-center ">
              {/* <button type="button" class="btn btn-info btn-lg" onClick={this.handelBack} >Back</button> */}

              <button
                type="button"
                class="btn btn-primary btn-lg ActivationButton"
                onClick={this.handleClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
