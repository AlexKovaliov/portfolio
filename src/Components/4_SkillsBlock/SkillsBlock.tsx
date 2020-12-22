import React from "react";
import s from "./SkillsBlock.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/generalComponents/Title/Title";
import {Zoom} from "react-awesome-reveal";
//images
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
        <div id="skills" className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title isLineLeft={true} text={"Skills"}/>
                <div className={s.skills}>
                    <Zoom>
                        <Skill title={"HTML, CSS"}
                               description={"HTML is a markup language for creating a webpage." +
                               "CSS it is a style sheet language used to describe the appearance of a document."}
                               icon={iconHtml}
                        />
                        <Skill title={"React"}
                               description={"A JavaScript library for building user interfaces"}
                               icon={iconReact}
                        />
                        <Skill title={"Redux"}
                               description={"A Predictable State Container for JS Apps"}
                               icon={iconRedux}
                        />
                        <Skill title={"TypeScript"}
                               description={"TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions."}
                               icon={iconTS}
                        />
                        <Skill title={"Axios"}
                               description={"Axios is one of the most popular HTTP clients for browsers and promises-based node.js."}
                               icon={iconAxios}
                        />
                        <Skill title={"StoryBook"}
                               description={"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more."}
                               icon={iconSB}
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}