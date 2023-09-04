import style from "../styles/home/Home.module.css";
import React, {useEffect, useLayoutEffect} from "react";
import {Graph} from "@antv/x6/es";

export function SkillTree() {
    useEffect(() => {
        let container = document.getElementById('node-container')
        nodeTest(container)
        window.addEventListener('resize', (event) => onResize(event), true);
    })
    function onResize(event): void {
    }

    let data = {
        nodes: [
            {
                id: "applicationSource",
                x: 20,
                y: 110,
                width: 100,
                height: 40,
                label: 'Application',
                attrs: {
                    body: {
                        fill: '#2ECC71', // 背景颜色
                        stroke: '#000',  // 边框颜色
                    },
                    label: {
                        text: 'Application',    // 文本
                        fill: '#333',    // 文字颜色
                        fontSize: 13,    // 文字大小
                    }
                },
            },
            {
                id: "uiTarget",
                x: 180,
                y: 20,
                width: 80,
                height: 40,
                label: 'UI',
                attrs: {
                    body: {
                        fill: '#6200ee',
                        stroke: '#6200ee',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'UI',    // 文本
                        fill: '#fff',    // 文字颜色
                        fontSize: 13,    // 文字大小
                    }
                }
            },
            {
                id: "xdTarget",
                x: 300,
                y: 20,
                width: 80,
                height: 40,
                label: 'Adobe XD',
                attrs: {
                    body: {
                        fill: '#f8fafd',
                        stroke: '#450135',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Adobe XD',    // 文本
                        fill: '#f75eee',    // 文字颜色
                    },
                }
            },
            {
                id: "frontendTarget",
                x: 180,
                y: 80,
                width: 80,
                height: 40,
                label: 'Frontend',
                attrs: {
                    body: {
                        fill: '#3740ff',
                        stroke: '#3740ff',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Frontend',    // 文本
                        fill: '#fff',    // 文字颜色
                    },
                }
            },
            {
                id: "nextJSTarget",
                x: 300,
                y: 80,
                width: 80,
                height: 40,
                label: 'Next.js',
                attrs: {
                    body: {
                        fill: '#f8fafd',
                        stroke: '#0070f3',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Next.js',    // 文本
                        fill: '#000',    // 文字颜色
                    },
                }
            },
            {
                id: "windowsTarget",
                x: 180,
                y: 140,
                width: 80,
                height: 40,
                label: 'Windows',
                attrs: {
                    body: {
                        fill: '#0067c0',
                        stroke: '#0067c0',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Windows',    // 文本
                        fill: '#fff',    // 文字颜色
                    },
                }
            },
            {
                id: "cppTarget",
                x: 300,
                y: 140,
                width: 180,
                height: 40,
                label: 'C++、 Win32、 OpenGL',
                attrs: {
                    body: {
                        fill: '#f8fafd',
                        stroke: '#659bd3',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'C++、 Win32、 OpenGL',    // 文本
                        fill: '#000',    // 文字颜色
                    },
                }
            },
            {
                id: "androidTarget",
                x: 180,
                y: 200,
                width: 80,
                height: 40,
                label: 'Android',
                attrs: {
                    body: {
                        fill: '#3ddc84',
                        stroke: '#3ddc84',
                        rx: 8,
                        ry: 8,
                    }
                }
            },
            {
                id: "composeTarget",
                x: 300,
                y: 200,
                width: 80,
                height: 40,
                label: 'Compose',
                attrs: {
                    body: {
                        fill: '#d6f0ff',
                        stroke: '#37bf6e',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Compose',    // 文本
                        fill: '#041619',    // 文字颜色
                    },
                }
            },
            {
                id: "threeDSource",
                x: 20,
                y: 340,
                width: 100,
                height: 40,
                label: '3D',
                attrs: {
                    body: {
                        fill: '#2ECC71', // 背景颜色
                        stroke: '#000',  // 边框颜色
                    },
                    label: {
                        text: '3D',    // 文本
                        fill: '#333',    // 文字颜色
                        fontSize: 13,    // 文字大小
                    }
                },
            },
            {
                id: "blenderTarget",
                x: 180,
                y: 280,
                width: 80,
                height: 40,
                label: 'Blender',
                attrs: {
                    body: {
                        fill: '#e37200',
                        stroke: '#e37200',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Blender',    // 文本
                        fill: '#fff',    // 文字颜色
                    }
                }
            },
            {
                id: "drawTarget",
                x: 180,
                y: 340,
                width: 80,
                height: 40,
                label: 'Draw',
                attrs: {
                    body: {
                        fill: '#328bfc',
                        stroke: '#328bfc',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Draw',    // 文本
                        fill: '#fff',    // 文字颜色
                    }
                }
            },
            {
                id: "unityTarget",
                x: 180,
                y: 400,
                width: 80,
                height: 40,
                label: 'Unity 3D',
                attrs: {
                    body: {
                        fill: '#a5a5a5',
                        stroke: '#a5a5a5',
                        rx: 8,
                        ry: 8,
                    },
                    label: {
                        text: 'Unity 3D',    // 文本
                        fill: '#fff',    // 文字颜色
                    }
                }
            }
        ],
        // 边
        edges: [
            {
                source: 'applicationSource', // String，必须，起始节点 id
                target: 'uiTarget', // String，必须，目标节点 id
            },
            {
                source: 'uiTarget', // String，必须，起始节点 id
                target: 'xdTarget', // String，必须，目标节点 id
            },
            {
                source: 'applicationSource', // String，必须，起始节点 id
                target: 'frontendTarget', // String，必须，目标节点 id
            },
            {
                source: 'frontendTarget', // String，必须，起始节点 id
                target: 'nextJSTarget', // String，必须，目标节点 id
            },
            {
                source: 'applicationSource', // String，必须，起始节点 id
                target: 'windowsTarget', // String，必须，目标节点 id
            },
            {
                source: 'windowsTarget', // String，必须，起始节点 id
                target: 'cppTarget', // String，必须，目标节点 id
            },
            {
                source: 'applicationSource', // String，必须，起始节点 id
                target: 'androidTarget', // String，必须，目标节点 id
            },
            {
                source: 'windowsTarget', // String，必须，起始节点 id
                target: 'composeTarget', // String，必须，目标节点 id
            },
            {
                source: 'androidTarget', // String，必须，起始节点 id
                target: 'composeTarget', // String，必须，目标节点 id
            },
            {
                source: 'threeDSource', // String，必须，起始节点 id
                target: 'blenderTarget', // String，必须，目标节点 id
            },
            {
                source: 'threeDSource', // String，必须，起始节点 id
                target: 'drawTarget', // String，必须，目标节点 id
            },
            {
                source: 'threeDSource', // String，必须，起始节点 id
                target: 'unityTarget', // String，必须，目标节点 id
            }
        ],
    };

    function nodeTest(container: HTMLElement) {

        // 创建 Graph 的实例
        const graph = new Graph({
            container: container,
            grid: true,
            interacting: {
                nodeMovable: false
            },
        })
        graph.disablePanning() // 禁止画布平移
        graph.fromJSON(data)

    }

    return (
        <section>
            <div className={style['app-container']}>

                <h2 className='section-h2'>学习树</h2>

                <div className={style['node-cta']} >
                    <div className={style['node-container']} id="node-container">

                    </div>
                    <div className={style['mask']} />
                </div>
            </div>
        </section>
    )
}