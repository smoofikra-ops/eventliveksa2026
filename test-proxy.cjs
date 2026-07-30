const https = require('https');

const videoId = "1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ";
const initialUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

const streamVideo = (url) => {
  console.log("Streaming from:", url);
  https.get(url, { headers: { 'Range': 'bytes=0-100' } }, (response) => {
    console.log("Stream status:", response.statusCode);
    console.log("Stream headers:", response.headers);
    response.on('data', chunk => {
       console.log("Received chunk of size", chunk.length);
       response.destroy();
    });
  });
};

const handleUrl = (url) => {
  https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 303) {
      handleUrl(response.headers.location);
    } else {
      const contentType = response.headers['content-type'];
      if (contentType && contentType.includes('text/html')) {
         let data = '';
         response.on('data', chunk => data += chunk);
         response.on('end', () => {
            const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
            const confirmMatch = data.match(/name="confirm" value="([^"]+)"/);
            if (uuidMatch && confirmMatch) {
              const finalUrl = `https://drive.usercontent.google.com/download?id=${videoId}&export=download&confirm=${confirmMatch[1]}&uuid=${uuidMatch[1]}`;
              streamVideo(finalUrl);
            } else {
              console.log("No tokens found");
            }
         });
      } else {
         streamVideo(url);
      }
    }
  });
};

handleUrl(initialUrl);
