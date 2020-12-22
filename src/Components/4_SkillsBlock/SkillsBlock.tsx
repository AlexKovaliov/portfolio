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
import {Zoom, Slide} from "react-awesome-reveal";


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
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title isLineLeft={true} text={"Skills"}/>
                <div className={s.skills}>

                    <Slide direction="left">
                        <Skill title={"HTML, CSS"}
                               description={"HTML is a markup language for creating a webpage." +
                               "CSS it is a style sheet language used to describe the appearance of a document."}
                               icon={iconHtml}
                        />
                    </Slide>

                    <Zoom>
                        <Skill title={"React"}
                               description={"A JavaScript library for building user interfaces"}
                               icon={iconReact}
                        />
                    </Zoom>

                    <Slide direction="right">
                        <Skill title={"Redux"}
                               description={"A Predictable State Container for JS Apps"}
                               icon={iconRedux}
                        />
                    </Slide>

                    <Slide direction="left">
                        <Skill title={"TypeScript"}
                               description={"TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions."}
                               icon={iconTS}
                        />
                    </Slide>

                    <Zoom>
                        <Skill title={"Axios"}
                               description={"Axios is one of the most popular HTTP clients for browsers and promises-based node.js."}
                               icon={iconAxios}
                        />
                    </Zoom>

                    <Slide direction="right">
                        <Skill title={"StoryBook"}
                               description={"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more."}
                               icon={iconSB}
                        />
                    </Slide>
                </div>
            </div>
        </div>
    )
}