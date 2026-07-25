import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import https from "https";

const app = express();
const PORT = 3000;

// API route to proxy Google Drive videos
app.get("/api/video/:id", (req, res) => {
  const videoId = req.params.id;
  const initialUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
  
  const handleUrl = (url: string) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 303) {
        const location = response.headers.location;
        if (location) {
          handleUrl(location);
        } else {
          res.status(500).send("Redirect without location");
        }
      } else {
        const contentType = response.headers['content-type'] || '';
        if (contentType.includes('text/html')) {
          let data = '';
          response.on('data', chunk => { data += chunk; });
          response.on('end', () => {
            const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
            const confirmMatch = data.match(/name="confirm" value="([^"]+)"/);
            if (uuidMatch && confirmMatch) {
              const finalUrl = `https://drive.usercontent.google.com/download?id=${videoId}&export=download&confirm=${confirmMatch[1]}&uuid=${uuidMatch[1]}`;
              res.redirect(302, finalUrl);
            } else {
              res.status(500).send("Could not parse Drive confirmation tokens");
            }
          });
        } else {
          // If it's directly serving the video, just redirect the client to this URL
          res.redirect(302, url);
        }
      }
    }).on('error', (err) => {
      res.status(500).send(err.message);
    });
  };

  handleUrl(initialUrl);
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
