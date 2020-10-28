import React from "react";
import s from './ContactsBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/generalComponents/Title/Title";

export function ContactsBlock() {
    return (
        <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <div className={s.contactsBlock}>
                <Title text={"Contacts"}/>
                <form className={s.form} action="#" name="Text me">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text me"></textarea>
                    <button type="submit" className={s.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}