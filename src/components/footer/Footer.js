import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/style/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.containerFooter}`}>
                <h3 className={style.title}>
                    Дмитрий Яковенко
                </h3>
                <div className={style.items}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <div className={style.copyright}>
                    © 2019 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
