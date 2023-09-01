const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.use((req, res) => {
  res.status(404).send('404');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
