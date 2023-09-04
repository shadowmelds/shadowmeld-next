'use client';

import style from '../../styles/labs/Libs.module.css';
import {Layout} from "../../module/components/layout";
import {Input} from "../../module/components/input";
import {MaterialButton} from "../../module/components/material-button";

export default function Page() {

    return (
        <Layout>
            <div className={style['lib-cta']}>

                <main>
                    <section>
                        <h2 className='section-h2'>这里是代码实验室</h2>
                        <div className={style['app-container']}>

                            <div className={style['account-panel']}>
                                <Input tip={"账号"} />
                                <Input tip={"密码"} />

                                <div >
                                    <MaterialButton content="登录" />
                                    <MaterialButton content="注册" />
                                </div>
                            </div>
                            <div className={style['client-panel']}>

                                <p>请求</p>

                                <p className={style.code}>
                                    登录：GET /users/:username/likes
                                    <br/>
                                    注册：POST /users/:username/likes
                                </p>
                                <p>返回</p>
                                <p className={style.code}>
                                    test
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className=''>评论</h2>
                        <div className={style['app-container']}>

                            <div className={style['account-panel']}>

                                <Input tip={"Input Text"} />
                                <div >
                                    <MaterialButton content="发布" />
                                    <MaterialButton content="未登录发布" />
                                </div>
                            </div>
                            <div className={style['client-panel']}>

                                <p>请求</p>

                                <p className={style.code}>
                                    登录：GET /users/:username/likes
                                    <br/>
                                    注册：POST /users/:username/likes
                                </p>
                                <p>返回</p>
                                <p className={style.code}>
                                    test
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
