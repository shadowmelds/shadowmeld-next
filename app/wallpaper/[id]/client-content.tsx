"use client"
import {Layout} from "../../../module/components/layout";
import style from "../../../styles/wallpaper/Wallpaper.module.css";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {MaterialButton} from "../../../module/components/material-button";

export function ClientContent({allWallpaper, wallpaper}) {

    let [current, setCurrent] = useState(null)

    useEffect(() => {
        for (let wp of allWallpaper) {
            // console.log(`${wallpaper}.png正在找${wp.photoUrl}`)
            if (`${wallpaper.id}` == wp.photoUrl.slice(0, wp.photoUrl.lastIndexOf('.'))) {
                console.log(`找到了${wp.date}`)
                setCurrent(wp)
                break
            }
        }
    }, [current])

    return (
        <Layout >
            <div className={style['wallpaper-cta']}>
                <main>
                    <section className={style.wallpaper}>

                        <div className={`app-container ${style['app-container']}`}>

                            <a title="查看所有壁纸" aria-label="back to wallpaper list" className={style['back-wallpapers-list']} href="../wallpaper" target="_self">← 查看所有壁纸</a>

                            <img className={style['wallpaper-preview']} src={
                                `/asset/wallpapers/${wallpaper.id}.png!avif`
                            } alt={"previewPhoto.description"}/>

                            {
                                current ?
                                <div className={style['wallpaper-info']}>
                                    <h3>{current.description}</h3>
                                    <div>
                                        <span>{`日期：${current.date}`}</span>
                                        <span className={`margin-holder`}></span>
                                        <span>{`分辨率：${current.resolution}`}</span>
                                        <span className={`margin-holder`}></span>
                                        <a href={`/asset/wallpapers/${current.photoUrl}`} download={`${current.photoUrl}`} onClick={(e)=>{e.stopPropagation()}}>
                                            <MaterialButton content='下载原始图片'/>
                                        </a>
                                    </div>
                                </div> : null
                            }
                        </div>

                    </section>
                </main>
            </div>
        </Layout>
    )
}