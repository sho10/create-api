const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
app.use(express.json());

const fruits = [
  {name: 'Apples', id: 1},
  {name: 'Banana', id: 1},
  {name: 'Grape', id: 1},
  {name: 'Orange', id: 1}
]

app.get('/', (req,res) => {
  res.send('Returning this line of code');
});

app.get('/api/fruits', (req,res) => {
  res.send(fruits);
});

app.get('/api/fruits/:id', (req,res) => {
  const fruit = fruits.find(c => c.id === parseInt(req.params.id));
  if(!fruit)res.status(404).send('fruit not found');
  res.send(fruit);
});

const port = process.env.PORT || 5001;
  app.listen(port, () => console.log(`listening on port ${port}...`));
