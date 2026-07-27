import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const htmlPath = path.join(distDir, 'index.html');
const cssPath = path.join(distDir, 'assets', fs.readdirSync(path.join(distDir, 'assets')).find(f => f.endsWith('.css')));

// Leer HTML y CSS
let html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

// Buscar la etiqueta <style> existente y agregar el CSS dentro
// O simplemente reemplazar todo el contenido del <head> con el CSS inline
const styleTag = `<style>${css}</style>`;
html = html.replace(/<link rel="stylesheet".*?>/g, '');
html = html.replace(/<noscript>.*?<\/noscript>/g, '');
html = html.replace('</head>', `${styleTag}</head>`);

fs.writeFileSync(htmlPath, html);
console.log('✅ CSS inlineado correctamente');