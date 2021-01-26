import React from 'react';
import s from './Work.module.scss'


export type WorkType = {
    title: string
    description: string
    img: { backgroundImage: string }
    linkWayPages: string
    linkWayGit: string
}


export function Work(props: WorkType) {

    const click = () => <a href={props.linkWayPages}></a>

    return (
        <div className={s.work}>
            <div className={s.img} style={props.img} onClick={click}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
            <span className={s.link}>
                <a href={props.linkWayGit} target="_blank">Look at GitHub</a>
                <a href={props.linkWayPages} target="_blank">Look at GitHubPages</a>
            </span>
        </div>
    )
}
