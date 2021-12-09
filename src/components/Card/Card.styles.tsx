import styled from 'styled-components';

interface ICardItemStyles {
    imageUrl: string
    rollOver?: string
}

export const CardItemContainer = styled.div`
  width: 100%;
`

export const CardBackgroundImage = styled.div<ICardItemStyles>`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  min-height: 360px;
  width: 100%;
  min-width: 300px;
  margin-bottom: 8px;
  transition-duration: 0.2s;

  :hover {
    background-image: ${({rollOver}) => rollOver && `url(${rollOver})`};
  }
`

export const CardTitle = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  max-width: 100%;
  color: #000;
  letter-spacing: 0.1px;
  font-size: 14px;
  line-height: 1.4;
  font-family: "union", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`

export const CardPrice = styled.div`
  margin-bottom: 8px;
  color: #000;
  min-height: 1.5em;
  font: normal normal 700 14px/120% "union", Arial, Helvetica, sans-serif;
`
