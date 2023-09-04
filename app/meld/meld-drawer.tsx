'use client'

import style from "../../styles/meld/Meld.module.css"
import {MeldCategory} from "./meld-category";
import {MeldEntry} from "./meld-entry";

export function MeldDrawer({onMeldEditor}) {

    return (
        <div className={style.meldDrawer}>
            <MeldCategory/>
            <div className={style.meldDivider}></div>
            <MeldEntry/>
            <div className={style.meldEditor} onClick={onMeldEditor}>
                Test
            </div>
        </div>
    )
}