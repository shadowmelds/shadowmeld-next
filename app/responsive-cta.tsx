'use client';

import React, {useEffect, useRef, useState} from "react";
import style from "../styles/home/Home.module.css";
import {Features} from "./features";
import {Skills} from "./skills";
import {Projects} from "./projects";
import {Dialog} from "../module/components/dialog";
import {ViewPage2} from "../module/components/view-page2";
import {MaterialButton} from "../module/components/material-button";
import {useRouter} from "next/navigation";
import {SkillTree} from "./skill-tree";

export function Responsive({featuresData, projectData}) {

    const [component, setComponent] = useState();

    const Normal = () => {

        return(
            <>
                <div className={style.normal}>
                    <Features featuresData={featuresData}/>
                    <Skills/>
                    <Projects projectsData={projectData} onClick={onShowDialog}/>
                    {/*<SkillTree />*/}
                </div>
                <div className={style.desktop}>
                </div>
            </>
        )
    }


    const Desktop = () => {

        // 监听子组件值的改变，从而改变value值
        const onChange = (value) => {
            console.log(`${value.title}`)
        };

        return(
            <>
                <div className={style.normal}>
                    <Features featuresData={featuresData}/>
                    <Projects projectsData={projectData} onClick={onShowDialog}/>
                </div>
                <div className={style.desktop}>
                    <Skills/>
                    {/*<SkillTree />*/}
                </div>
            </>
        )
    }

    const layoutPages = (x) => {
        if (x) {
            console.log(`desktop`)
            // @ts-ignore
            setComponent(Desktop)
        } else {
            console.log(`normal`)
            // @ts-ignore
            setComponent(Normal)
        }
    }

    const updateDimensions = () => {
        let mediaQuery = window.matchMedia('(min-width: 1200px)')
        layoutPages(mediaQuery.matches)
        mediaQuery.addEventListener('change', event => {
            layoutPages(event.matches)
        })
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            updateDimensions()
        }
    }, []);

    const [showDialog, setShowDialog] = useState(false)
    const Item = (url) => {
        return (
            <div>
                <img src={url}/>
            </div>
        )
    }

    const itemData = [
        '/asset/project/img/shadowmeld-home-design.png',
        '/asset/project/img/shadowmeld-home-design.png',
        '/asset/project/img/shadowmeld-home-design.png'
    ]

    const onPrevious = useRef(null);
    const onNext = useRef(null);

    const onShowDialog = () => {
        setShowDialog(true)
    }

    let router = useRouter()

    return (
        <main>

            <div className={style.columns} id={style.columns}>
                {component}
            </div>

            {showDialog && <Dialog onClose={() => {
                router.push('/')
                setShowDialog(false)
            }} modal={false}>
                <div className="app-container">
                    <ViewPage2 onNext={onNext} onPrevious={onPrevious} Item={Item} itemData={itemData}/>

                    <MaterialButton content='前一页' onClick={() => {
                        onPrevious.current.func()
                    }} />

                    <MaterialButton content='后一页' onClick={() => {
                        onNext.current.func()
                    }} />
                </div>
            </Dialog>}

        </main>
    )
}