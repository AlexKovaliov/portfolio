import React from "react";
import s from './ContactsBlock.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/generalComponents/Title/Title";
import {Button} from "../../common/generalComponents/Button/Button";
import {Info} from "../3_InformationBlock/Info/Info";


export function ContactsBlock() {
    return (
        <div id="contacts" className={`${styleContainer.container} ${s.contactsContainer}`}>
            <div className={s.contactsBlock}>

                <div className={s.infoWrapper}>
                    <Title isLineLeft={false} text={"Get in touch"}/>
                    <div className={s.icon}>

                    </div>
                    <Info InfoTitle={"Phone number"}
                          InfoData={"+375 33 626 05 89"}/>
                    <hr className={s.line}/>
                    <div className={s.icon}>

                    </div>
                    <Info InfoTitle={"Email"}
                          InfoData={"lawsansana@gmail.com"}/>
                </div>

                <form className={s.form} action="#" name="Text me">
                    <div className={s.emailRow}>
                        <div className={s.nameCover}>
                            <input className={s.name} type="text" placeholder="Your Name"/>
                        </div>
                        <div className={s.emailCover}>
                            <input className={s.email} type="email" placeholder="Your Email"/>
                        </div>
                    </div>

                    <div className={s.areaCover}>
                        <textarea className={s.area} name="message" placeholder="Your Message"></textarea>
                    </div>

                    <Button title={"Send"}/>

                </form>

            </div>
        </div>
    )
}