const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  // Simulate an asynchronous operation using async/await
  await new Promise(resolve => setTimeout(resolve, 0));
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});