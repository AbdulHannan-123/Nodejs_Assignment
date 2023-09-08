const express = require('express');
const app = express();
const port = 3000;

const middleware1 = (req, res, next) => {
  console.log('Middleware 1: Request received.');
  next(); 
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2: Request being processed.');
  next(); 
};

app.get('/', (req, res) => {
  console.log('Route Handler: Sending response.');
  res.send('Hello, Express!');
});

app.use(middleware1);
app.use(middleware2);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});