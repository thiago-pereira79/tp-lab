import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE = process.argv[2];
if (!SOURCE) {
  console.error('Usage: node generate-favicons.mjs <source-image>');
  process.exit(1);
}

const PUBLIC_DIR = 'public';
const FAVICONS_DIR = path.join(PUBLIC_DIR, 'favicons');

// Ensure directories exist
fs.mkdirSync(FAVICONS_DIR, { recursive: true });

// Save source as favicon-source.png in favicons dir
await sharp(SOURCE)
  .png()
  .toFile(path.join(FAVICONS_DIR, 'favicon-source.png'));
console.log('✓ favicons/favicon-source.png (source saved)');

// Generate PNG favicons - files go directly in public/ as user requested
const publicSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of publicSizes) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toFile(path.join(PUBLIC_DIR, name));
  console.log(`✓ public/${name} (${size}x${size})`);
}

// Also update the old favicons/ dir versions so nothing is stale
const faviconsDirSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of faviconsDirSizes) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toFile(path.join(FAVICONS_DIR, name));
  console.log(`✓ public/favicons/${name} (${size}x${size})`);
}

// Generate real favicon.ico (ICO with 16, 32, 48 sizes)
async function createIco(sourceFile, outputPath, icoSizes) {
  const images = [];
  for (const size of icoSizes) {
    const buf = await sharp(sourceFile)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
      .png()
      .toBuffer();
    images.push({ size, data: buf });
  }

  const headerSize = 6;
  const entrySize = 16;
  const numImages = images.length;
  const dataOffset = headerSize + entrySize * numImages;

  let totalDataSize = 0;
  for (const img of images) totalDataSize += img.data.length;

  const ico = Buffer.alloc(dataOffset + totalDataSize);
  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(numImages, 4);

  let currentDataOffset = dataOffset;
  for (let i = 0; i < numImages; i++) {
    const img = images[i];
    const entryOffset = headerSize + i * entrySize;
    ico.writeUInt8(img.size < 256 ? img.size : 0, entryOffset);
    ico.writeUInt8(img.size < 256 ? img.size : 0, entryOffset + 1);
    ico.writeUInt8(0, entryOffset + 2);
    ico.writeUInt8(0, entryOffset + 3);
    ico.writeUInt16LE(1, entryOffset + 4);
    ico.writeUInt16LE(32, entryOffset + 6);
    ico.writeUInt32LE(img.data.length, entryOffset + 8);
    ico.writeUInt32LE(currentDataOffset, entryOffset + 12);
    img.data.copy(ico, currentDataOffset);
    currentDataOffset += img.data.length;
  }

  fs.writeFileSync(outputPath, ico);
  console.log(`✓ ${outputPath} (real ICO with ${icoSizes.join(', ')}px)`);
}

await createIco(SOURCE, path.join(PUBLIC_DIR, 'favicon.ico'), [16, 32, 48]);

console.log('\n✅ All favicons generated successfully!');
