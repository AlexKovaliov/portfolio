import React from 'react';
import s from './WelcomeBlock.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Tilt from 'react-parallax-tilt';

export function WelcomeBlock() {
    return (
        <div className={s.welcomeBlock}>
            <div className={styleContainer.container}>
                <div className={s.presentation}>
                    <h5>Hello, my name is</h5>
                    <h1>Alexander Kovaliov</h1>
                    <p>I am a Front-end Developer</p>
                </div>

                <Tilt>
                    <div className={s.photo}>--Here will be img--</div>
                </Tilt>

            </div>
        </div>
    )
}