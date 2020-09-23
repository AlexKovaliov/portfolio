import React from 'react';
import s from './WelcomeBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export function WelcomeBlock() {
    return (
        <div className={s.welcomeBlock}>
            <div className={styleContainer.container}>
                <div className={s.presentation}>
                    <span>Hi There</span>
                    <h1>I am Alexander Kovaliov</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo}>--Here will be img--</div>
            </div>
        </div>
    )
}