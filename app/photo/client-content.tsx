"use client"
import React, {Suspense, useState} from "react";
import {ImgWrap} from "../../module/components/img/img-wrap";
import {ProgressBar} from "../../module/components/progress-bar";

export function ClientContent({photosData}) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <div>
                <h2 className="section-h2">📸 相册</h2>
                <article className="progress-cta" style={{padding: `8px 0`}}>
                    <ProgressBar mode={isLoading ? 'indeterminate' : 'hidden'}/>
                </article>
                <ImgWrap enableScale={true} baseUrl={"/asset/photos/"} onLoading={() => {setIsLoading(false)}} photosData={photosData}/>
            </div>
        </>
    )
}