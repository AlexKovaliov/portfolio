import React from 'react'
import s from './Modal.module.scss'
import {Zoom} from 'react-awesome-reveal';
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
        <Zoom className={s.fade}>
            <div className={s.modal}>
                <div className={s.cover}>
                    <div className={s.imgCv} style={imgRusCv}>
                        <a href="../../../assets/doc/Aleksandr_CV_RUS.pdf" download>Скачать резюме на русском языке</a>
                    </div>
                </div>

                <div className={s.cover}>
                    <div className={s.imgCv} style={imgEngCv}>
                        <a href="../../../assets/doc/Aleksandr_CV_RUS.pdf" download>Download english CV</a>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}