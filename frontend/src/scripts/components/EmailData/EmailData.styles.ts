import styled from 'styled-components';
import bckg1 from '../../../assets/backgrounds/background-1.jpg';
import bckg2 from '../../../assets/backgrounds/background-2.jpg';
import bckg3 from '../../../assets/backgrounds/background-3.jpg';

export const EmailDataWrapper = styled.div`
  background-color: #fff;
  flex: 0 0 auto;
  width: 0;
  transition: 0.4s;
  overflow: hidden;
  margin-right: 2rem;

  &.opened {
    width: calc(50% - 2rem);
  }
`;

interface BackgroundProps {
  backgroundImg: string;
}

export const Background = styled.div<BackgroundProps>`
  background-image: url('${p => p.backgroundImg}');
  background-color: #e5eaeb;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  height: 170px;

  button {
    border: 0;
    background: none;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    display: block;
    margin: 0rem 2rem 1rem auto;
    padding: 1rem;
    cursor: pointer;
    position: relative;
    color: #fff;
  }
`;

export const DmarcInfo = styled.div`
  background-color: #e5eaeb;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: 555;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  span::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 1rem;
  }

  .pass::before {
    background-color: lightgreen;
  }

  .no-pass::before {
    background-color: red;
  }
`;

export const LetterInfo = styled.div`
  padding: 2 rem;
  font-family: 'Lato', sans-serif;
  color: #fff;

  div {
    border-radius: 50%;
    background-color: #1d89cf;
    font-size: 3rem;
    color: #fff;
    padding: 1rem;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #1d89cf;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #fff;
  height: 60px;
`;

export const BodyInfo = styled.div`
  padding: 1rem 2rem;
  overflow-wrap: anywhere;
`;
