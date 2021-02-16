import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 82px 165px 260px minmax(0, 1fr) 100px;

  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Title'
    'Analytic'
    'Chart'
    'Content'
    'Footer';
`;
