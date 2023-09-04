import React, {useEffect, useState} from "react";
import {ImgX} from "./imgx";
import {Dialog} from "../dialog";
import style from "../../../styles/component/Dialog.module.css";
import {MaterialButton} from "../material-button";

export function ImgWrap({enableScale, baseUrl, onLoading, photosData}) {

    const [previewPhoto, setPreviewPhoto] = useState(null)

    useEffect(() => {
        console.log("测试")
        imageView().then(r => {
            onLoading(false)
        })
    }, [photosData])

    return (

        <div className={'img-cta'} >
            <div id={'img_wrap'}>
                {
                    photosData.map((photo) => (
                        <ImgX key={photo.photoUrl} enableScale={enableScale} baseUrl={baseUrl} photo={photo} onClick={() => {
                            setPreviewPhoto(photo)
                        }}/>
                    ))
                }

                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>
            {/*<Preview baseUrl={baseUrl} previewPhoto={previewPhoto} onPreview={(value) => {*/}
            {/*    setPreviewPhoto(value)*/}
            {/*}}/>*/}


            {previewPhoto != null && <Dialog onClose={() => {setPreviewPhoto(null)}} modal={false}>
                <img className={style.img} src={previewUrl(enableScale, previewPhoto.photoUrl, baseUrl)}/>
                <h3>{previewPhoto.description}</h3>
                <div>
                    <span>{`日期：${previewPhoto.date}`}</span>
                    <span className={`margin-holder`}></span>
                    {enableScale ? <span>{`分辨率：${previewPhoto.resolution}`}</span> : null}
                    <span className={`margin-holder`}></span>
                    <a href={`${baseUrl}${previewPhoto.photoUrl}`} download={`${previewPhoto.photoUrl}`} onClick={(e)=>{e.stopPropagation()}}>
                        <MaterialButton content='下载原始图片'/>
                    </a>

                    {enableScale ? <a href={`/wallpaper/${previewPhoto.photoUrl.substring(0, previewPhoto.photoUrl.lastIndexOf('.'))}`} onClick={(e)=>{e.stopPropagation()}}>
                        <MaterialButton content='分享'/>
                    </a> : null}
                </div>
            </Dialog>}
        </div>
    )
}

function previewUrl(enableScale, photoUrl, baseUrl) {

    if (enableScale) {
        return `${baseUrl}${photoUrl + "!avif"}`
    } else {
        return `${baseUrl}${photoUrl}`
    }
}

async function imageView(): Promise<void> {
    const imgs = document.getElementById('img_wrap').getElementsByClassName('img_x');
    console.log(imgs.length);
    for (let i = 0; i < imgs.length; i++) {
        imgbox(imgs[i], i, imgs.length - i);
    }
}

function imgbox(obj, i, l): void {
    if (typeof document !== 'undefined') {
        let width = (document.getElementById('img_wrap') as HTMLDivElement).clientWidth
        console.log('w' + width)
        const imgSrc = obj.querySelector('img').getAttribute('src')
        getImageWidth(imgSrc, (w, h) => {
            obj.querySelector('i').style.paddingBottom = `${h / w * 100}%`
            obj.style.width = `${w * 200 / h }px`
            obj.style.flexGrow = `${(w * 200) / h}`

            // obj.style.flexBasis = `${(w * (width * 0.14)) / h}px`
        });
    }
}

function getImageWidth(url, callback): void {
    const img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = () => {
            callback(img.width, img.height);
        };
    }
}