import React, {FormEvent, SyntheticEvent, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar.component";
import {useHistory} from "react-router-dom";

const MainMenuPage: React.FC = () => {
    const history = useHistory();

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event: FormEvent<HTMLInputElement>): void => {
        setSearchValue(event.currentTarget.value)
    }

    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        history.push(`/women/${searchValue}`);
        setSearchValue('');
    }

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} name={'searchValue'} value={searchValue}/>
        </div>
    );
};

export default MainMenuPage;
