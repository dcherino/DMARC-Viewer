import styled from 'styled-components';

export const GridContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 82px minmax(0, 1fr) 100px;

  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Title'
    'Content'
    'Footer';
`;
