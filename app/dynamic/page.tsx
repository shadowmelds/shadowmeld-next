'use client';

import style from '../../styles/dynamic/Dynamic.module.css';
import {Layout} from "../../module/components/layout";

export default function Page() {

    return (
        <Layout>
            <div className={style['dynamic-cta']}>

                <main>
                    <section>
                        <h2 className='section-h2'>Editor</h2>
                    </section>
                </main>
            </div>
        </Layout>
    )
}