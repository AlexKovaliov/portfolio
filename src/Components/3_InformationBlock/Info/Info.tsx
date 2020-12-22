import React from "react"
import s from "./Info.module.scss"

type InfoPropsType = {
    InfoTitle: string
    InfoData: string
}


export function Info (props: InfoPropsType) {
    return (
        <div className={s.info}>
            <p className={s.infoTitle}>{props.InfoTitle}</p>
            <p className={s.infoData}>{props.InfoData}</p>
        </div>
    ) 
}