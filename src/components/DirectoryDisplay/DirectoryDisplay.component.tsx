import React from 'react';
import {DirectoryDisplayContainer, Image, ImageContainer} from "./DirectoryDisplay.styles";
import {Link} from 'react-router-dom'

interface IDirectoryDisplay {
    imageArray: string[]
}

const DirectoryDisplay: React.FC<IDirectoryDisplay> = ({imageArray}) => {

    return (
        <DirectoryDisplayContainer>
            {
                imageArray.map((image: string) =>
                    <ImageContainer>
                        <Link to={'/women'}>
                            <Image src={image} alt={image}/>
                        </Link>
                    </ImageContainer>
                )
            }
        </DirectoryDisplayContainer>
    );
};

export default DirectoryDisplay;
