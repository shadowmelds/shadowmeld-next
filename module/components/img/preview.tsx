import React from "react";

export function Preview({baseUrl, previewPhoto, onPreview}) {

    if (previewPhoto == null) {
        return null
    } else {
        return (

            <div className={`${'dialog-mask'} ${'is-display'}`} id={'dialog-mask'} onClick={() => {
                onPreview(null)
            }}>

                <div className={'photo-preview-linear'}>
                    <div className={'photo-preview-cta'}>

                        <img className={'photo-preview'} id={'photo-preview'} src={
                            `${baseUrl}${previewPhoto.photoUrl}`
                        } alt={previewPhoto.description}/>

                        <div className={'photo-text'}>

                            <p className={'photo-description'} id={'photo-description'}>
                                {previewPhoto.description}
                            </p>
                            <p className={'photo-date'} id={'photo-date'}>
                                {`日期：${previewPhoto.date}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}