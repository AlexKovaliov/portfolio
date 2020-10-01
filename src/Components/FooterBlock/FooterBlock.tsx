import React from "react";
import s from './FooterBlock.module.css'

export function FooterBlock() {
    return (
        <div className={s.container}>
            <p>by Alex Kovalev</p>
            <div className={s.content}>
                <span><a href="#">LinkedIn</a></span>
                <span><a href="#"> something else</a></span>
                <span><a href="#"> something else</a></span>
                <span><a href="#"> something else</a></span>
            </div>
            <p> &copy; 2020 All Rights Reserved.</p>
        </div>
    )
}
