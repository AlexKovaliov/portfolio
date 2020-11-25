import React from 'react';
import {Title} from "../../common/generalComponents/Title/Title";
import s from "./InformationBlock.module.scss"
import styleContainer from "../../common/styles/Container.module.css";
import {Info} from "./Info/Info";
import {Button} from "../../common/generalComponents/Button/Button";
import {Fade} from 'react-awesome-reveal';


export function InformationBlock() {
    return (
        <div className={s.informationBlock}>
            <div className={`${styleContainer.container} ${s.containerInfo}`}>
                <Title isLineLeft={true} text={"About me"}/>
                <Fade>
                    <div className={s.infoWrapper}>
                        <div className={s.presentation}>
                            <h3>Hi!</h3>
                            <p> I have been working as Frontend/React developer a half year.
                                I’m most passionate about developing new and interesting projects,
                                I'm hardworking and good a team player, so my goal is to work in a cool and experienced
                                team. I study English and am constantly engaged in self-education.
                                Ready to relocation.</p>
                            <Button title={"Download my CV"}/>
                        </div>
                        <div className={s.column}>
                            <Info InfoTitle={"Birthday"} InfoData={"2th january 1991"}/>
                            <hr className={s.line}/>
                            <Info InfoTitle={"Age"} InfoData={"29 Yr"}/>
                            <hr className={s.line}/>
                            <Info InfoTitle={"Location"} InfoData={"Mogilev | Minsk"}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}