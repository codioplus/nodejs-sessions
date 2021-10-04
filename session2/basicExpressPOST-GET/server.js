const express = require ('express')
const bodyParser = require("body-parser");


const app = express()

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// With middleware
app.use('/', function(req, res, next){
  res.send("test");
  next();
});
app.get('/',(req, res) => {
    res.send("Tamouz");
  });

app.post('/',(req, res) => {
    console.log(req);
    res.send("donee");
});

  app.listen(3000,() => {
    console.log("Started on PORT 3000");
  })