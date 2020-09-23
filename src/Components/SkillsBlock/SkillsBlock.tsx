import React from 'react';
import s from './SkillsBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export function SkillsBlock() {
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