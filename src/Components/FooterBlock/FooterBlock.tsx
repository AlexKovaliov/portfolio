import React from "react";
import s from './FooterBlock.module.scss'
import styleContainer from "../../common/styles/Container.module.css";


export function FooterBlock() {

    return (
        <div className={`${styleContainer.container} ${s.footerContainer}`}>
            <div className={s.content}>
                <div className={s.links}>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">CodeWars</a>
                </div>
                <p> &copy; 2020 All Rights Reserved. By Alex Kovalev</p>
            </div>
        </div>
    )
}
