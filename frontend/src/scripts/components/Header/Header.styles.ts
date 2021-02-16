import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  grid-area: Header;

  h1 {
    font-family: 'Lato', sans-serif;
    font-size: 1.4rem;
    color: #555;
    font-weight: 400;
    margin: 0;
  }
`;

export const TopBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e4e6e7;
  box-shadow: 0px 3px 8px #eceeef;
  padding: 0 2rem;
  height: 58px;
  display: flex;
  align-items: center;
`;