import React from "react";
import s from './FooterBlock.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export function FooterBlock() {
    return (
        <div className={`${styleContainer.container} ${s.footerContainer}`}>
            <div className={s.content}>
                <h4>Alex Kovalev</h4>
                <div className={s.links}>
                    <span><a href="#">LinkedIn</a></span>
                    <span><a href="#">GitHub</a></span>
                    <span><a href="#">CodeWars</a></span>
                    <span><a href="#">something else</a></span>
                </div>
                <p> &copy; 2020 All Rights Reserved. By Alex Kovalev</p>
            </div>
        </div>
    )
}
