import styled from 'styled-components';

interface LetterProps {
  color: string;
}

export const Letter = styled.div<LetterProps>`
  background-color: #${(p) => p.color};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0.5rem;
  margin-right: 2rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  text-align: center;
  text-transform: uppercase;
  flex: 0 0 auto;
`;

export const EmailItemWrapper = styled.li`
  background-color: #fff;
  padding: 1rem 2rem 1rem;
  margin: 0 2rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Info = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #555;
  flex: 1 1 auto;

  em {
    display: block;
    color: #a5a5a5;
  }

  strong {
    padding: 0.5rem 0 0;
    display: block;
  }
`;

export const DateInfo = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #555;
  flex: 0 0 auto;
`;
