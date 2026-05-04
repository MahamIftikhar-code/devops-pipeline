const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>CI/CD Pipeline</title>
      <style>
        body { font-family: Arial; background: #0f0c29; color: white; text-align: center; padding: 50px; }
        h1 { color: #00ff88; }
        .box { background: rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin: 20px auto; max-width: 500px; }
        .green { color: #00ff88; font-weight: bold; }
      </style>
    </head>
    <body>
      <h1> CI/CD Pipeline Live!</h1>
      <div class="box">
        <p>Auto-deployed via GitHub Actions</p>
        <p> Running in Docker container</p>
        <p> Hosted on AWS EC2</p>
        <p class="green">Deployed: ${new Date().toLocaleString()}</p>
        <p>Server: ${os.hostname()}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));