import React from 'react';
import s from './Work.module.scss'

export type WorkType = {
    title: string,
    description: string
}

export function Work(props: WorkType) {
    return (
        <div className={s.work}>
            <div className={s.img}>
                <img src="#" alt="img"/>
                <div>
                    <button>Look it</button>
                </div>

            </div>

            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}