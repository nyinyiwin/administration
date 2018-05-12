var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const api = express.Router();

api.get('/index',(req, res, next) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ Value : "Hello Worlds" }));
});
app.use('/api',api);
app.get('/',function(req,res) {
    res.send("Hello World.");
   });

const port = process.env.port || '80';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,() => console.log(`Running on localhost: ${port}`));