import React from 'react';
import s from './SkillsBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/generalComponents/Title/Title";

export function SkillsBlock() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"HTML, CSS"}
                           description={"text"}/>
                    <Skill title={"React"}
                           description={"textfd fdas bsgdh sb svb zcgbadeg b zcxvb adsrgq edbzxcbv adsrg"}/>
                    <Skill title={"Redux"}
                           description={"text"}/>
                    <Skill title={"TypeScript"}
                           description={"text"}/>
                    <Skill title={"Axios"}
                           description={"text"}/>
                    <Skill title={"StoryBook"}
                           description={"text"}/>
                </div>
            </div>
        </div>
    )
}