import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the API server!');
});

app.get('/api/data', (_, res) => {
  res.json({ message: 'Hello, this is your data!' });
});

app.get('/api/all', (_, res) => {
  res.json({
    items: [1, 2, 3, 4, 5],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
