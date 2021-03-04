import React from 'react';
import './App.css';
import {WelcomeBlock} from "./Components/2_WelcomeBlock/WelcomeBlock";
import {BrowserRouter} from "react-router-dom";
import {Header} from './Components/1_HeaderBlock/Header';
import {SkillsBlock} from "./Components/4_SkillsBlock/SkillsBlock";
import {RemoteWorkBlock} from "./Components/6_RemoteWorkBlock/RemoteWorkBlock";
import {Contact} from "./Components/7_ContactBlock/contact";
import {FooterBlock} from './Components/9_FooterBlock/FooterBlock';
import WorksBlock from "./Components/5_WorksBlock/WorksBlock";
import {InformationBlock} from "./Components/3_AboutMeBlock/InformationBlock/InformationBlock";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <WelcomeBlock/>
                <InformationBlock/>
                <SkillsBlock/>
                <WorksBlock/>
                <RemoteWorkBlock/>
                <Contact/>
                <FooterBlock/>
            </div>
        </BrowserRouter>
    )
}

export default App;