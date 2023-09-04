import style from "../../styles/posts/PostsList.module.css";
import {hideDir, scrollToAnchor} from "../../module/utils";

export function PostsListDir({allYears, selectedMarkdowns}) {
    return (

        <div className={style['posts-dir']}>
            {
                allYears.map((year) => (
                    <div key={year}>
                        {
                            selectedMarkdowns[year] != null ? <>

                                <ul>
                                    <li className="dir-parent">
                                        <a className={style['dir-toggle']}>
                                            <span className={`${style['dir-arrow-down']} material-icons`}>event</span><span>{year}</span>
                                        </a>
                                        <ul className="dir-list">
                                            {
                                                selectedMarkdowns[year].slice().reverse().map((markdown) => (
                                                    <li key={markdown.title} className={style['dir-item']}>
                                                        <a className={`${style['dir-link']} scroll`}
                                                           onClick={()=>{
                                                               scrollToAnchor(`${markdown.url.replace(/\.md$/, '')}`)
                                                               hideDir()
                                                           }}>
                                                            {markdown.title}
                                                        </a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </li>
                                </ul>
                            </> :<></>
                        }
                    </div>

                ))
            }
        </div>

    )
}