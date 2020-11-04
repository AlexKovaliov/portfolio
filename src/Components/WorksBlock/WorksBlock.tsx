import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "../WorksBlock/WorksBlock.module.scss";
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";

export function WorksBlock() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title text={"My works"}/>
                <div className={s.works}>
                    <Work title={"Social network"}
                          description={"Short description"}/>
                    <Work title={"To do lists"}
                          description={"Short description"}/>
                </div>
            </div>
        </div>
    )
}

