import { useEffect } from "react"
import { usePathname } from 'next/navigation';

interface Instance {
    ws: WebSocket
    timer: any
}

let instance: Instance = {
    ws: null as any,
    timer: null as any
}

function getInstance() {
    if (instance.ws === null) {
        instance.ws = new WebSocket('ws://localhost')
    }
    return instance
}

function _HotLoad({ setPost, params }: any) {
    const asPath = usePathname()
    useEffect(() => {
        const instance = getInstance()
        instance.ws.onmessage = async (res: any) => {
            const data = JSON.parse(res.data)
            if (data.event === 'markdown-changed') {
                console.log(`data.path:${asPath.indexOf(data.path)}`)
                if (asPath.indexOf(data.path) != -1) {
                    console.log(`params:${params}`)
                    const post = await getPreviewData(params)
                    console.log(`post:${post}`)
                    setPost(post)
                }
            }
        }
        return () => {
            instance.ws.CONNECTING && instance.ws.close(4001, asPath)
        }
    }, [])
    return null
}

export function getPreviewData(params: string) {
    if (instance.timer) {
        clearTimeout(instance.timer)
    }
    return new Promise((resolve) => {
        instance.timer = setTimeout(async () => {
            let xmlhttp: XMLHttpRequest;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                console.log('浏览器不支持');
            }
            if (xmlhttp != null) {
                xmlhttp.open('get', params, true);
                xmlhttp.send();
                xmlhttp.onreadystatechange = () => {
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        resolve(xmlhttp.responseText);
                    }
                };
            }
        }, 200)
    })
}

let core = ({ setPost, params }: any)=>null

if(process.env.NODE_ENV === 'development'){
    console.log('development hot load');
    core = _HotLoad
}

export const HotLoad = core