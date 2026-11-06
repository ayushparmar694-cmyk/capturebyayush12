import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

const BOOKINGS_FILE = path.join(__dirname, 'bookings.json');

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = req.url.split('?')[0];

  // API Route: GET /api/bookings
  if (reqPath === '/api/bookings' && req.method === 'GET') {
    if (!fs.existsSync(BOOKINGS_FILE)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([]));
      return;
    }
    fs.readFile(BOOKINGS_FILE, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read bookings' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data || '[]');
    });
    return;
  }

  // API Route: POST /api/bookings
  if (reqPath === '/api/bookings' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const newLead = JSON.parse(body);
        newLead.id = 'lead_' + Date.now();
        newLead.submittedAt = new Date().toISOString();
        newLead.status = newLead.status || 'NEW';

        let existing = [];
        if (fs.existsSync(BOOKINGS_FILE)) {
          const raw = fs.readFileSync(BOOKINGS_FILE, 'utf8');
          try { existing = JSON.parse(raw); } catch (e) { existing = []; }
        }
        existing.unshift(newLead);
        fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(existing, null, 2), 'utf8');

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, lead: newLead }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // API Route: DELETE /api/bookings/:id
  if (reqPath.startsWith('/api/bookings/') && req.method === 'DELETE') {
    const id = reqPath.split('/')[3];
    if (fs.existsSync(BOOKINGS_FILE)) {
      try {
        let existing = JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf8'));
        existing = existing.filter(item => item.id !== id);
        fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(existing, null, 2), 'utf8');
      } catch (e) {}
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(__dirname, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('File Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`  🎬 CAPTURE VIDEOGRAPHY - CAPTURE BY AYUSH`);
  console.log(`  Turning Moments into Cinematic Memories.`);
  console.log(`======================================================`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Capture URL: http://capturebyayush:${PORT}`);
  console.log(`======================================================\n`);
});
