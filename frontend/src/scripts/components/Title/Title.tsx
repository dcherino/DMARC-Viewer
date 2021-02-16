import React from 'react';
import { useTranslation } from 'react-i18next';
import { TitleWrapper } from './Title.styles';

interface TitleProps {
  counts: {
    messageTotal: number;
    wordTotal: number;
    wpmTotal: number;
  };
}
const Title = ({ counts }: TitleProps) => {
  const { t } = useTranslation(['app']);

  return (
    <TitleWrapper>
      <h2>{t('app:title-home')}</h2>
      <h3>{t('app:description-home')}</h3>
    </TitleWrapper>
  );
};

export default Title;
