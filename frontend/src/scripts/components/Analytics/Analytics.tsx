import React from 'react';
import { AppProps } from '../../types';
import { AnalyticsWrapper, AnalyticBox } from './Analytics.styles';

const Analytics = ({data}: AppProps) => {
  const numberDmarcPass = data.messages.filter(message => message.headerData.DKIM !== null && message.headerData.SPF !== null).length;
  const emailsFromArray = data.messages.map(message => message.from && message.from.email);
  const uniquesEmailsFrom = emailsFromArray.filter((email, i, array) => array.indexOf(email) === i);
  const hasAttachments = data.messages.filter(message => message.hasAttachment);

  return (
    <AnalyticsWrapper>
      <AnalyticBox color='00bcd4'>
        <p>{data.messages.length}</p>
        <span>New messages</span>
      </AnalyticBox>

      <AnalyticBox color='1d89cf'>
        <p>{numberDmarcPass}</p>
        <span>Valid DMARC</span>
      </AnalyticBox>

      <AnalyticBox color='8bc34a'>
        <p>{uniquesEmailsFrom.length}</p>
        <span>Senders</span>
      </AnalyticBox>

      <AnalyticBox color='a767dd'>
        <p>{hasAttachments.length}</p>
        <span>Contain Attachment</span>
      </AnalyticBox>

      <AnalyticBox color='ffc700'>
        <p>{data.counts.wordTotal}</p>
        <span>Words total</span>
      </AnalyticBox>
    </AnalyticsWrapper>
  );
};

export default Analytics;
