import React from 'react'
import s from './RemoteWorkBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export function RemoteWorkBlock() {
    return (
        <div className={`${styleContainer.container} ${s.remoteContainer}`}>
            <div className={s.cover}>
                <div className={s.content}>
                    <h3>I am considering options for remote work</h3>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    )
}
