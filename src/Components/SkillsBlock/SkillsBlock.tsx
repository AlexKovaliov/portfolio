import React from "react";
import s from "./SkillsBlock.module.scss"
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/generalComponents/Title/Title";
import iHtml from "../../assets/iconsFonts/Logo-HTML5-CSS3-200.png"
import iReact from "../../assets/iconsFonts/icon-reactjs.svg"
import iRedux from "../../assets/iconsFonts/redux.svg"
import iTS from "../../assets/iconsFonts/typescript.svg"
import iAxios from "../../assets/iconsFonts/axios.svg"
import iSB from "../../assets/iconsFonts/storybook.svg"


export function SkillsBlock() {

    const iconHtml = {
        backgroundImage: `url(${iHtml})`
    }

    const iconReact = {
        backgroundImage: `url(${iReact})`
    }

    const iconRedux = {
        backgroundImage: `url(${iRedux})`
    }

    const iconTS = {
        backgroundImage: `url(${iTS})`
    }

    const iconAxios = {
        backgroundImage: `url(${iAxios})`
    }

    const iconSB = {
        backgroundImage: `url(${iSB})`
    }


    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>

                    <Skill title={"HTML, CSS"}
                           description={"web make-up, scss, variables, mixins"}
                           icon={iconHtml}
                    />

                    <Skill title={"React"}
                           description={"textfd fdas bsgdh sb svb zcgbadeg b zcxvb adsrgq edbzxcbv adsrg"}
                           icon={iconReact}
                    />

                    <Skill title={"Redux"}
                           description={"text"}
                           icon={iconRedux}
                    />

                    <Skill title={"TypeScript"}
                           description={"text"}
                           icon={iconTS}
                    />
                    <Skill title={"Axios"}
                           description={"text"}
                           icon={iconAxios}
                    />
                    <Skill title={"StoryBook"}
                           description={"text"}
                           icon={iconSB}
                    />
                </div>
            </div>
        </div>
    )
}