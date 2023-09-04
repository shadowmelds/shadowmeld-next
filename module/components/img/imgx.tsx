import React from "react";

export function ImgX({enableScale, baseUrl, photo, onClick}) {

    let imgUrl
    if (enableScale) {
        let photoUrl = photo.photoUrl
        imgUrl = `${baseUrl}${photoUrl + "!avif"}`
    } else {
        imgUrl = enableScale ? `${baseUrl}${photo.photoUrl}` : `${baseUrl}${photo.photoUrl}`
    }

    return (
        <div className={'img_x'} onClick={onClick}>
            <i></i>
            <img src={imgUrl} alt={"图片"}/>
        </div>
    )
}