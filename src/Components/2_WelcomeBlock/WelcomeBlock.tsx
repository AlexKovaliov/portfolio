import React from 'react';
import s from './WelcomeBlock.module.sass'
import Tilt from 'react-parallax-tilt';

export function WelcomeBlock() {
    return (
        <div id="main" className={s.container}>
            <div className={s.welcomeBlock}>
                <div className={s.presentation}>
                    <p style={{color: "red", fontSize: "30px"}}>On development stage</p>
                    <h5>Hello, my name is</h5>
                    <h1>Alexander Kovaliov</h1>
                    <p>I am a Front-end Developer</p>
                </div>

                <Tilt>
                    <div className={s.photo}>--Here will be photo--</div>
                </Tilt>

            </div>
        </div>
    )
}