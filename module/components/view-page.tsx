import style from "../../styles/component/ViewPage.module.css";
import {useImperativeHandle} from "react";
export function ViewPage({onPrevious = null, onNext = null, onSwitchTo = null, Item, itemData}) {

    useImperativeHandle(onPrevious, () => {
        return {
            func: previous,
        };
    })

    useImperativeHandle(onNext, () => {
        return {
            func: next,
        };
    })

    useImperativeHandle(onSwitchTo, () => ({
        func: (targetId) => {
            switchEnd(targetId)
        }})
    )

    let currentId = 0
    let pageMaxIndex = itemData.length-1

    function previous() {
        if (currentId > 0) {
            let targetId = currentId -1
            switchOf(currentId, targetId)
            currentId = targetId
        }
    }

    function next() {
        if (currentId < pageMaxIndex) {
            let targetId = currentId +1
            switchOf(currentId, targetId)
            currentId = targetId
        }
    }

    function switchEnd(targetId) {
        if ((targetId > currentId && currentId < pageMaxIndex) || (targetId < currentId && currentId > 0)) {
            switchOf(currentId, targetId)
            currentId = targetId
        }
    }

    function switchTo(targetId) {
        switchOf(currentId, targetId)
    }

    function switchOf(currentId, targetId) {

        const direction = currentId > targetId ? 'previous' : 'next'

        let currentBody = document.getElementById(`item-body-${currentId}`)
        let targetBody = document.getElementById(`item-body-${targetId}`)
        let currentBodyContent = document.getElementById(`body-content-${currentId}`)
        let targetBodyContent = document.getElementById(`body-content-${targetId}`)

        currentBody.className = style['item-body']
        targetBody.className = `${style['item-body']} ${style['item-body-active']}`
        currentBodyContent.className = `${style['body-content']} ${style[`body-content-animating-${direction}`]}`
        targetBodyContent.className = `${style['body-content']} ${style['body-content-animating-target']}`
        targetBodyContent.addEventListener('webkitTransitionEnd', () => {
            targetBodyContent.className = `${style['body-content']} ${style['body-content-active']}`
        },{once: true})
        currentBodyContent.addEventListener('webkitTransitionEnd', () => {

            if (Math.abs(currentId - targetId) > 1 && direction === 'next') {
                for (let id = currentId; id < targetId; id++) {
                    document.getElementById(`body-content-${id}`).className = `${style['body-content']} ${style[`body-content-${direction}-unactive`]}`
                }
            } else if (Math.abs(currentId - targetId) > 1 && direction === 'previous') {
                for (let id = currentId; id > targetId; id--) {
                    document.getElementById(`body-content-${id}`).className = `${style['body-content']} ${style[`body-content-${direction}-unactive`]}`
                }
            }
            currentBodyContent.className = `${style['body-content']} ${style[`body-content-${direction}-unactive`]}`
        },{once: true})
    }

    return (
        <div className={style['body-wrapper']}>

            {
                itemData.map((item, index) => {

                    let itemBodyClassName: string
                    let bodyContentClassName: string

                    if (index == currentId) {
                        itemBodyClassName = `${style['item-body']} ${style['item-body-active']}`
                        bodyContentClassName = `${style['body-content']} ${style['body-content-active']}`
                    } else if (index > currentId) {
                        itemBodyClassName = style['item-body']
                        bodyContentClassName = `${style['body-content']} ${style['body-content-previous-unactive']}`
                    } else {
                        itemBodyClassName = style['item-body']
                        bodyContentClassName = `${style['body-content']} ${style['body-content-next-unactive']}`
                    }

                    return (
                        <div key={index} className={itemBodyClassName} id={`item-body-${index}`}>
                            <div className={bodyContentClassName} id={`body-content-${index}`}>
                                {Item(item)}
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}