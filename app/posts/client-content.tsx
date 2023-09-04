"use client"
import style from "../../styles/posts/PostsList.module.css";
import {useEffect, useState} from "react";
import {LiveData, Observer} from "../../module/livedata";
import {scrollToTop, switchDir} from "../../module/utils";
import {PostsListDir} from "./posts-list-dir";
import {Tags} from "../../module/components/tags";
import {Posts} from "./posts";
import {Layout} from "../../module/components/layout";

export function ClientContent ({allMarkdowns, allTags, allYears}) {

    const [selectedTags, setSelectedTags] = useState([allTags[0]])
    const [selectedMarkdowns, setSelectedMarkdowns] = useState(allMarkdowns)

    let mySelectedTags = new LiveData(selectedTags)
    mySelectedTags.observer(
        new Observer((data) => {
                setSelectedTags(data)
            }
        )
    )

    const switchSelectTag = (tag) => {

        if (tag.index === 0) {
            if (mySelectedTags.mData.indexOf(tag) <= -1) {
                mySelectedTags.postValue([tag])

            }
        } else {
            if (mySelectedTags.mData.indexOf(tag) > -1) {
                let origin = mySelectedTags.mData
                origin.splice(mySelectedTags.mData.indexOf(tag), 1)
                if (mySelectedTags.mData.length === 0) {
                    mySelectedTags.postValue([allTags[0]])
                } else {
                    mySelectedTags.postValue(origin)
                }
            } else {
                let origin = mySelectedTags.mData
                origin.push(tag)
                if (mySelectedTags.mData.findIndex(tag => tag.index === 0) > -1) {
                    origin.splice(mySelectedTags.mData.findIndex(item => item.index === 0), 1)
                }
                mySelectedTags.postValue(origin)
            }
        }


        if (mySelectedTags.mData.length == 1 && mySelectedTags.mData.findIndex(tag => tag.index === 0) > -1) {
            setSelectedMarkdowns(allMarkdowns)
        } else {
            let displayData = structuredClone(allMarkdowns)
            for (let year in allMarkdowns) {
                for (let md of allMarkdowns[year]) {
                    let notContain = true
                    for (let mdTag of md.tags) {
                        if (mySelectedTags.mData.findIndex(tag => tag.tagName === mdTag) > -1) {
                            // 包含tag
                            notContain = false
                            break
                        }
                    }

                    if (notContain) {
                        displayData[year].splice(
                            displayData[year].findIndex(item => item.url === md.url),
                            1
                        )
                    }
                }
            }

            for(const key in displayData){
                if(displayData[key] == ''){
                    delete displayData[key]
                }
            }

            setSelectedMarkdowns(displayData)
        }
        select(selectedTags)
    }

    const select = (selectedTags) => {
        if (typeof document !== 'undefined') {
            for (let index = 0; index < allTags.length; index++) {
                let element = document.querySelector(`.shadowmeld-tag-${index}`) as HTMLButtonElement
                if (element.classList.contains('selected')) {
                    element.classList.remove('selected')
                    element.classList.add('unselected')
                }
            }

            for (let selectedTag of selectedTags) {
                let element = document.querySelector(`.shadowmeld-tag-${selectedTag.index}`) as HTMLButtonElement
                if (element.classList.contains('unselected')) {
                    element.classList.remove('unselected')
                    element.classList.add('selected')
                }
            }
        }
    }

    useEffect(() => {
        switchDir()
        scrollToTop()
        select(selectedTags)
    })

    return (
        <Layout dir={<PostsListDir allYears={allYears} selectedMarkdowns={selectedMarkdowns}/>}>
            <div className={style['posts-content']}>
                <main>
                    <section className={style.blog}>
                        <div className={`app-container ${style['app-container']}`}>

                            <h2 className="section-h2">🚀 短文</h2>
                            <Tags allTags={allTags} switchSelectTag={switchSelectTag}/>
                            <Posts allYears={allYears} selectedMarkdowns={selectedMarkdowns}/>
                        </div>

                    </section>
                </main>

                <div className="floating-button-cta">

                    <button className={`floating-action-button floating-button-menu ${style['floating-button-menu']}`} id='floating-button-menu'>
                        <span className="material-icons float-icon">menu</span>
                    </button>

                    <button className="floating-action-button" id="floating-button-top">
                        <span className="material-icons float-icon">expand_less</span>
                    </button>
                </div>
            </div>
        </Layout>
    )
}