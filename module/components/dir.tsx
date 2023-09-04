'use client'

import style from "../../styles/component/Dir.module.css";

export default function Dir({children}) {
    return (
        <div className={style.dir} id='dir'>
            <nav className={style['dir-cta']} id={style['dir-cta']}>
                {children}
            </nav>
        </div>
    )
}