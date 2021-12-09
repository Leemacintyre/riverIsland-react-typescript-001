import React, {SyntheticEvent} from 'react';
import {SearchBarInput, SearchBarContainer} from "./SearchBar.styles";
import CustomButton from "../CustomButton/CustomButton.component";

interface IInputFieldData {
    name?: string;
    value?: string | undefined;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: SyntheticEvent) => void

}

const SearchBar: React.FC<IInputFieldData> = ({handleChange, name, value, handleSubmit}) => {
    return (
        <SearchBarContainer>
            <SearchBarInput type="text" value={value} name={name} placeholder={'SEARCH'} onChange={handleChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}/>
            <CustomButton handleSubmit={handleSubmit}/>
        </SearchBarContainer>
    );
};

export default SearchBar;
