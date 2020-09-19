import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {WelcomeBlock} from "./Components/WelcomeBlock/WelcomeBlock";

function App() {
    return (
        <div>
            <Header/>
            <WelcomeBlock/>
        </div>
    );
}

export default App;
