import {SocialSvgIcon} from "../../app/social-svg-icon";
import { use } from "react";
import {getFriend, getSocial} from "../data-loader";

export function Footer({navigations}) {

    const data = use(fetchData());
    const socials = data.socials
    const friend= data.friend

    return (
        <footer className="footer app-footer">

            <div className="divider"></div>
            <div className="nav-cta">
                <div className="navigation-cta">
                    {navigations.map((navItem) => (
                        // eslint-disable-next-line react/jsx-key
                        <a key={navItem.name} className="navigation-link" href={navItem.href}>{navItem.name}</a>
                    ))}
                </div>
            </div>
            <div className="flex-horizontal">
                {socials.map((socialItem) =>
                    (
                        <SocialSvgIcon key={socialItem.name} socialItem={socialItem} />
                    ))}

            </div>
            <div className="space-2"></div>
            <div className="content has-text-centered">
                <div>友链 ·
                    {friend.map((friendItem) =>
                        (
                            <a className="friend" key={friendItem.name} href={friendItem.link}
                               target="_blank" rel="noreferrer">{friendItem.name}</a>
                        ))}
                </div>
            </div>
            <div className="space-2"></div>
        </footer>
    )
}

async function fetchData() {

    let socials = await getSocial()
    let friend = await getFriend()

    return {
        socials: socials,
        friend: friend
    }
}