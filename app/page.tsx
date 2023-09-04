import React from "react";
import {Responsive} from "./responsive-cta";
import {getFeatures, getProjects} from "../module/data-loader";
import {Layout} from "../module/components/layout";

export default async function Page() {

    const data = await fetchData();

    return (
        <Layout>
            <Responsive featuresData={data.featuresData}  projectData={data.projectData}/>
        </Layout>
    )
}

async function fetchData() {
    let featuresData = await getFeatures()
    let projectData = await getProjects()

    return {
        featuresData: featuresData,
        projectData: projectData
    };
}