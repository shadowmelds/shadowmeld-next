import path from "path";
import fsPromises from "fs/promises"


export async function getFeatures() {

    const filePath = path.join(process.cwd(), 'public/asset/features.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const features = JSON.parse(jsonData);
    return features['features']
}

export async function getProjects() {

    const filePath = path.join(process.cwd(), 'public/asset/projects.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const projects = JSON.parse(jsonData);
    return projects['projects']
}

export async function getPhotos() {
    const filePath = path.join(process.cwd(), 'public/asset/photos.json');
    const jsonData: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    const photos = JSON.parse(jsonData);
    return photos['photos']
}

export async function getWallpapers() {
    const filePath = path.join(process.cwd(), 'public/asset/wallpapers.json');
    const wallpapersData: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    return JSON.parse(wallpapersData);
}

export async function getMarkdowns() {

    const filePath = path.join(process.cwd(), 'public/asset/posts.json');
    const jsonData: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    return JSON.parse(jsonData);
}

export async function getPost(fileName) {

    const filePath = path.join(process.cwd(), `public/asset/posts/${fileName}`);
    const postData: string = await fsPromises.readFile(filePath, "utf8");
    // @ts-ignore
    return postData
}

export async function getSocial() {

    const filePath = path.join(process.cwd(), 'public/asset/social.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const social = JSON.parse(jsonData);
    return social['social']
}

export async function getFriend() {

    const filePath = path.join(process.cwd(), 'public/asset/friend.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const friend = JSON.parse(jsonData);
    return friend['friend']
}