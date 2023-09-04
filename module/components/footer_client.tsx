'use client'

import {SocialSvgIcon} from "../../app/social-svg-icon";
import {use, useEffect, useState} from "react";
import {getFriend, getSocial} from "../data-loader";
import {loadJson} from "../utils";

export function FooterClient({navigations}) {

    const [socials, setSocials] = useState(null)
    const [friend, setFriend] = useState(null)

    useEffect(() => {
        if (socials == null) {
            loadJson(`/asset/social.json`, (data) => {
                const socials = JSON.parse(data)
                setSocials(socials['social'])
            })
        }

        if (friend == null) {
            loadJson(`/asset/friend.json`, (data) => {
                const friend = JSON.parse(data)
                setFriend(friend['friend'])
            })
        }
    })

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
                {socials != null && socials.map((socialItem) =>
                    (
                        <SocialSvgIcon key={socialItem.name} socialItem={socialItem} />
                    ))}

            </div>
            <div className="space-2"></div>
            <div className="content has-text-centered">
                <div>友链 ·
                    {friend != null && friend.map((friendItem) =>
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