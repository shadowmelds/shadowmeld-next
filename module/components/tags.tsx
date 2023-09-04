export function Tags({allTags, switchSelectTag}) {
    return (

        <div id={'tags-cta'}>
            {
                allTags.map((tag) => (
                    <button
                        key={tag.index}
                        className={`button is-rounded shadowmeld-tag unselected shadowmeld-tag-${tag.index}`}
                        onClick={() => switchSelectTag(tag)}>
                        <span className={`icon material-icons`}>close</span><span
                        className="button-text">{`${tag.tagName} ${tag.tagCount}`}</span></button>
                ))
            }
        </div>

    )
}