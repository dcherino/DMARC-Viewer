import React, { useEffect, useState } from 'react';
import { Message } from '../../types';
import {
  Background,
  EmailDataWrapper,
  DmarcInfo,
  LetterInfo,
  HeaderInfo,
  BodyInfo,
} from './EmailData.styles';
import bckg1 from '../../../assets/backgrounds/background-1.jpg';
import bckg2 from '../../../assets/backgrounds/background-2.jpg';
import bckg3 from '../../../assets/backgrounds/background-3.jpg';

interface EmailDataProps {
  emailInfo: Message | null;
  opened: boolean;
  closeEmailDetail: () => void;
}

const backgrounds = [bckg1, bckg2, bckg3];

const EmailData = ({ emailInfo, opened, closeEmailDetail }: EmailDataProps) => {
  const [backgroundImg, setBackgroundImg] = useState(bckg1);

  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * Math.floor(backgrounds.length)
    );

    setBackgroundImg(backgrounds[randomNumber]);
  }, [emailInfo]);

  return (
    <EmailDataWrapper className={opened ? 'opened' : ''}>
      <Background backgroundImg={backgroundImg}>
        <button onClick={closeEmailDetail}>CLOSE X</button>

        {emailInfo && (
          <LetterInfo>
            <div>{emailInfo.from ? emailInfo.from.name[0] : 'U'}</div>
          </LetterInfo>
        )}
      </Background>

      {emailInfo && (
        <>
          <HeaderInfo>
            <div>From: {emailInfo.from ? emailInfo.from.name : ''}</div>
            <div>Email: {emailInfo.from ? emailInfo.from.email : ''}</div>
            <div>
              {emailInfo.cc &&
                emailInfo.cc.map((el) => <span>{el.email}</span>)}
            </div>
            <div>
              {emailInfo.bcc &&
                emailInfo.bcc.map((el) => <span>{el.email}</span>)}
            </div>
            <div>Subject: {emailInfo.subject && emailInfo.subject}</div>
          </HeaderInfo>
          <DmarcInfo>
            <div>
              {emailInfo.headerData.DKIM === 'pass' ? (
                <span className="pass">Pass DKIM validation</span>
              ) : (
                <span className="no-pass">DKIM validation invalid </span>
              )}
            </div>

            <div>
              {emailInfo.headerData.SPF === 'pass' ? (
                <span className="pass">Pass SPF validation</span>
              ) : (
                <span className="no-pass">SPF validation invalid</span>
              )}
            </div>

            <div>
              {emailInfo.headerData.SPF === 'pass' &&
              emailInfo.headerData.DKIM === 'pass' ? (
                <span className="pass">Pass DMARC validation</span>
              ) : (
                <span className="no-pass">DMARC validation invalid</span>
              )}
            </div>
          </DmarcInfo>

          <BodyInfo>{emailInfo.body}</BodyInfo>
        </>
      )}
    </EmailDataWrapper>
  );
};

export default EmailData;
