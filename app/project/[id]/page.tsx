import {Layout} from "../../../module/components/layout";
import {ClientContent} from "./client-content";

export default function Page({params}) {

    return (
        <Layout>
            <main>
                <ClientContent id={params.id}/>
            </main>
        </Layout>
    )
}