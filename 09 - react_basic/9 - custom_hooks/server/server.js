import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the API server!');
});

app.get('/api/special', (_, res) => {
  res.json({
    specialItems: [
      { id: 1, name: 'Special Item 1', description: 'This is a special item.' },
      { id: 2, name: 'Special Item 2', description: 'This is another special item.' },
      { id: 3, name: 'Special Item 3', description: 'This is yet another special item.' },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
