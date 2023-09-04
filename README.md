# 影遁的个人网站

预览：[影遁的小站](https://shadowmeld.cool)

## 介绍

### Stack
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Prisma](https://www.prisma.io/)
- [Node.js](https://nodejs.org)
- [SQLite](https://www.sqlite.org)
- [SVGInject](https://github.com/iconfu/svg-inject)
- [sharp](https://sharp.pixelplumbing.com/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

### 目录结构

```
.
|____app # 页面
|____module # 通用数据、组件
|____prisma # 数据库
|____public # 静态文件
| |____data # 通用数据
| |____components # 通用组件
|____style # CSS 主题
```

### 自定义服务器

使用自定义服务器以支持运行时动态修改静态文件

`server.js`

### 本地调试运行

```bash
npm install
npm run server
```

运行结果 [http://localhost:3000](http://localhost:3000) 

### 编译

```
next build
```

### 部署

```
npm install
npm run build
chmod +x next-start.sh
./next-start.sh
```

### Markdown 本地调试热更新

热更新Markdown页面资料参考：[监听 Markdown 文件并热更新 Next.js 页面](https://gauliang.github.io/blogs/2022/watch-markdown-files-and-hot-load-the-nextjs-page/)

`watch.js`

```
node watch
```

### 其他

```
# 查看后台运行的 node 程序进程 id
ps -ax | grep node 
```

---

## 自定义使用

修改 `public/asset/*.json`