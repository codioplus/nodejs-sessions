const express = require('express');
const fs = require('fs')
const bodyParser = require("body-parser");
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.baseUrl);
  res.send('Hello World');
})
app.post('/done',(req, res) => {
  console.log(req);
  res.send("donee");
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})

app.get('/html', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));

});


app.post('/markdown', (req,res) => {
  const a  = req.body;
  res.send(a.name+" welcome!")
});


app.listen(3000, () => console.log('server started'));