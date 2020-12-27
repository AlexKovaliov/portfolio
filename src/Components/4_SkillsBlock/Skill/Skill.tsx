import React from 'react';
import s from './Skill.module.scss'


export type SkillType = {
    title: string
    description: string
    icon: { backgroundImage: string}
}


export function Skill(props: SkillType) {

    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.icon}></div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <hr className={s.line}/>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}