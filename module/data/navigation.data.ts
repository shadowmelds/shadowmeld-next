export interface NavigationData {
    name: string,
    href: string
}

export const navigationItem: NavigationData[] = [
    {
        name: "关于",
        href: "/posts/about"
    },
    // {
    //     name: "留言",
    //     href: "comment"
    // },
    {
        name: "短文",
        href: "/posts"
    },
    {
        name: "照片",
        href: "/photo"
    },
    {
        name: "壁纸",
        href: "/wallpaper"
    },
    {
        name: "组件",
        href: "/component"
    },
    {
        name: "Meld",
        href: "/meld"
    },
]