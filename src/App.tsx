import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {WelcomeBlock} from "./Components/WelcomeBlock/WelcomeBlock";
import {SkillsBlock} from "./Components/SkillsBlock/SkillsBlock";
import {WorksBlock} from "./Components/WorksBlock/WorksBlock";
import {RemoteWorkBlock} from "./Components/RemoteWorkBlock/RemoteWorkBlock";
import {ContactsBlock} from "./Components/ContactsBlock/ContactsBlock";
import {FooterBlock} from "./Components/FooterBlock/FooterBlock";

function App() {
    return (
        <div className="App">
            <Header/>
            <WelcomeBlock/>
            <SkillsBlock/>
            <WorksBlock/>
            <RemoteWorkBlock/>
            <ContactsBlock/>
            <FooterBlock/>
        </div>
    )
}

export default App;
