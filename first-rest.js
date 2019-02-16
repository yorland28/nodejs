
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const status_ok = 200;

const port = 8080;

const heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello/:name',(rq,rs) => {
  rs.status(status_ok).send({ result : `Hola ${rq.params.name}`});
});

app.post('/hello',(rq,rs) => {
  rs.status(status_ok).send({ result : `Hola ${rq.body.name}`});
});

app.get('/heroes',(rq,rs) => {
  rs.header("Access-Control-Allow-Origin", "*");
  rs.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  rs.status(status_ok).send(heroes);
});

app.get('/hero/:id',(rq,rs) => {
  rs.header("Access-Control-Allow-Origin", "*");
  rs.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  rs.status(status_ok).send(heroes.filter(hero => hero.id ==  rq.params.id)[0]);
});

app.listen(port, () => {
  console.log('Node Endpoints working: '+port);
});
