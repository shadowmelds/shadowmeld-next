import Dir from "./dir";
import {NavDrawer} from "./nav-drawer";
import {mainTabItem} from "../data/header-tab.data";
import {Header} from "./header";
import {Footer} from "./footer";
import {navigationItem} from "../data/navigation.data";
import {FooterClient} from "./footer_client";

export function Layout({dir = null, children}) {

    return (
        <div id="__next">
            <NavDrawer mainTabs={mainTabItem}/>
            <div className="content-cta">
                <Header mainTabs={mainTabItem} />
                {dir != null &&
                    <>
                        <div className="content-cta">
                            <div className='dir-layout'>
                                {children}
                            </div>
                            <div className="sitemask"></div>
                        </div>
                    </>
                }
                {dir == null && children}
                <FooterClient navigations={navigationItem} />
            </div>

            {dir != null &&
                <Dir>
                    {dir}
                </Dir>
            }
        </div>
    )
}