'use client';
import {ProgressBar} from "../../module/components/progress-bar";
import {ProgressSpinner} from "../../module/components/progress-spinner";
import {Layout} from "../../module/components/layout";
import React, {useEffect, useRef, useState} from "react";
import {MaterialButton} from "../../module/components/material-button";
import {Snackbar} from "../../module/components/snackbar";
import {Dialog} from "../../module/components/dialog";
import style from "../../styles/component/Component.module.css";
import {ViewPage} from "../../module/components/view-page";
import {ViewPage2} from "../../module/components/view-page2";
import {Input} from "../../module/components/input";
import {SkillsContainer} from "../../module/components/skills";

export function ClientContent() {

    const [showDialog, setShowDialog] = useState(false)
    const [snackbar, setSnackbar] = useState(false)

    const onPrevious = useRef(null);
    const onNext = useRef(null);
    const onSwitchTo = useRef(null);

    const onPrevious2 = useRef(null);
    const onNext2 = useRef(null);
    const onSwitchTo2 = useRef(null);

    let itemData = ['Test1', 'Test2', 'Test3']

    let Item = (data) => {
        return (
            <span>
                {data}
            </span>
        )
    }

    return (

        <Layout>
            <main>
                <section id="component-cta">
                    <div className="app-container">
                        <ProgressSpinner />
                        <ProgressBar />
                        <MaterialButton content='显示 Dialog' onClick={() => {
                            setShowDialog(true)
                        }} />
                        <MaterialButton content='显示 Snackbar' onClick={() => {
                            setSnackbar(true)
                        }} />

                        <hr className={style.hr}/>

                        <ViewPage onPrevious={onPrevious} onNext={onNext} onSwitchTo={onSwitchTo} Item={Item} itemData={itemData}/>

                        <MaterialButton content='前一页' onClick={() => {
                            onPrevious.current.func()
                            onPrevious2.current.func()
                        }} />

                        <MaterialButton content='后一页' onClick={() => {
                            onNext.current.func()
                            onNext2.current.func()
                        }} />

                        <MaterialButton content='第一页' onClick={() => {
                            onSwitchTo.current.func(0)
                            onSwitchTo2.current.func(0)
                        }} />

                        <MaterialButton content='最后一页' onClick={() => {
                            onSwitchTo.current.func(2)
                            onSwitchTo2.current.func(2)
                        }} />

                        <ViewPage2 onPrevious={onPrevious2} onNext={onNext2} onSwitchTo={onSwitchTo2} Item={Item} itemData={itemData}/>

                        <hr className={style.hr}/>

                        <Input />

                        <hr className={style.hr}/>

                        {/*<SkillsContainer skillsData={skillsData} />*/}
                        <SkillsContainer />
                    </div>
                </section>

                {showDialog && <Dialog onClose={() => {setShowDialog(false)}} modal={true}>
                    <img className={style.img} src='/asset/project/img/shadowmeld-home-design.png'/>
                    <h2>Title</h2>
                    <p>Text</p>
                </Dialog>}

            </main>

            {snackbar && <Snackbar content={"这里是 Snackbar!"} timeout={3000} onClose={() => {setSnackbar(false)}}></Snackbar>}
        </Layout>
    )
}