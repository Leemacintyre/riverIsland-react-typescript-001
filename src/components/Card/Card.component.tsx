import React from 'react';
import {CardBackgroundImage, CardItemContainer, CardPrice, CardTitle} from "./Card.styles";
import {LazyLoadComponent} from 'react-lazy-load-image-component';

interface ICard {
    key?: number | string
    productData: {
        allImages: string;
        name: string;
        cost: string;
    }
}


const Card: React.FC<ICard> = ({productData}) => {

    const {allImages, name, cost} = productData;
    return (
        <CardItemContainer>
            <LazyLoadComponent>
                <CardBackgroundImage imageUrl={allImages[0]} rollOver={allImages[1]} />
            </LazyLoadComponent>
            <CardTitle>{name}</CardTitle>
            <CardPrice>£ {cost}</CardPrice>
        </CardItemContainer>

    );
};

export default Card;
