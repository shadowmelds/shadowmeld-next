import Link from "next/link";
import style from "../../styles/component/NavDrawer.module.css"
import {SVGInject} from "./svg-inject";
import {SwitchThemeButton} from "./switch-theme-button";

export function NavDrawer({mainTabs}) {

    return (
        <div className={style.navDrawer}>

            <button className={style.actionIcon}
                    name="Enable dark theme"
                    title="启用深色主题"
                    aria-label="启用深色主题">
                <SVGInject svgPath={`/icons/menu_open_black_24dp.svg`}/>
            </button>
            <ul className={style.tabs}>
                <li className={style.tab}>
                    <Link className={style.tabCta} href="/">
                        <img className={style.logo} src="/img/avr.png" alt="ShadowmeldIcon"/>
                        <span>这儿是影遁 🤪</span>
                    </Link>
                </li>
                {mainTabs.map((tabItem) => (
                    <li key={tabItem.tabId} className={style.tab} id={tabItem.tabId}>
                        <a className={style.tabCta} href={`/${tabItem.tabHref}`}>
                            <SVGInject svgPath={`/icons/${tabItem.icon}`} style={{width: '24px', height: '24px'}}/>
                            <span>{tabItem.tabText}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <SwitchThemeButton />
        </div>
    )
}