import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "../WorksBlock/WorksBlock.module.css";
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";

export function WorksBlock() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title text={"My works"}/>
                <div className={s.works}>
                    <Work title={"Name of project"}
                          description={"Short description"}/>
                    <Work title={"Name of project"}
                          description={"Short description"}/>
                </div>
            </div>
        </div>
    )
}

