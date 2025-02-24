import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [
  { width: 192, height: 192, name: 'pwa-192x192.png' },
  { width: 512, height: 512, name: 'pwa-512x512.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 16, height: 16, name: 'favicon-16x16.png' },
];

async function generateIcons() {
  const sourceImage = path.join(__dirname, '../public/images/Icon-00K-redondo.svg');
  const outputDir = path.join(__dirname, '../public/images');

  // Certifica que o diretório existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const size of sizes) {
    await sharp(sourceImage, { density: 300 }) // Alta densidade para melhor qualidade ao converter SVG
      .resize(size.width, size.height)
      .png()
      .toFile(path.join(outputDir, size.name));
    
    console.log(`Generated ${size.name}`);
  }
}

generateIcons().catch(console.error);
