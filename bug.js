const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello, World!');
  }, 0);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});