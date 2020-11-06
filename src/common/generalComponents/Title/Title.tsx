import React from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    text: string
    isLeft: boolean
}

export function Title(props: TitlePropsType) {

    return (props.isLeft ?
            <div className={s.title}>
                <h2>{props.text}</h2>
            </div> :
            <div className={s.titleLeftLine}>
                <h2>{props.text}</h2>
            </div>
    )
}