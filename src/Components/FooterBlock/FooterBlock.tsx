import React from "react";
import s from './FooterBlock.module.scss'
import styleContainer from "../../common/styles/Container.module.css";


export function FooterBlock() {

    return (
        <div id="footer" className={`${styleContainer.container} ${s.footerContainer}`}>
            <div className={s.content}>
                <div className={s.links}>
                    <a target="blank" href="https://www.linkedin.com/in/alexander-kovalev-018ba51b2/">LinkedIn</a>
                    <a target="blank" href="https://github.com/AlexKovaliov">GitHub</a>
                    <a target="blank" href="https://www.codewars.com/users/AlexanderKov">CodeWars</a>
                </div>
                <p> &copy; 2020 All Rights Reserved. By Alex Kovalev</p>
            </div>
        </div>
    )
}
