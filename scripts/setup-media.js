const { existsSync, cpSync } = require('fs');
const path = require('path');
const os = require('os');

const candidates = [
    process.env.MEDIA_DIR,
    path.join(os.homedir(), 'simcrane-media'),
    '/home/u852377280/simcrane-media',
    path.join(process.cwd(), '..', 'simcrane-media'),
    path.join(process.cwd(), '..', '..', 'simcrane-media'),
].filter(Boolean);

let found = null;
for (const c of candidates) {
    if (existsSync(c)) { found = c; break; }
}

if (!found) {
    console.log('simcrane-media nao encontrado, iniciando sem copia de midia.');
    process.exit(0);
}

const PUBLIC = path.join(process.cwd(), 'public');
console.log(`Copiando midia de ${found} para ${PUBLIC}...`);
try {
    cpSync(found, PUBLIC, { recursive: true, force: true });
    console.log('Midia copiada com sucesso!');
} catch (e) {
    console.error('Erro ao copiar:', e.message);
}
