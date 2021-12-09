import styled from 'styled-components';


export const ProductPageLargeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`
