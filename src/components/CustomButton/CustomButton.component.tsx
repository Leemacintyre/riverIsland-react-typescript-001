import React, {SyntheticEvent} from 'react';
import {CustomButtonContainer} from './CustomButton.styles'
import { BiSearch } from "react-icons/bi";

interface ICustomButton {
    handleSubmit?: (event: SyntheticEvent) => void
}

const CustomButton:React.FC<ICustomButton> = ({handleSubmit}) => {
    return (
        <CustomButtonContainer>
            <BiSearch onClick={handleSubmit} />
        </CustomButtonContainer>
    );
};

export default CustomButton;
