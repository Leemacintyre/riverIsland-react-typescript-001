import React, {SyntheticEvent} from 'react';
import {NavBarContainer, NavBarSectionContainer, NavBarTitle} from './NavBar.styles'
import SearchBar from "../SearchBar/SearchBar.component";
import {Link} from 'react-router-dom'

interface INavBar {
    name?: string;
    value?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: SyntheticEvent<Element, Event>) => void
}

const NavBar: React.FC<INavBar> = ({name, value, handleChange, handleSubmit}) => {
    return (
        <NavBarContainer>
            <NavBarSectionContainer><Link to={'/'}>LOGO</Link></NavBarSectionContainer>
            <NavBarSectionContainer>
               <NavBarTitle><Link to={'/women'}>ALL WOMEN</Link></NavBarTitle>
                <NavBarTitle><Link to={'/women/jacket'}>JACKETS</Link></NavBarTitle>
                <NavBarTitle><Link to={'/women/shoes'}>SHOES</Link></NavBarTitle>
                <NavBarTitle><Link to={'/women/dress'}>DRESSES</Link></NavBarTitle>
            </NavBarSectionContainer>
            <NavBarSectionContainer>
                <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} name={name} value={value} />
            </NavBarSectionContainer>
        </NavBarContainer>
    );
};

export default NavBar;
