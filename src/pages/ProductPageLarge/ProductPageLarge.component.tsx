import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ImageFrameLarge from "../../components/ImageFrameLarge/ImageFrameLarge.component";
import ProductLargeViewInfo from "../../components/ProductInformation/ProductInformation.component";
import {ProductPageLargeContainer} from "./ProductPageLarge.styles";
import {getAllWomenProductData} from "../../Hooks/AxiosRequests";

const ProductPageLarge: React.FC = () => {
    const {prodid} = useParams<{ prodid: string }>();
    const [womenProductData, setWomenProductData] = useState<[]>([])


    useEffect(() => {
        (
            async () => {
                const {data: {Products}} = await getAllWomenProductData()
                setWomenProductData(Products)
            }
        )()
    }, []);


    return (
        <ProductPageLargeContainer>
            <ImageFrameLarge
                image={`http://riverisland.scene7.com/is/image/RiverIsland/${prodid}_main`}
                altText={'Product_image'}
                linkTo={'/women'}
            />
            <>
                {
                    womenProductData.map((item: any) => (
                        prodid === item.prodid ?
                            <ProductLargeViewInfo
                                womenProductData={item}
                            />
                            : null
                    ))
                }
            </>
        </ProductPageLargeContainer>

    );
};

export default ProductPageLarge;
