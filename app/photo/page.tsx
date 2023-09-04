import {getPhotos} from "../../module/data-loader";
import {Layout} from "../../module/components/layout";
import style from "../../styles/photo/Photo.module.css";
import React, { Suspense } from "react";
import {ClientContent} from "./client-content";

export default async function Page() {

    const data = await getData()

    return (
        <Layout>
            <div className={style['photo-cta']}>
                <main>
                    <section>
                        <div className="app-container">
                            <ClientContent photosData={data.photosData} />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

async function getData() {
    let photosData = await getPhotos()
    return {
        photosData: photosData.reverse()
    }
}