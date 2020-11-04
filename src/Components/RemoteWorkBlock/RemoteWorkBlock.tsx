import React from 'react'
import s from './RemoteWorkBlock.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Button} from "../../common/generalComponents/Button/Button";

export function RemoteWorkBlock() {
    return (
        <div className={`${styleContainer.container} ${s.remoteContainer}`}>
            <div className={s.cover}>
                <div className={s.content}>
                    <h3>I am considering options for remote work</h3>
                    <Button title={"Hire me"}/>
                </div>
            </div>
        </div>
    )
}
