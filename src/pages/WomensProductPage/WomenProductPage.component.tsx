import React, {useEffect, useState} from 'react';
import ProductListDisplay from "../../components/ProductListDisplay/ProductListDisplay.component";
import {getAllWomenProductData} from "../../Hooks/AxiosRequests";


const WomenProductPage: React.FC = () => {
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
        <>
            <ProductListDisplay womanProductList={womenProductData}/>
        </>
    );
};

export default WomenProductPage;
