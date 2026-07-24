import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import https from "https";

const app = express();
const PORT = 3000;

// API route to proxy Google Drive videos
app.get("/api/video/:id", (req, res) => {
  const videoId = req.params.id;
  const url = `https://drive.google.com/uc?export=download&id=${videoId}`;
  
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    
    response.on('end', () => {
      const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
      const confirmMatch = data.match(/name="confirm" value="([^"]+)"/);
      
      if (uuidMatch && confirmMatch) {
        const uuid = uuidMatch[1];
        const confirm = confirmMatch[1];
        const finalUrl = `https://drive.usercontent.google.com/download?id=${videoId}&export=download&confirm=${confirm}&uuid=${uuid}`;
        res.redirect(302, finalUrl);
      } else {
        // If it's a smaller file, drive.google.com/uc might just redirect immediately
        if (response.statusCode === 303 || response.statusCode === 302) {
           res.redirect(302, response.headers.location || '');
        } else {
           res.status(500).send("Could not parse Drive confirmation tokens");
        }
      }
    });
  }).on('error', (err) => {
    res.status(500).send(err.message);
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
