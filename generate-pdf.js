import fs from 'fs';
import path from 'path';

function generatePDF() {
  const binaryHeader = Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'); // PDF binary magic header to declare 8-bit characters

  // Let's define the objects as standard strings but without offsets determined yet.
  const streamContent = 'BT\n/F1 14 Tf\n100 750 Td\n(Thiago Pereira - Curriculum Vitae) Tj\n100 720 Td\n(Software Development | UX Engineering | UI Design | AI) Tj\n0 -40 TD\n(Find the digital portfolio and dynamic sections in TP LAB.) Tj\nET\n';
  
  const obj1 = '1 0 obj\n<<\n  /Type /Catalog\n  /Pages 2 0 R\n>>\nendobj\n';
  const obj2 = '2 0 obj\n<<\n  /Type /Pages\n  /Kids [3 0 R]\n  /Count 1\n>>\nendobj\n';
  const obj3 = '3 0 obj\n<<\n  /Type /Page\n  /Parent 2 0 R\n  /MediaBox [0 0 595 842]\n  /Resources <<\n    /Font <<\n      /F1 <<\n        /Type /Font\n        /Subtype /Type1\n        /BaseFont /Helvetica-Bold\n      >>\n    >>\n  >>\n  /Contents 4 0 R\n>>\nendobj\n';
  const obj4 = `4 0 obj\n<<\n  /Length ${streamContent.length}\n>>\nstream\n${streamContent}endstream\nendobj\n`;

  const objects = [obj1, obj2, obj3, obj4];
  
  let pdfData = Buffer.concat([binaryHeader]);
  const offsets = [];

  for (const objStr of objects) {
    offsets.push(pdfData.length);
    pdfData = Buffer.concat([pdfData, Buffer.from(objStr, 'utf8')]);
  }

  const startxref = pdfData.length;

  // Assembly of xref table
  // entry must be exactly 20 bytes: 10 + 1 + 5 + 1 + 1 + 2 = 20
  // e.g., '0000000000 65535 f\r\n' which is exactly 20 bytes
  let xref = 'xref\r\n';
  xref += `0 ${objects.length + 1}\r\n`;
  xref += '0000000000 65535 f\r\n'; // entry 0

  for (const offset of offsets) {
    const paddedOffset = String(offset).padStart(10, '0');
    // 10 chars + space (1) + 5 chars (00000) + space (1) + 'n' (1) + '\r\n' (2) = 20 chars
    xref += `${paddedOffset} 00000 n\r\n`;
  }

  const trailer = `trailer\r\n<<\r\n  /Size ${objects.length + 1}\r\n  /Root 1 0 R\r\n>>\r\nstartxref\r\n${startxref}\r\n%%EOF\r\n`;

  const finalPdf = Buffer.concat([pdfData, Buffer.from(xref, 'utf8'), Buffer.from(trailer, 'utf8')]);

  const publicDir = path.resolve('./public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'Thiago_Pereira_CV.pdf'), finalPdf);
  console.log('PDF generated at /public/Thiago_Pereira_CV.pdf successfully!');
}

generatePDF();
