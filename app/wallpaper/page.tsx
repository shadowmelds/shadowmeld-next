import {getPhotos, getWallpapers} from "../../module/data-loader";
import {Layout} from "../../module/components/layout";
import style from "../../styles/wallpaper/Wallpaper.module.css";
import React, { Suspense } from "react";
import {ClientContent} from "./client-content";

export default async function Page() {

    const data = await getData()

    return (
        <Layout>
            <div className={style['wallpaper-cta']}>
                <main>
                    <section>
                        <div className="app-container">
                            <h2 className="section-h2">🖼️ 壁纸</h2>
                            <ClientContent allWallpapers={data.allWallpapers} allTags={data.allTags} />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

async function getData() {
    let wallpapers = await getWallpapers()
    let tagData = wallpapers["tags"]
    let fullTag = []
    let allCount = 0
    for (let index = 0; index < tagData.length; index++) {
        fullTag[index] = {
            index: index + 1,
            tagName: tagData[index],
            tagCount: 0
        }
    }
    for (let wallpaper of wallpapers['wallpapers']) {
        for (const wallpaperTag of wallpaper.tags) {
            fullTag[tagData.indexOf(wallpaperTag)].tagCount += 1;
        }
        allCount += 1;
    }
    fullTag.unshift({
        index: 0,
        tagName: "全部",
        tagCount: allCount
    })

    return {
        allWallpapers: wallpapers["wallpapers"].reverse(),
        allTags: fullTag
    }
}