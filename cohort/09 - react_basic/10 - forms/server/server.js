import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const contactData = [];

app.get('/', (_, res) => {
  res.send('Welcome to the API server!');
});

app.post('/api/contact', (req, res) => {
  const { name, email } = req.body;

  contactData.push({ name, email });

  return res.status(201).json({
    message: 'Contact information received successfully',
    contact: { name, email },
  });
});

app.get('/api/contact', (_, res) => {
  return res.status(200).json({
    contacts: contactData,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
