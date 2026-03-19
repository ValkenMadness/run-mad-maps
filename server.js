require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/config', (req, res) => {
  res.json({ token: process.env.MAPBOX_TOKEN });
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
