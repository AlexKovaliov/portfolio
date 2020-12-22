import React from "react";
import s from './FooterBlock.module.sass'
import styleContainer from "../../common/styles/Container.module.css";
import {Link} from "react-scroll";


export function FooterBlock() {

    return (
        <div id="footer" className={`${styleContainer.container} ${s.footerContainer}`}>
            <div className={s.content}>
                <div className={s.links}>
                    <a target="blank" href="https://www.linkedin.com/in/alexander-kovalev-018ba51b2/">LinkedIn</a>
                    <a target="blank" href="https://github.com/AlexKovaliov">GitHub</a>
                    <a target="blank" href="https://www.codewars.com/users/AlexanderKov">CodeWars</a>
                </div>
                <p> &copy; 2020 All Rights Reserved. By {/*<a href="#info">Alex Kovalev</a>*/}
                    <Link to="info" spy={true} smooth={true} offset={1} duration={500}>Alex Kovalev</Link>
                </p>
            </div>
        </div>
    )
}
