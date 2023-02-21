import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../../common/style/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.containerSkills}`}>
                <h2 className={styleContainer.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={"Lorem ipsum dolor sit amet."}/>
                    <Skill title={'React'} description={"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."}/>
                    <Skill title={'HTML&CSS'} description={"Lorem ipsum dolor sit amet."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
