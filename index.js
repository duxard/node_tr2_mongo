const path = require('path'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes = require('./routes/api');

const port = process.env.port || 3000;

//Set up application
const app = express();

//Connect to mongodb
mongoose.connect('mongodb+srv://duxard:<pswd>@cluster0-wgddl.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
//mongoose.Promise = global.Promise;

const todoSchema = new mongoose.Schema({
    item: String
}); 

/*
const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://duxard:<password>@cluster0-wgddl.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

//Static directory
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());

//API routs: initialize routes middleware
app.use('/api', routes);

//Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//Homepage
app.get('/', function(req, res){
    res.send("Test");
});

//Set up server
app.listen(port, () => {
    console.log(`Now listening for requests on localhost:${port}`);
});
