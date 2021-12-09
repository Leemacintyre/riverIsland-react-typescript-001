import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import StartUpScreenPage from "../../pages/StartUpScreenPage/StartUpScreenPage.component";
import MainMenuPage from "../../pages/MainMenuPage/MainMenuPage.component";
import WomenProductPage from "../../pages/WomensProductPage/WomenProductPage.component";
import ProductPageLarge from "../../pages/ProductPageLarge/ProductPageLarge.component";

function App() {
    return (
        <div className="App">
            <MainMenuPage/>
            <Switch>
                <Route path={"/"} exact component={StartUpScreenPage}/>
                <Route path={"/women"} exact component={WomenProductPage}/>
                <Route path={"/women/:searchTerm"} exact component={WomenProductPage}/>
                <Route path={"/women/image/:prodid"} exact component={ProductPageLarge}/>
            </Switch>
        </div>
    );
}

export default App;
