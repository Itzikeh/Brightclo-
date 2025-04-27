const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/search', (req, res) => {
  const query = req.query.q || 'No query provided';
  
  if (query.toLowerCase().includes('teva')) {
    res.json({
      symbol: "TEVA",
      price: "$13.45",
      change: "+0.32 (2.4%)",
      timestamp: new Date().toISOString()
    });
  } else {
    res.json({
      query: query,
      message: "Search results would appear here",
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
