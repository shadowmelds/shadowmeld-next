const { watch } = require('node:fs');
const { WebSocketServer } = require('ws')

function main() {
    const wss = new WebSocketServer({ port: 80 })
    wss.on('connection', (ws, req) => {

        // Windows 下路径为：\\asset\\posts
        watch(process.cwd() + '/public/asset/posts', { recursive: true }, (eventType, filename) => {
            const path = filename.replace(/\.md/, '')
            ws.send(JSON.stringify({ event: 'markdown-changed', path }))
        })
    })
}

main()