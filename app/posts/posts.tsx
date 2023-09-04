import style from "../../styles/posts/PostsList.module.css";

export function Posts({allYears, selectedMarkdowns}) {
    return (

        <div id={style['posts-cta']}>

            <div className={style['timeline-cta']}>
                {
                    allYears.map((year) => (

                        <div key={year}>
                            {
                                selectedMarkdowns[year] != null ? <div key={year}>

                                    <div className={style['timeline-box']}><h4 className={style['timeline-h4']}>{year}</h4>
                                        <hr/>
                                    </div>
                                    <div className={`${style['is-ancestor']} ${style['single-posts-cta']}`}>

                                        {
                                            selectedMarkdowns[year].slice().reverse().map((markdown) => (

                                                <a key={markdown.url} className={`${style.boox} ${style['posts-link']}`} href={`/posts/${markdown.url.replace(/\.md$/, '')}`}>
                                                    <div className={style['item']}>
                                                        <div className={style['image-layout']} id={`${markdown.url.replace(/\.md$/, '')}`}
                                                             style={{backgroundImage: `url('/asset/posts/img/${markdown.image}')`}}></div>
                                                        <div className={style['posts-message-cta']}><h3
                                                            className={`title ${style.title} is-4 ${style['mat-h4']}`}>{markdown.title}</h3><p
                                                            className={style.content}>{markdown.content}</p><p className={style.date}><span
                                                            className={`icon material-icons ${style.icon}`}>calendar_today</span>{markdown.date}
                                                        </p></div>
                                                    </div>
                                                </a>
                                            ))
                                        }

                                    </div>
                                </div> : <></>
                            }

                        </div>
                    ))
                }

            </div>

        </div>
    )
}