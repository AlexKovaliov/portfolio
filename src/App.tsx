import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {WelcomeBlock} from "./Components/WelcomeBlock/WelcomeBlock";
import {SkillsBlock} from "./Components/SkillsBlock/SkillsBlock";
import {WorksBlock} from "./Components/WorksBlock/WorksBlock";

function App() {
    return (
        <div className="App">
            <Header/>
            <WelcomeBlock/>
            <SkillsBlock/>
            <WorksBlock/>
        </div>
    );
}

export default App;
