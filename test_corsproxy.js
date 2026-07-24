fetch("https://corsproxy.io/?https://drive.google.com/uc?export=download&id=1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ")
  .then(res => res.text())
  .then(text => {
    const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
    const confirmMatch = text.match(/name="confirm" value="([^"]+)"/);
    console.log(confirmMatch ? confirmMatch[1] : 'no confirm');
  });
