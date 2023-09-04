import style from "../../styles/component/ViewPage2.module.css";
import {useImperativeHandle} from "react";

export function ViewPage2({onPrevious = null, onNext = null, onSwitchTo = null, Item, itemData}) {

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

    let myCurrentId = 0
    let pageMaxIndex = itemData.length-1

    function previous() {
        if (myCurrentId > 0) {
            let targetId = myCurrentId -1
            switchOf(myCurrentId, targetId)
        }
    }

    function next() {
        if (myCurrentId < pageMaxIndex) {
            let targetId = myCurrentId +1
            switchOf(myCurrentId, targetId)
        }
    }

    function switchEnd(targetId) {
        if ((targetId > myCurrentId && myCurrentId < pageMaxIndex) || (targetId < myCurrentId && myCurrentId > 0)) {
            switchOf(myCurrentId, targetId)
        }
    }

    function switchTo(targetId) {
        switchOf(myCurrentId, targetId)
    }

    function switchOf(currentId, targetId) {
        if (targetId <= pageMaxIndex && targetId >= 0) {
            const direction = currentId > targetId ? 'previous' : 'next'
            console.log(`${direction} ${currentId} ${targetId}`)
            const bodyWrapper = document.getElementById('body-wrapper')
            bodyWrapper.style.transform = `translate3d(${-(targetId * (bodyWrapper.clientWidth))}px, 0px, 0px)`
            myCurrentId = targetId
        }
    }

    return (
        <div className={style['view-page']}>

            <div className={style['body-wrapper']} id='body-wrapper'>

                {
                    itemData.map((item, index) => {

                        return (
                            <div key={index} className={`${style['body-content']}`} id={`body-content-${index}`}>
                                {Item(item)}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}