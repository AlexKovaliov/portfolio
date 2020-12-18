import React from 'react';
import s from './contact.module.sass';
//images
import iconEmail from '../../assets/iconsFonts/email.svg'
import iconPhone from '../../assets/iconsFonts/phone-call.svg'
import {Button} from "../../common/generalComponents/Button/Button";
import {Title} from "../../common/generalComponents/Title/Title";

export const Contact = () => {
    return (
        <div className={s.container}>
            <div className={s.contact}>
                <Title isLineLeft={false} text={"Get in touch"}/>
                <div className={s.content}>
                    <div className={s.contactInformation}>
                        <div className={s.informationBlock}>
                            <img className={s.image} src={iconPhone} alt={'phone'}/>
                            <h3 className={s.informationBlock__title}>Phone number</h3>
                            <span className={s.information__text}>+375 33 626 05 89</span>
                        </div>
                        <div className={s.informationBlock}>
                            <img className={s.image} src={iconEmail} alt={'email'}/>
                            <h3 className={s.informationBlock__title}>Email</h3>
                            <span className={s.information__text}>lawsansana@gmail.com</span>
                        </div>
                    </div>
                    <form className={s.form}>
                        <input className={s.input} placeholder={'Your Name'} type="text"/>
                        <input className={s.input} placeholder={'Your Email'} type="email"/>
                        <textarea placeholder={'Your Message'} className={s.textarea}></textarea>
                        <Button title={"Send"}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

