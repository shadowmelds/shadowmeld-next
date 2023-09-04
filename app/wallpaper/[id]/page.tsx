import React from "react";
import {ClientContent} from "./client-content";
import {getPost, getWallpapers} from "../../../module/data-loader";

export default async function Page({params}) {
    const wallpaper = params
    const data = await getData()

    return (
        <>
            <ClientContent allWallpaper={data.allWallpapers} wallpaper={wallpaper}/>
        </>
    )
}


async function getData() {

    let wallpapers = await getWallpapers()

    return {
        allWallpapers: wallpapers["wallpapers"].reverse(),
    }
}
