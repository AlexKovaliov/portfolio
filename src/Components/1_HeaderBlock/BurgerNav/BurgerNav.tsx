import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import iMenu from "../../../assets/iconsFonts/menu.svg"

export function BurgerNav() {

    const iconMenu = {
        backgroundImage: `url(${iMenu})`
    }

    const [menu, setMenu] = useState(false)

    let onBergerMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menu ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
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
            <div className={s.burgerBtn} onClick={onBergerMenu} style={iconMenu}></div>
        </div>
    )
}