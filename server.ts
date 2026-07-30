import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import https from "https";

const app = express();
const PORT = 3000;

const videoUrlCache = new Map<string, { url: string, expires: number }>();

// API route to proxy Google Drive videos
app.get("/api/video/:id", (req, res) => {
  const videoId = req.params.id;
  const initialUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
  
  const streamVideo = (url: string) => {
    const headers: any = {};
    if (req.headers.range) {
      headers['Range'] = req.headers.range;
    }
    
    https.get(url, { headers }, (response) => {
      // If the final URL somehow redirects, follow it (Google Drive might rotate URLs)
      if (response.statusCode === 302 || response.statusCode === 303) {
        const location = response.headers.location;
        if (location) {
          // Cache the new redirected URL
          videoUrlCache.set(videoId, { url: location, expires: Date.now() + 1000 * 60 * 30 });
          streamVideo(location);
          return;
        }
      }

      const headersToForward = ['content-type', 'content-length', 'content-range', 'accept-ranges'];
      headersToForward.forEach(h => {
        if (response.headers[h]) {
          res.setHeader(h, response.headers[h]);
        }
      });
      
      res.setHeader('content-disposition', 'inline');
      res.setHeader('cross-origin-resource-policy', 'cross-origin');
      
      res.status(response.statusCode || 200);
      response.pipe(res);
    }).on('error', (err) => {
      res.status(500).send(err.message);
    });
  };

  const cached = videoUrlCache.get(videoId);
  if (cached && cached.expires > Date.now()) {
    return streamVideo(cached.url);
  }

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
              videoUrlCache.set(videoId, { url: finalUrl, expires: Date.now() + 1000 * 60 * 30 }); // Cache for 30 minutes
              streamVideo(finalUrl);
            } else {
              res.status(500).send("Could not parse Drive confirmation tokens");
            }
          });
        } else {
          videoUrlCache.set(videoId, { url: url, expires: Date.now() + 1000 * 60 * 30 });
          streamVideo(url);
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
