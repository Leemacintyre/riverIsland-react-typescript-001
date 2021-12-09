import React, {useEffect, useState} from 'react';
import {StartUpScreenPageContainer} from "./StartUpScreenPage.styles";
import {getAllWomenProductData} from "../../Hooks/AxiosRequests";
import DirectoryDisplay from "../../components/DirectoryDisplay/DirectoryDisplay.component";

const StartUpScreenPage: React.FC = () => {
    const [womenProductData, setWomenProductData] = useState<[]>([])
    const arraySelection: number[] = []
    const imageArray: string[] = []

    useEffect(() => {
        (
            async () => {
                const {data: {Products}} = await getAllWomenProductData()
                setWomenProductData(Products)
            }
        )()
    }, []);

    //Creates an array full of 5 random numbers between  0 and the length of the dataset provided
    for (let i = 0; i < 5; i++) {
        arraySelection.push(Math.floor(Math.random() * womenProductData.length))
    }

    //Maps through womenProductData and checks if the ID matches the ID in the randomly generated arraySelection list
    //then pushes matched items to the imageArray
    womenProductData.map((data: any, index: number):(number|false)[] => (
        arraySelection.map((number: number):number|false => number === index && imageArray.push(data.allImages[0]))
    ))

    return (
        <StartUpScreenPageContainer>
            <DirectoryDisplay imageArray={imageArray}/>
        </StartUpScreenPageContainer>
    );
};

export default StartUpScreenPage;
