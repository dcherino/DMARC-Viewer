import styled from 'styled-components';
import curve from '../../../assets/analytic-curve.svg';

interface AnalyticBoxProps {
  color: string;
}

export const AnalyticsWrapper = styled.div`
  gird-area: Analytics;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
`;

export const AnalyticBox = styled.div<AnalyticBoxProps>`
  background-image: url(${curve});
  background-repeat: no-repeat;
  background-position: center 80%;
  background-size: contain;
  background-color: #${(p) => p.color};
  flex: 1 0 auto;
  flex-basis: 0;
  margin: 1rem;
  border-radius: 3px;
  font-family: 'Lato', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  &:nth-child(1) {
    margin-left: 0;
  }

  &::nth-child(5) {
    margin-right: 0;
  }

  p {
    font-size: 2.4rem;
    font-weight: 400;
    margin: 0;
  }

  span {
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.65;
  }
`;
