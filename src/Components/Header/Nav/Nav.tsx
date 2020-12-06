import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll';


export function Nav() {

    return (
        <div className={s.nav}>
            {/*<a href="#main">Main</a>*/}
            {/* <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contacts">Contacts</a>*/}
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Main</Link>
            <Link
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={s.active}
                to="works"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Works</Link>
            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
            >Contacts</Link>
        </div>
    )
}