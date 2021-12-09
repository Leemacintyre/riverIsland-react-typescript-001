import React from 'react';
import Card from "../Card/Card.component";
import {Link, useParams} from 'react-router-dom'
import {CardContainer, ProductListDisplayContainer} from './ProductListDisplay.styles'


interface IProductListDisplay {
    womanProductList: []
}

interface IData {
    allImages: string;
    name: string;
    cost: string;
    prodid: string | number;
}

const ProductListDisplay: React.FC<IProductListDisplay> = ({womanProductList}) => {
    const {searchTerm} = useParams<{ searchTerm: string }>();

    const arrayMatchingSearchTerm = (searchTerm: string, womanProductList: []): [] => {
        //separates search term into array split but a space
        let arrayOfSearchTerm: string[] = searchTerm.split(' ')
        //all items that match the search term term get pushed into this array
        let arrayOfAllMatchedItems: any = []

        womanProductList.map((data: IData): string[] => {
            return (
                //maps through array of search terms and pushes matches to arrayOfAllMatchedItems
                arrayOfSearchTerm.map((searchTerm: string): string => (
                    data.name.includes(searchTerm) ? arrayOfAllMatchedItems.push(data.prodid) : null
                ))
            )
        })
        //Removed all duplicates from arrayOfAllMatchedItems
        return arrayOfAllMatchedItems.filter(function (item: string, pos: string): boolean {
            return arrayOfAllMatchedItems.indexOf(item) === pos;
        })
    }

    return (
        <ProductListDisplayContainer>
            {
                womanProductList && womanProductList.map((data: IData) => {

                    return (
                        !searchTerm || searchTerm === '' ? (
                            <CardContainer key={data.prodid}>
                                <Link key={data.prodid} to={`/women/image/${data.prodid}`}>
                                    <Card productData={data}/>
                                </Link>
                            </CardContainer>
                        ) : (
                            <>
                                {
                                    arrayMatchingSearchTerm(searchTerm, womanProductList).map((id: string) => (
                                        id === data.prodid ?
                                            <CardContainer key={data.prodid}>
                                                <Link key={data.prodid} to={`/women/image/${data.prodid}`}>
                                                    <Card productData={data}/>
                                                </Link>
                                            </CardContainer>
                                            :
                                            null
                                    ))

                                }
                            </>
                        )

                    )
                })
            }
        </ProductListDisplayContainer>
    );
};

export default ProductListDisplay;
