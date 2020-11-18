import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "../WorksBlock/WorksBlock.module.scss";
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";
import toDo from "../../assets/img/to_do_list_img.jpg";
import social from "../../assets/img/socil-img.jpg";

export function WorksBlock() {

    const imgToDo = {
        backgroundImage: `url(${toDo})`
    }

    const imgSocial = {
        backgroundImage: `url(${social})`
    }

    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title isLineLeft={true} text={"My works"}/>
                <div className={s.works}>
                    <Work title={"Social network"}
                          description={"Short description"}
                          img={imgSocial}
                    />
                    <Work title={"To do lists"}
                          description={"Short description"}
                          img={imgToDo}
                    />
                </div>
            </div>
        </div>
    )
}

