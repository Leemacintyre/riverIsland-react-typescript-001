import React from 'react';
import {
    CostContainer,
    NameContainer,
    ProductInformationContainer, Sizes, SizesContainer, Swatches,
    SwatchesContainer
} from "./ProductInformation.styles";

interface IProductInformation {
    womenProductData: {
        name: string;
        cost: string;
        swatches: [
            {
                image: string;
                productId: string;
            }
        ];
        sizes: string;
    }
}

const ProductInformation: React.FC<IProductInformation> = ({womenProductData}) => {
    const {cost, sizes, name, swatches} = womenProductData
    const sizesArray: string[] = sizes.split(',')

    return (
        <ProductInformationContainer>
            <NameContainer>{name}</NameContainer>
            <CostContainer>£ {cost}</CostContainer>
            <SwatchesContainer>
                {
                    swatches.length > 0 ?
                        swatches.map(({image}) => {
                            return (
                                <Swatches src={`${image}`} alt="color"/>
                            )
                        }) : <div>No other colors</div>
                }
            </SwatchesContainer>
            <SizesContainer>
                {
                    sizesArray.map((size) =>
                        <Sizes>{size}</Sizes>)
                }
            </SizesContainer>
        </ProductInformationContainer>
    );
};

export default ProductInformation;
