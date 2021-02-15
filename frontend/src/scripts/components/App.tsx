/* eslint no-console: 0 */

import React from 'react';
// import { translate } from 'react-i18next';
import { useTranslation } from 'react-i18next';
interface Message {
  subject: string;
}
interface Data {
  counts: {
    messageTotal: number;
    wordTotal: number;
    wpmTotal: number;
  };
  messages: Array<Message>;
}
interface AppProps {
  data: Data;
}

const App = ({ data }: AppProps) => {
  const { t } = useTranslation();
  const { counts, messages } = data;
  return (
    <div>
      <h1>{t('app:title-home')}</h1>
      <h4>{t('app:description-home', { count: counts.messageTotal })}</h4>
      {messages.map((m, key) => (
        <div key={key}>
          <p>{m.subject}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
