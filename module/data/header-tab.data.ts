export interface HeaderTabData {
    tabId: string,
    tabHref: string,
    tabEmoji: string,
    tabText: string,
    icon: string
}

export const mainTabItem: HeaderTabData[] = [
    {
        tabId: "tab-about",
        tabHref: "posts/about",
        tabEmoji: "🙋",
        tabText: "关于",
        icon: "contact_page_black_24dp.svg"
    },
    // {
    //     tabId: "tab-comment",
    //     tabHref: "comment",
    //     tabEmoji: "💭",
    //     tabText: "留言",
    //     icon: "textsms_black_24dp.svg"
    // },
    {
        tabId: "tab-posts",
        tabHref: "posts",
        tabEmoji: "📝",
        tabText: "短文",
        icon: "sticky_note_2_black_24dp.svg"
    },
    {
        tabId: "tab-photo",
        tabHref: "photo",
        tabEmoji: "🌄",
        tabText: "相册",
        icon: "insert_photo_black_24dp.svg"
    },
    {
        tabId: "tab-wallpaper",
        tabHref: "wallpaper",
        tabEmoji: "🐰",
        tabText: "壁纸",
        icon: "cruelty_free_black_24dp.svg"
    }
];