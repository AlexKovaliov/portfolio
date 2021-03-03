import React, {FC} from 'react';
import s from './Work.module.scss'

interface WorkProps {
    linkWayPages: string
    img: string,
    title: string,
    description: string,
    linkWayGit: string,
}

export const Work: FC<WorkProps> = ({linkWayPages, img, title, description, linkWayGit}) => {

    return (
        <div className={s.works}>
            <div className={s.work}>
                <a href={linkWayPages}>
                    <img className={s.img} src={img}/>
                </a>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
                <span className={s.link}>
                <a href={linkWayGit} target="_blank">Look at GitHub</a>
                <a href={linkWayPages} target="_blank">Look Demo</a>
                        </span>
            </div>
        </div>
    )
}