import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 4173;
const DIRECTORY = path.resolve('../legacy-approved');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0]; // Remove query params
  if (url === '/') {
    url = '/index.html';
  } else if (url.endsWith('/')) {
    url += 'index.html';
  }

  const safePath = path.normalize(url).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(DIRECTORY, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Legacy server running at http://localhost:${PORT}/`);
  console.log(`Serving directory: ${DIRECTORY}`);
});
