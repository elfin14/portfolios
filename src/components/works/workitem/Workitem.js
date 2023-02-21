import React from 'react';
import style from './Workitem.module.css'

function Workitem(props) {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <a href="#" className={style.button}>Смотреть</a>
            </div>
            <div className={style.description}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.text}>{props.description}</p>
            </div>
        </div>
    );
}

export default Workitem;
