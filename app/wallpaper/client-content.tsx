"use client"
import React, {useEffect, useState} from "react";
import {LiveData, Observer} from "../../module/livedata";
import {Tags} from "../../module/components/tags";
import {ImgWrap} from "../../module/components/img/img-wrap";
import {ProgressBar} from "../../module/components/progress-bar";

export function ClientContent({allWallpapers, allTags}) {

    const [selectedTags, setSelectedTags] = useState([allTags[0]])
    const [selectedWallpapers, setSelectedWallpapers] = useState(allWallpapers)

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
            setSelectedWallpapers(allWallpapers)
        } else {
            let displayData = structuredClone(allWallpapers)

            for (let wallpaper of allWallpapers) {
                let notContain = true
                for (let wallpaperTag of wallpaper.tags) {
                    console.log(wallpaperTag + ' ' + tag.tagName)
                    if (mySelectedTags.mData.findIndex(tag => tag.tagName === wallpaperTag) > -1) {
                        console.log('包含tag')
                        // 包含tag
                        notContain = false
                        break
                    }
                }
                if (notContain) {
                    displayData.splice(
                        displayData.findIndex(item => item.photoUrl === wallpaper.photoUrl),
                        1
                    )
                }
            }

            for(const key in displayData){
                if(displayData[key] == ''){
                    delete displayData[key]
                }
            }

            console.log(displayData)
            setSelectedWallpapers(displayData)
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

    const [previewPhoto, setPreviewWallpaper] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        select(selectedTags)
    })

    return (
        <>
            <Tags allTags={allTags} switchSelectTag={switchSelectTag}/>
            <div>
                <article className="progress-cta" style={{padding: `8px 0`}}>
                    <ProgressBar mode={isLoading ? 'indeterminate' : 'hidden'}/>
                </article>
                <ImgWrap enableScale={true} baseUrl={"/asset/wallpapers/"} onLoading={() => {setIsLoading(false)}} photosData={selectedWallpapers}/>
            </div>
        </>
    )
}