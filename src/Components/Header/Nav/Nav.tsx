import React from 'react';
import s from './Nav.module.scss'


export function Nav() {

    return (
        <div className={s.nav}>
            <a>Main</a>
            <a>Skills</a>
            <a>Works</a>
            <a>Contacts</a>
        </div>
    )
}