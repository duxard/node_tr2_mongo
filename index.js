const path = require('path'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes = require('./routes/api'),

      port = process.env.port || 3000;

require('dotenv').config();

//Set up application
const app = express();

//Connect to mongodb
mongoose.connect('mongodb+srv://duxard23:<pswd>@cluster0-wgddl.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
.then(data => console.log(`Data: ${data}`))
.catch(err => console.log(`Error: ${err}`));
//mongoose.Promise = global.Promise;

//DB blueprint
const todoSchema = new mongoose.Schema({
    item: String
});

//Model type based on MongoDB schema
const Todo = mongoose.model("Todo", todoSchema);
let itemOne = Todo({item: "Second item"}).save(function(err){
    if(err) throw new Error();
    console.log("Item saved");
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
    console.log(`NODE_ENV value: ${process.env.NODE_ENV}`);
    console.log(`Now listening for requests on localhost:${port}`);
});
