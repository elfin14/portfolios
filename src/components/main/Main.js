import React from 'react';
import style from './Main.module.css'
import styleContainer from './../../common/style/Container.module.css'

function Main() {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.containerMain}`}>
                <div className={style.title}>
                    <span>Привет!</span>
                    <h1 className={style.name}> меня зовут Дмитрий Яковенко,</h1>
                    <p>я фронтенд разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
