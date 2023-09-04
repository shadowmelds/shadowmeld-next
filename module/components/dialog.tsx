import style from "../../styles/component/Dialog.module.css";
import {SVGInject} from "./svg-inject";

export function Dialog({children, onClose, modal}) {

    let modalClick = () => {
        if (!modal) {
            onClose.call()
        }
    }

    let click = () => {

    }
    return (
        <div className={style['dialog-mask']} onClick={modalClick}>
            <div className={style.dialog}>

                <button className='action-icon'
                        name="Enable dark theme"
                        title="Close"
                        aria-label="Close"
                        onClick={onClose}>
                    <SVGInject svgPath={`/icons/close_black_24dp.svg`}/>
                </button>
                <div className={style['dialog-cta']}>
                    {children}
                </div>
            </div>
        </div>
    )
}