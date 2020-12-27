import React, {useState} from 'react';
import s from "./InformationBlock.module.scss"
import {Fade} from 'react-awesome-reveal';
import {Info} from "./Info/Info";
import {Button} from "../../../common/generalComponents/Button/Button";
import {Title} from "../../../common/generalComponents/Title/Title";
import {Modal} from "../Modal/Modal";
import closeBtn from "../../../assets/iconsFonts/close.svg"


export function InformationBlock() {

    const cBtn = {
        backgroundImage: `url(${closeBtn})`
    }

    const [modal, setModal] = useState(true)

    let onModal = () => {
        setModal(!modal)
    }

    return (

        <div id="info" className={s.informationBlock}>
            {modal ?
                <div className={s.containerInfo}>
                    <Title isLineLeft={true} text={"About me"}/>
                    <Fade>
                        <div className={s.infoWrapper}>
                            <div className={s.presentation}>
                                <h2>Hi!</h2>
                                <p> I have been working as Frontend/React developer a half year.
                                    I’m most passionate about developing new and interesting projects,
                                    I'm hardworking and good a team player, so my goal is to work in a cool and
                                    experienced
                                    team. I study English and am constantly engaged in self-education.
                                    Ready to relocation.</p>

                                <Button title={"Download my CV"} onClick={onModal}/>
                                <button onClick={onModal}>MODAL</button>
                            </div>
                            <div className={s.column}>
                                <Info InfoTitle={"Name:"} InfoData={"Alexander Kovalev"}/>
                                <Info InfoTitle={"Age:"} InfoData={"29 Yr"}/>
                                <Info InfoTitle={"Birthday:"} InfoData={"2th january 1991"}/>
                                <Info InfoTitle={"Location:"} InfoData={"Mogilev | Minsk"}/>
                                <Info InfoTitle={"Language:"} InfoData={"Russian | English"}/>
                            </div>
                        </div>
                    </Fade>
                </div>
                :
                <div className={s.containerModal}>
                    <div className={s.closeBtn} onClick={onModal} style={cBtn}></div>
                    <Modal/>
                </div>
            }
        </div>
    )
}