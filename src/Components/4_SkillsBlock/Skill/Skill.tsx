import React from 'react';
import s from './Skill.module.scss'
import {skillsDataType} from "./SkillsData";


export function Skill(props: { skill: skillsDataType }) {

    return (
        <div className={s.skill}>
            {props.skill.map((value) => {
                return (
                    <>
                        <img className={s.icon} src={value.icon}/>
                        <h3 className={s.skillTitle}>{value.title}</h3>
                        <hr className={s.line}/>
                        <span className={s.description}>{value.description}</span>
                    </>
                )
            })}

        </div>
    )
}