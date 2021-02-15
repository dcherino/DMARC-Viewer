/**
 * React Dmarc Sift. Frontend view entry point.
 */
import { SiftView, registerSiftView } from '@redsift/sift-sdk-web';
import React from 'react';
import { render } from 'react-dom';

// import { I18nextProvider } from 'react-i18next';
import './libs/i18n';

import App from './components/App';

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
      // <I18nextProvider i18n={i18n}>
      <App data={data} />,
      // </I18nextProvider>,
      document.querySelector('#root')
    );
  }
}

registerSiftView(new MyView());
