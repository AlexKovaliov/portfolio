import React from 'react'
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    onClick?: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <div className={s.cover}>
            <button onClick={props.onClick}>{props.title}</button>
        </div>
    )
}