import styled from 'styled-components';
import {ImCross} from "react-icons/im";

interface IImageFrameLargeContainer {
    imageUrl: string;
}

export const ImageFrameLargeContainer = styled.div`
  width: 400px;
  display: block;
  @media (max-width: 768px) {
    height: 400px;
  }
`

export const ImageFrameLargeResponsiveContainer = styled.div`
  position: relative;
`

export const ImageContainer = styled.div<IImageFrameLargeContainer>`
  top: 0;
  width: 100%;
  padding-bottom: 100%;
  position: absolute;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 10%;
`

export const StyledImCross = styled(ImCross)`
  fill: rgba(85, 85, 85, 0.7);

  :hover {
    transition-duration: 300ms;
    fill: rgba(85, 85, 85, 1);
  }

`
