import React from "react";
import s from "./SkillsBlock.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/generalComponents/Title/Title";
import {Zoom} from "react-awesome-reveal";
import {skillsData} from "./Skill/SkillsData";


export function SkillsBlock() {

    return (
        <div id="skills" className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title isLineLeft={true} text={"Skills"}/>
                <div className={s.skills}>
                    <Zoom>
                        {skillsData.map((el, i) =>
                            (<Skill key={i} title={el.title}
                                    description={el.description}
                                    icon={el.icon}/>))
                        }
                    </Zoom>
                </div>
            </div>
        </div>
    )
}