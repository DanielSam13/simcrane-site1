const { existsSync } = require('fs');
const { execSync, spawn } = require('child_process');

const port = process.env.PORT || 3000;

if (!existsSync('.next')) {
    console.log('[SimCrane] .next nao encontrado — executando next build...');
    execSync('npx next build', { stdio: 'inherit' });
    console.log('[SimCrane] Build concluido.');
} else {
    console.log('[SimCrane] .next encontrado — iniciando servidor.');
}

const child = spawn('npx', ['next', 'start', '-p', String(port)], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 0));
