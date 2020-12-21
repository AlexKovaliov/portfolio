import React from 'react'
import s from './RemoteWorkBlock.module.sass'
import styleContainer from '../../common/styles/Container.module.css'
import {Button} from "../../common/generalComponents/Button/Button";
import {Fade} from 'react-awesome-reveal';

export function RemoteWorkBlock() {
    return (
        <div className={`${styleContainer.container} ${s.remoteContainer}`}>
            <div className={s.cover}>
                <Fade>
                    <div className={s.content}>
                        <h3>I am considering options for remote work</h3>
                        <Button title={"Hire me"}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
