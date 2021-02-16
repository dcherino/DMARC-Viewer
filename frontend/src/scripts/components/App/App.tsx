/* eslint no-console: 0 */

import React from 'react';
import { AppProps } from '../../types';
import Header from '../Header/Header';
import EmailList from '../EmailList/EmailList';
import { GridContainer } from './App.styles';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import Analytics from '../Analytics/Analytics';

const App = ({ data }: AppProps) => {
  return (
    <GridContainer>
      <Header />
      <Title counts={data.counts} />
      <Analytics data={data} />
      <EmailList data={data} />
      <Footer />
    </GridContainer>
  );
};

export default App;
