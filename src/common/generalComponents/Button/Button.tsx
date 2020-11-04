import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
}

export function Button (props:ButtonPropsType) {
    return (
        <div className={s.cover}>
            <button>{props.title}</button>
        </div>
    )
}