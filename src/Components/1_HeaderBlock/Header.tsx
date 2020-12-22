import React from 'react';
import s from './Header.module.sass'
import {Nav} from "./Nav/Nav";
import {BurgerNav} from "./BurgerNav/BurgerNav";

export function Header() {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    )
}