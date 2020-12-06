import React from 'react';
import s from './Nav.module.scss'


export function Nav() {

    return (
        <div className={s.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contacts">Contacts</a>
        </div>
    )
}