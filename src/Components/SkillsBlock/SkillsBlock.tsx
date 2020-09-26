import React from 'react';
import s from './SkillsBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export function SkillsBlock() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML, CSS"}
                           description={"text"}/>
                    <Skill title={"React"}
                           description={"text"}/>
                    <Skill title={"Redux"}
                           description={"text"}/>
                    <Skill title={"TypeScript"}
                           description={"text"}/>
                </div>
            </div>
        </div>
    )
}