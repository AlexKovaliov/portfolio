import React from "react";
import s from './ContactsBlock.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/generalComponents/Title/Title";
import {Button} from "../../common/generalComponents/Button/Button";

export function ContactsBlock() {
    return (
        <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <div className={s.contactsBlock}>
                <Title text={"Contacts"}/>
                <form className={s.form} action="#" name="Text me">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text me"></textarea>
                    <Button title={"Send"}/>
                </form>
            </div>
        </div>
    )
}