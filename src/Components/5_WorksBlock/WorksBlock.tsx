import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "./WorksBlock.module.scss"
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";
import {Zoom} from "react-awesome-reveal";
import {worksData} from "./Work/WorkData";


export function WorksBlock() {

    return (
        <div id="works" className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title isLineLeft={true} text={"My works"}/>

                <div className={s.works}>
                    <Zoom>
                        <Work data={worksData}/>
                    </Zoom>
                </div>
            </div>

        </div>
    )
}

