import express from 'express';
const app = express();
app.get('/', (req, res) => {
  return res.send('service A');
});
app.listen(3001);
