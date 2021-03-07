import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "./WorksBlock.module.scss"
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";
import {Zoom} from "react-awesome-reveal";
import {worksData} from "./Work/WorkData";
import {nanoid} from 'nanoid'


function WorksBlock() {

    const worksId = nanoid()

    return (
        <div id="works" className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title isLineLeft={true} text={"My works"}/>

                <div className={s.works}>
                    <Zoom>
                        {worksData.map((el) =>
                            (<Work key={worksId} linkWayPages={el.linkWayPages} title={el.title} img={el.img}
                                   description={el.description} linkWayGit={el.linkWayGit}/>))
                        }
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default React.memo(WorksBlock)