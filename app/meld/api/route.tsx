import {NextResponse} from "next/server";
import {getWallpapers} from "../../../module/data-loader";

export async function GET(request: Request) {
    let data = await getWallpapers()
    // return NextResponse.json(module)
    return NextResponse.json("222")
}