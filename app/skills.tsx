import React, {use, useEffect, useRef, useState} from "react";
import style from "../styles/home/Home.module.css";
import {getSkill, hexToRGBA, loadJson} from "../module/utils";
import {SVGInject} from "../module/components/svg-inject";
import {LiveData, Observer} from "../module/livedata";

export function Skills() {

    let [skillsData, setSkillData] = useState(null)

    let liveData = new LiveData()
    liveData.observer(
        new Observer(data => {
            setSkillData(data)
            }
        ))

    if (skillsData == null) {

        loadJson(`/asset/skill.json`, (data) => {
            const skill = JSON.parse(data)
            liveData.postValue(getSkill(skill['skill']))
        })
    }

    return (

        <section className={style.skills}>

            <div className={style['app-container']}>

                <h2 className='section-h2'>Skills</h2>

                <div className={style['skills-cta']} id={style['skills-cta']}>

                    {skillsData && skillsData.map((skill) => (
                            <SkillChip key={skill.id} skill={skill}></SkillChip>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}


export function SkillChip({skill}) {

    const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

    useEffect(() => {
        setIsMounted(true);
    },[]);

    return (
        <>
            <style jsx>{`

              .${style.skill}.skill-${skill.id} {
                background-color: transparent;
              }

              .${style.skill}.skill-${skill.id} {
                border: 1px solid #707070;
              }

              .${style.skill}.skill-${skill.id}:focus, ${style.skill}.skill-${skill.id}.is-focused {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id}:focus .img-icon path, ${style.skill}.skill-${skill.id}.is-focused .img-icon path{
                fill: white;
                fill-opacity: 1;
              }
              
              .${style.skill}.skill-${skill.id}:focus:not(:active), ${style.skill}.skill-${skill.id}.is-focused:not(:active) {
                box-shadow: 0 0.5em 1em -0.125em ${hexToRGBA('#000000', 0.2)}, 0 0px 0 0.125em ${skill.iconColor};
                border-color: ${skill.primary};
                background-color: ${skill.primary};
                color: ${skill.titleColor};
              }
              
              .${style.skill}.skill-${skill.id}:hover, ${style.skill}.skill-${skill.id}.is-hovered {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id}:active, ${style.skill}.skill-${skill.id}.is-active {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id} .button-text {
                color: ${skill.titleColor};
              }
            `}

            </style>
            <style jsx global>{`
              .img-icon {
                height: 22px;
                width: 22px;
              }
              
              .img-icon path{
                fill: black;
                fill-opacity: 1;
              }
              
              .${style.skill}.skill-${skill.id}:focus:not(:active) .img-icon path, ${style.skill}.skill-${skill.id}.is-focused:not(:active) .img-icon path{
                fill: ${skill.titleColor};
                fill-opacity: 1;
              }
            `}</style>

            <button className={`button is-rounded ${style.button} ${style.skill} skill-${skill.id}`}>
                {/*{isMounted && <span className={style.icon} dangerouslySetInnerHTML={{__html: `<img class=\"img-icon\" module=${skill.json.icon} onload=\"SVGInject(this)\" alt=\"SkillData Icon\">`}}>*/}
                {/*</span>}*/}
                {/*<span className={style['button-text']}>{skill.json.title}</span>*/}

                {isMounted && <span className={style.icon}>
                    <SVGInject svgPath={skill.icon}/>
                </span>}
                <span className={style['button-text']}>{skill.title}</span>
            </button>

        </>
    )
}
