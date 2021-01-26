import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from "./WorksBlock.module.scss"
import {Work} from "./Work/Work";
import {Title} from "../../common/generalComponents/Title/Title";
import toDo from "../../assets/img/ToDoList.png";
import social from "../../assets/img/socil-img.jpg";
import estate from "../../assets/img/real_estate_project.jpg";
import {Zoom} from "react-awesome-reveal";


export function WorksBlock() {

    const imgToDo = {
        backgroundImage: `url(${toDo})`
    }

    const imgSocial = {
        backgroundImage: `url(${social})`
    }

    const imgEstate = {
        backgroundImage: `url(${estate})`
    }

    return (
        <div id="works" className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title isLineLeft={true} text={"My works"}/>

                <div className={s.works}>

                    <Zoom>
                        <Work title={"Social network"}
                              description={"Short description"}
                              img={imgSocial}
                              linkWayGit={"https://github.com/AlexKovaliov/social-network"}
                              linkWayPages={""}
                        />
                    </Zoom>

                    <Zoom>
                        <Work title={"To do lists"}
                              description={"The to-do list is designed to help you plan your tasks to maximize your efficiency."}
                              img={imgToDo}
                              linkWayGit={"https://github.com/AlexKovaliov/TodoList"}
                              linkWayPages={""}
                        />
                    </Zoom>

                    <Zoom>
                        <Work title={"Estate project"}
                              description={"React, Hooks, JS"}
                              img={imgEstate}
                              linkWayPages={"https://AlexKovaliov.github.io/real_estate_project"}
                              linkWayGit={"https://github.com/AlexKovaliov/real_estate_project"}
                        />
                    </Zoom>
                </div>

            </div>

        </div>
    )
}

