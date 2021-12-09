import styled from 'styled-components';

export const ProductInformationContainer = styled.div`
  height: 55vw;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`

export const NameContainer = styled.div`
  font-family: union, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  overflow: hidden;
  text-align: left;
  color: #000;
  display: -webkit-box;
  max-width: 272px;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  height: auto;
`

export const CostContainer = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`

export const SwatchesContainer = styled.div`
  display: flex;
`

export const Swatches = styled.img`
  margin-right: 5px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`

export const SizesContainer = styled.div`
  display: flex;
`

export const Sizes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid black;
  margin-right: 5px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`
