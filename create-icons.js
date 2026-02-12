// Kjør: npm install pureimage && node create-icons.js
const fs = require('fs');
const path = require('path');

async function main() {
  const PImage = require('pureimage');
  const dir = path.join(__dirname, 'icons');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const size of [192, 512]) {
    const img = PImage.make(size, size);
    const ctx = img.getContext('2d');
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#c9a84c';
    ctx.font = `bold ${Math.round(size * 0.45)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('☀', size / 2, size / 2);
    ctx.strokeStyle = 'rgba(201,168,76,0.5)';
    ctx.lineWidth = Math.max(2, size * 0.02);
    ctx.strokeRect(size * 0.1, size * 0.1, size * 0.8, size * 0.8);

    const out = fs.createWriteStream(path.join(dir, `icon-${size}.png`));
    await PImage.encodePNGToStream(img, out);
    console.log(`Laget icons/icon-${size}.png`);
  }
}
main().catch(console.error);
