'use client'
import React, {useEffect, useRef, useState} from "react";
import {MaterialButton} from "../../../module/components/material-button";
import {loadJson} from "../../../module/utils";
import {LiveData, Observer} from "../../../module/livedata";
import {ViewPage2} from "../../../module/components/view-page2";

export function ClientContent({id}) {

    let [itemData, setItemData] = useState(null)

    let liveData = new LiveData()
    liveData.observer(
        new Observer(data => {
            setItemData(data)
        }
    ))

    if (itemData == null) {

        loadJson(`/asset/projects.json`, (data) => {
            const project = JSON.parse(data)
            console.log(`id：${id.id} 对象：${JSON.stringify(project['projects'][id])}`)
            liveData.postValue(project['projects'][id])
        })
    }

    const onPrevious = useRef(null);
    const onNext = useRef(null);

    const Item = (url) => {
        return (
            <div>
                <img src={`/asset/project/img/${url}`}/>
            </div>
        )
    }

    return (
        <section>
            <div className="app-container">

                {itemData && <ViewPage2 onNext={onNext} onPrevious={onPrevious} Item={Item} itemData={itemData['img']}/>}

                <MaterialButton content='前一页' onClick={() => {
                    onPrevious.current.func()
                }} />

                <MaterialButton content='后一页' onClick={() => {
                    onNext.current.func()
                }} />
            </div>
        </section>
    )
}