import React from "react";
import {ClientContent} from "./client-content";
import {getPost} from "../../../module/data-loader";

export default async function Page({params}) {

    const url = `/asset/posts/${params.id}.md`
    const post = await getPost(`${params.id}.md`)
    return (
        <>
            <link rel="stylesheet" href="/postscss/markdown-style.css"/>
            <ClientContent url={url} post={post}/>
        </>
    )
}
