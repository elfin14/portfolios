import React from 'react';
import style from './Works.module.css'
import Workitem from "./workitem/Workitem";
import styleContainer from "../../common/style/Container.module.css";


function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.containerWorks}`}>
                <h3 className={styleContainer.title}>Мои работы</h3>
                <div className={style.workItem}>
                    <Workitem title={'Todolist'} description={"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"} />
                    <Workitem title={'Social network'} description={"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."} />
                </div>
            </div>
        </div>
    );
}

export default Works;
