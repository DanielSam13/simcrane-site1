import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    const MEDIA_DIR = process.env.MEDIA_DIR || path.join(process.cwd(), 'public');
    const testFile = path.join(MEDIA_DIR, 'videos', 'Colisao.mp4');

    let dirContents: string[] = [];
    let videosContents: string[] = [];

    try { dirContents = fs.readdirSync(MEDIA_DIR); } catch { dirContents = ['ERRO ao ler pasta']; }
    try { videosContents = fs.readdirSync(path.join(MEDIA_DIR, 'videos')); } catch { videosContents = ['ERRO ao ler videos/']; }

    return NextResponse.json({
        MEDIA_DIR,
        cwd: process.cwd(),
        testFile,
        fileExists: fs.existsSync(testFile),
        dirContents,
        videosContents,
    });
}
