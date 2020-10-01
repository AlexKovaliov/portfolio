import React from "react";
import s from './ContactsBlock.module.css'


export function ContactsBlock() {
    return (
        <div className={s.container}>
            <div className={s.contactsBlock}>
                <h3 className={s.title}>Contacts</h3>
                <div className={s.forms}>
                    <form action="#" name="Text me">
                        
                    </form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text me"></textarea>
                </div>
            </div>
        </div>
    )
}