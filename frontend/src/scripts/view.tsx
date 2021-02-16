/**
 * React Dmarc Sift. Frontend view entry point.
 */
import { SiftView, registerSiftView } from '@redsift/sift-sdk-web';
import React from 'react';
import { render } from 'react-dom';

// import { I18nextProvider } from 'react-i18next';
import './libs/i18n';

import App from './components/App/App';

export default class MyView extends SiftView {
  constructor() {
    super();

    this.controller.subscribe('dataUpdate', this.onDataUpdate.bind(this));
  }

  onDataUpdate(data: any) {
    this.presentView({ data });
  }

  presentView(value: { data?: any }) {
    const { data } = value || {};

    render(
      <App data={data} />,
      document.querySelector('#root')
    );
  }
}

registerSiftView(new MyView());
