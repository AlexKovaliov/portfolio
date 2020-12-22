import React from 'react'
import s from './Modal.module.scss'
import {Button} from "../../../common/generalComponents/Button/Button";
//images
import img_eng_cv from "../../../assets/img/img_eng_cv.jpg"
import img_rus_cv from "../../../assets/img/img_rus_cv.jpg"


export function Modal() {

    const imgEngCv = {
        backgroundImage: `url(${img_eng_cv})`
    }

    const imgRusCv = {
        backgroundImage: `url(${img_rus_cv})`
    }
    return (
        <div className={s.container}>
            <div className={s.modal}>
                <div className={s.cover}>
                    <div className={s.imgCv} style={imgRusCv}>
                        <Button title={"Download russian CV"}/>
                    </div>
                </div>

                <div className={s.cover}>
                    <div className={s.imgCv} style={imgEngCv}>
                        <Button title={"Download english CV"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}