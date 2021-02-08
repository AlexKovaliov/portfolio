import React from 'react';
import s from './Work.module.scss'
import {workDataType} from "./WorkData";


export function Work(props: { data: workDataType }) {

    return (
        <div className={s.work}>
            {props.data.map((value) => {
                return (
                    <>
                        <a href={value.linkWayPages}>
                            <img className={s.img} src={value.img}/>
                        </a>
                        <h3>{value.title}</h3>
                        <span className={s.description}>{value.description}</span>
                        <span className={s.link}>
                <a href={value.linkWayGit} target="_blank">Look at GitHub</a>
                <a href={value.linkWayPages} target="_blank">Look at GitHubPages</a>
                        </span>
                    </>
                )
            })}
        </div>
    )
}