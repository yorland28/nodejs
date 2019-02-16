const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const status_ok = 200;

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello/:name',(rq,rs) => {
  rs.status(status_ok).send({ result : `Hola ${rq.params.name}`});
});

app.post('/hello',(rq,rs) => {
  rs.status(status_ok).send({ result : `Hola ${rq.body.name}`});
});

app.listen(port, () => {
  console.log('Node Endpoints working: '+port);
});
