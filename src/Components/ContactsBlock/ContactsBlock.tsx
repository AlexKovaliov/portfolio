import React from "react";
import s from './ContactsBlock.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export function ContactsBlock() {
    return (
        <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <div className={s.contactsBlock}>
                <h3 className={s.title}>Contacts</h3>
                    <form className={s.form} action="#" name="Text me">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="text me"></textarea>
                    </form>
            </div>
        </div>
    )
}