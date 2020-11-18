import React from 'react';
import s from './Work.module.scss'

export type WorkType = {
    title: string
    description: string
    img: { backgroundImage: string }
}

export function Work(props: WorkType) {
    return (
        <div className={s.work}>
            <div className={s.img} style={props.img}></div>

            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}