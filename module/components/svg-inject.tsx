'use client';
import {useEffect, useState} from "react";

export function SVGInject({svgPath, style = null}) {

    const [icon, setIcon] = useState("")

    useEffect(() => {
        loadSVGData(svgPath).then(text => {
            // @ts-ignore
            setIcon(text)
        })
    })

    return (
        <div style={style} dangerouslySetInnerHTML={
            {__html: icon}
        }>
        </div>
    )
}

export async function loadSVGData(svgPath) {
    return await new Promise(resolve => {
        let xmlHttp: XMLHttpRequest;
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else {
            console.log('浏览器不支持');
        }

        if (xmlHttp != null) {
            xmlHttp.open('get',svgPath, true)
            xmlHttp.send();
            xmlHttp.onload = () => {
                if (xmlHttp.status === 200) {
                    resolve(xmlHttp.responseText);
                }
            }
            xmlHttp.onerror = () => {
                resolve(undefined);
            }
        }
    })
}
