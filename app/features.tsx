import style from "../styles/home/Home.module.css";
import React from "react";

export function Features({featuresData}) {
    return (
        <section className={style.features}>
            <div className={style['app-container']}>
                <img className={style['info-logo']} src={`/img/${featuresData.avatar}`} alt="头像"/>
                <h3 className={style.hello}><span className={style.about_wave__2bBrx}>👋</span> {featuresData.hello} </h3>
                <a className={style.text}>
                    <p> {featuresData.summary} </p>
                </a>
            </div>
        </section>
    )
}
