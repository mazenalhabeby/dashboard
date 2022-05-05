import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Buy LOP</h1>
          <p>
            You can buy here ssssLOP tokens, our current price is 0.015$ BUSD per 1
            LOP token.
          </p>
          <button>Buy Now</button>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
