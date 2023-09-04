'use client'

import {MeldDrawer} from "./meld-drawer";
import {MeldMain} from "./meld-main";
import {useState} from "react";
import {MeldEditor} from "./meld-editor";

export function ClientContent() {

    const [showDialog, setShowDialog] = useState(false)

    return (
        <>
            <MeldDrawer onMeldEditor={() => {setShowDialog(true)}}/>
            <div className="content-cta">
                <div className="content-cta">
                    <MeldMain />
                </div>
                {/*<MeldFooter navigations={navigationItem} socials={socialItem} />*/}
            </div>

            {showDialog && <MeldEditor onClose={() => {setShowDialog(false)}} modal={true}>
                <h2>Title</h2>
                <p>Text</p>
            </MeldEditor>}

        </>
    )
}