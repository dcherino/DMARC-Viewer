import React, { useEffect, useState } from 'react';
import { Message } from '../../types';
import parseDate from '../../utils/parseDate';
import { EmailItemWrapper, Letter, Info, DateInfo } from './EmailItem.styles';

interface EmailItemProps {
  handleClick: (message: Message) => void;
  message: Message;
}

const colors = [
  '6f3be1',
  '6e4a27',
  '4e7818',
  'd12587',
  '72dfa4',
  '2c184b',
  'dac149',
];

const EmailItem = ({ message, handleClick }: EmailItemProps) => {
  const [color, setColor] = useState('dddddd');
  const initial = message.from && message.from.name[0];

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * Math.floor(colors.length));

    setColor(colors[randomNumber]);
  }, []);

  return (
    <EmailItemWrapper key={message.id} onClick={() => handleClick(message)}>

      {initial && <Letter color={color}>{initial}</Letter>}

      <Info>
        {message.from ? (
          <div>
            {message.from.name} <em>{message.from.email}</em>
          </div>
        ) : (
          <div>No name</div>
        )}
        <strong>{message.subject}</strong>
      </Info>

      <DateInfo>{parseDate(message.date)}</DateInfo>
    </EmailItemWrapper>
  );
};

export default EmailItem;
