import React from 'react';
import {
    CloseButton,
    ImageContainer,
    ImageFrameLargeContainer,
    ImageFrameLargeResponsiveContainer,
    StyledImCross
} from "./imageFrameLarge.styles";
import {Link} from 'react-router-dom'

interface IImageFrameLarge {
    image: string;
    altText: string;
    linkTo: string;
}

const ImageFrameLarge: React.FC<IImageFrameLarge> = ({image, altText, linkTo}) => {
    return (
        <ImageFrameLargeContainer>
            <ImageFrameLargeResponsiveContainer>
                <ImageContainer imageUrl={image} role="img" aria-label={altText}>
                    <CloseButton>
                        <Link to={`${linkTo}`}><StyledImCross/></Link>
                    </CloseButton>
                </ImageContainer>
            </ImageFrameLargeResponsiveContainer>
        </ImageFrameLargeContainer>

    );
};

export default ImageFrameLarge;
