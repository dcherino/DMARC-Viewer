import styled from 'styled-components';

export const EmailListWrapper = styled.main`
  grid-area: Content;
  display: flex;
  flex-direction: row;
  min-height: 600px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style; none;
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  max-height: 70vh;
`;