import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const MIME: Record<string, string> = {
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
};

function toWebStream(nodeStream: fs.ReadStream): ReadableStream {
    return new ReadableStream({
        start(controller) {
            nodeStream.on('data', chunk => controller.enqueue(chunk));
            nodeStream.on('end', () => controller.close());
            nodeStream.on('error', err => controller.error(err));
        },
        cancel() { nodeStream.destroy(); },
    });
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path: segments } = await params;
    const MEDIA_DIR = process.env.MEDIA_DIR || path.join(process.cwd(), 'public');
    const relative = segments.map(decodeURIComponent).join('/');
    const filePath = path.resolve(MEDIA_DIR, relative);

    if (!filePath.startsWith(path.resolve(MEDIA_DIR))) {
        return new NextResponse('Forbidden', { status: 403 });
    }
    if (!fs.existsSync(filePath)) {
        return new NextResponse('Not found', { status: 404 });
    }

    const stat = fs.statSync(filePath);
    const size = stat.size;
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] ?? 'application/octet-stream';
    const range = req.headers.get('range');

    if (range) {
        const [startStr, endStr] = range.replace(/bytes=/, '').split('-');
        const start = parseInt(startStr, 10);
        const end = endStr ? parseInt(endStr, 10) : size - 1;
        return new NextResponse(toWebStream(fs.createReadStream(filePath, { start, end })), {
            status: 206,
            headers: {
                'Content-Range': `bytes ${start}-${end}/${size}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': String(end - start + 1),
                'Content-Type': contentType,
            },
        });
    }

    return new NextResponse(toWebStream(fs.createReadStream(filePath)), {
        headers: {
            'Content-Type': contentType,
            'Content-Length': String(size),
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
