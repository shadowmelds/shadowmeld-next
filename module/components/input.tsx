import style from "../../styles/component/Input.module.css";
export function Input({tip = "请输入内容"}) {
    return (
        <label htmlFor="">
            <input className={style['input-box']} placeholder={tip}></input>
        </label>
    )
}