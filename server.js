const express = require('express')
const next = require('next')
const hostname = 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
const sharp = require("sharp");
const fs = require("fs");

app.prepare().then(() => {

    const server = express()

    server.use("/public", express.static(__dirname + "/public"));

    server.all('/asset/*!avif', (req, res) => {
        console.log(`customServer:req:${req.url}  res:${res.url}`)

        let url = `public${req.url}`.replace(/!avif.*$/, "");
        let avifUrl = `${`public${req.url}`.slice(0, `public${req.url}`.lastIndexOf('.'))}.avif`

        if (fs.existsSync(avifUrl)) {

            fs.readFile(avifUrl, function(err, data) {
                if (err) return next(err);
                res.set("Content-Type", "image/jpeg");
                return res.status(200).end(data, 'binary');
            });
        } else {

            fs.readFile(url, (err, inputBuffer) => {
                if (err) {
                    console.error(err);
                    return next(err);
                }

                // AVIF

                console.time("avif");
                sharp(inputBuffer)
                    .avif({ quality: 50, speed: 1})
                    .resize({height: 1080, fit: sharp.fit.cover})
                    .toFile(avifUrl, (err, info) => {

                        fs.readFile(avifUrl, function(err, data) {
                            if (err) return next(err);
                            res.set("Content-Type", "image/jpeg");
                            return res.status(200).end(data, 'binary');
                        });
                    });
            });
        }

    })

    server.all('*', (req, res) => {
        // console.log(`customServer:req:${req.url}  res:${res.url}`)
        return handle(req, res)
    })


    server.listen(port, (err) => {
        if (err) throw err
        // console.log(`> Ready on http://localhost:${port}`)
    })

})
