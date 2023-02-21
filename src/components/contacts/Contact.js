import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../../common/style/Container.module.css";



function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.containerContact}`}>
                <h3 className={styleContainer.title}>Контакты</h3>
                    <form action="" className={style.form}>
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <textarea className={style.textarea} name="" id="" cols="30" rows="10"></textarea>
                    </form>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}

export default Contact;
