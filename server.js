const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Pasta persistente fora do public_html — nunca apagada no redeploy
// No Hostinger: /home/u852377280/simcrane-media/
const MEDIA_DIR = process.env.MEDIA_DIR || path.join(process.cwd(), 'public');

const MIME = {
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
};

function serveFile(filePath, res) {
    if (!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': mime,
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=86400',
        'Accept-Ranges': 'bytes',
    });
    fs.createReadStream(filePath).pipe(res);
}

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname } = parsedUrl;

        // Serve mídia da pasta persistente
        if (
            pathname.startsWith('/videos/') ||
            pathname.startsWith('/Imagem/') ||
            pathname.startsWith('/Plano%20de%20Rigging/') ||
            pathname.startsWith('/Plano de Rigging/')
        ) {
            const decoded = decodeURIComponent(pathname);
            const filePath = path.join(MEDIA_DIR, decoded);
            serveFile(filePath, res);
            return;
        }

        handle(req, res, parsedUrl);
    }).listen(port, () => {
        console.log(`> SimCrane pronto na porta ${port}`);
        console.log(`> Mídia servida de: ${MEDIA_DIR}`);
    });
});
