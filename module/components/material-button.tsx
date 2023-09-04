import style from "../../styles/component/MaterialButton.module.css";
export function MaterialButton({content, onClick = null}) {
    return (
        <button className={`${style['material-button']} ${style.raised}`} onClick={onClick}>
            {content}
        </button>
    )
}