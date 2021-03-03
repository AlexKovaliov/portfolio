import React, {FC} from 'react';
import s from './Skill.module.scss'
import {skillsDataType} from './SkillsData';

interface SkillProps {
    title: string
    description: string,
    icon: string,
}

export const Skill: FC<SkillProps> = ({title, description, icon}) => {

    return (
        <div className={s.skill}>
            <img className={s.icon} src={icon}/>
            <h3 className={s.skillTitle}>{title}</h3>
            <hr className={s.line}/>
            <span className={s.description}>{description}</span>
        </div>
    )
}