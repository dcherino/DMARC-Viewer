import React, { useState } from 'react';
import { AppProps, Message } from '../../types';
import EmailData from '../EmailData/EmailData';
import EmailItem from '../EmailItem/EmailItem';
import { EmailListWrapper, List } from './EmailList.styles';

const EmailList = ({ data }: AppProps) => {
  const [emailSelected, setEmailSelected] = useState<Message | null>(null);
  const [isEmailOpened, setIsEmailOpened] = useState<boolean>(false);
  const { messages } = data;
  const sortedMessages = messages.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

  const handleClick = (email: Message) => {
    setEmailSelected(email);
    setIsEmailOpened(true);
  };

  const closeEmailDetail = () => setIsEmailOpened(false);

  return (
    <EmailListWrapper>
      <List>
        {sortedMessages.map((message) => (
          <EmailItem
            key={message.id}
            message={message}
            handleClick={handleClick}
          />
        ))}
      </List>

      <EmailData
        opened={isEmailOpened}
        emailInfo={emailSelected}
        closeEmailDetail={closeEmailDetail}
      />
    </EmailListWrapper>
  );
};

export default EmailList;
