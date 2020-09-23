import React from 'react';
import s from './Skill.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export function Skill() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>

                </div>
            </div>
        </div>
    )
}