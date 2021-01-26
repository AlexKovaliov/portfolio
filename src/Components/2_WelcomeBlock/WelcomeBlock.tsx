import React from 'react';
import s from './WelcomeBlock.module.sass'
import Tilt from 'react-parallax-tilt';
import photo from '../../assets/img/IMG_2377.jpg'

export function WelcomeBlock() {

    const myPhoto = {
        backgroundImage: `url(${photo})`
    }

    return (
        <div id="main" className={s.container}>
            <div className={s.welcomeBlock}>
                <div className={s.presentation}>
                    <p style={{color: "red", fontSize: "30px"}}>On development stage</p>
                    <h5>Hello, my name is</h5>
                    <h1>Alexander Kovalev</h1>
                    <p>I am a Front-end Developer</p>
                </div>

                <Tilt>
                    <div className={s.photo} style={myPhoto}></div>
                </Tilt>

            </div>
        </div>
    )
}