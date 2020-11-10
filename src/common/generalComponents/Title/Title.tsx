import React from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    text: string
    isLineLeft: boolean
}

export function Title(props: TitlePropsType) {

    return (props.isLineLeft ?
            <div className={s.title}>
                <h2>{props.text}</h2>
            </div> :
            <div className={s.titleLeftLine}>
                <h2>{props.text}</h2>
            </div>
    )
}