import fs from 'fs';
import path from 'path';

function findPdfFiles(dir, maxDepth = 6, currentDepth = 0) {
  if (currentDepth > maxDepth) return;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          const skip = ['.git', 'node_modules', 'dist', 'proc', 'sys', 'dev', 'lib', 'lib64', 'etc', 'usr', 'var', 'run', 'boot'];
          if (!skip.includes(file)) {
            findPdfFiles(fullPath, maxDepth, currentDepth + 1);
          }
        } else {
          if (file.toLowerCase().endsWith('.pdf') || stat.size === 853794 || file.toLowerCase().includes('rituais') || file.toLowerCase().includes('chumbo')) {
            console.log(`FOUND PATH: ${fullPath} (${stat.size} bytes)`);
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
}

console.log('Searching for any matching PDF or ebook files in workspace and root directories...');
findPdfFiles('.');
findPdfFiles('/tmp');
try {
  // Let's also check parent directories of workspace
  const parentDir = path.resolve('..');
  console.log(`Checking parent directory: ${parentDir}`);
  findPdfFiles(parentDir);
} catch (e) {}
