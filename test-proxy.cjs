const https = require('https');

const videoId = "1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ";
const initialUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

const handleUrl = (url) => {
  https.get(url, (response) => {
    console.log(response.statusCode, response.headers['content-type'], response.headers.location);
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
              console.log("FINAL URL:", finalUrl);
            } else {
              console.log("No tokens found");
            }
         });
      } else {
         console.log("Got non-HTML 200, URL is:", url);
      }
    }
  });
};

handleUrl(initialUrl);
