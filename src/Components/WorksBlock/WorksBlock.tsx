import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "../WorksBlock/WorksBlock.module.css";
import {Work} from "./Work/Work";

export function WorksBlock() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
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

