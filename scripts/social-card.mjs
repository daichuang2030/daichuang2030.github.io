import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const target = fileURLToPath(new URL('../public/social-card.png', import.meta.url));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#132d50"/><path d="M910 90v450M1010 90v450M1110 90v450M800 190h370M800 290h370M800 390h370M800 490h370" stroke="#91b0e0" opacity=".16"/><circle cx="1010" cy="315" r="150" fill="none" stroke="#91b0e0" opacity=".55"/><circle cx="1010" cy="315" r="90" fill="none" stroke="#91b0e0" opacity=".55"/><circle cx="1010" cy="315" r="20" fill="#a8c1ff"/><g fill="#fff" font-family="Arial, sans-serif"><text x="76" y="98" font-size="26">Peter DAI Chuang</text><text x="70" y="258" font-size="76" letter-spacing="-3">Intelligence,</text><text x="70" y="347" font-size="76" letter-spacing="-3">in service</text><text x="70" y="436" font-size="76" letter-spacing="-3">of people.</text><text x="76" y="550" font-size="21" fill="#b5c4d8">AI. Industry. Human possibility.</text></g></svg>`;
await sharp(Buffer.from(svg)).png().toFile(target);
console.log(`Created ${target}`);
