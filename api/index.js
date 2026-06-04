// Catch-all API route for Vercel SPA fallback
export default function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  const indexPath = path.join(process.cwd(), 'dist/client/index.html');
  
  try {
    const html = fs.readFileSync(indexPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (e) {
    res.status(500).send('Error loading index.html');
  }
}