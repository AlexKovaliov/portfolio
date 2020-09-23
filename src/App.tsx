import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {WelcomeBlock} from "./Components/WelcomeBlock/WelcomeBlock";
import {SkillsBlock} from "./Components/SkillsBlock/SkillsBlock";

function App() {
    return (
        <div className="App">
            <Header/>
            <WelcomeBlock/>
            <SkillsBlock/>
        </div>
    );
}

export default App;
