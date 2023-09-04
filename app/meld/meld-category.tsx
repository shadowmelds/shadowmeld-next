import style from "../../styles/meld/Meld.module.css"

export function MeldCategory() {
    return (
        <div className={style.categoryCta}>
            <div className={style.categoryItem}>
                <span>道</span>
            </div>

            <div className={style.categoryItem}>
                <span>器</span>
            </div>

            <div className={style.categoryItem}>
                <span>法</span>
            </div>

            <div className={style.categoryItem}>
                <span>术</span>
            </div>
        </div>
    )
}