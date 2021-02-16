import styled from 'styled-components';

export const TitleWrapper = styled.div`
  grid-area: Title;
  background-color: #f5f7f7;
  border-bottom: 1px solid #e1e1e1;
  padding: 0.4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #555;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #cbcbcb;
    margin: 0;
  }
`;