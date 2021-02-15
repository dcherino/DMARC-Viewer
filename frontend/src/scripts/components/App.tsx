/* eslint no-console: 0 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppProps } from '../types'

const App = ({ data }: AppProps) => {
  const { t } = useTranslation(['app']);
  const { counts, messages } = data;

  return (
    <div>
      <h1>{t('app:title-home')}</h1>
      <h4>{t('app:description-home', { count: counts.messageTotal })}</h4>

      {messages.map((m, key) => {
        console.log(m)
        return (
        <div key={key}>
          <p>{m.subject}</p>
        </div>
      )})}
    </div>
  );
};

export default App;
