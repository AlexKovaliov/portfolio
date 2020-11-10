import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {WelcomeBlock} from "./Components/WelcomeBlock/WelcomeBlock";
import {SkillsBlock} from "./Components/SkillsBlock/SkillsBlock";
import {WorksBlock} from "./Components/WorksBlock/WorksBlock";
import {RemoteWorkBlock} from "./Components/RemoteWorkBlock/RemoteWorkBlock";
import {ContactsBlock} from "./Components/ContactsBlock/ContactsBlock";
import {FooterBlock} from "./Components/FooterBlock/FooterBlock";
import {InformationBlock} from './Components/InformationBlock/InformationBlock';
import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*<Header/>*/}
                 <WelcomeBlock/>
                <InformationBlock/>
                <SkillsBlock/>
                <WorksBlock/>
                <RemoteWorkBlock/>
                <ContactsBlock/>
                <FooterBlock/>
            </div>
        </BrowserRouter>
    )
}

export default App;