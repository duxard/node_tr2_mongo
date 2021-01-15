const path = require('path'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000,
      heroku = process.env.HEROKU || null,
      routes = require('./routes/main-routes/api'),
      ngJWTRoutes = require('./routes/ng-jwt-routes/api');

require('dotenv').config();

//Set up application
const app = express();

//Connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0-wgddl.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => console.log(`MongoDB: connected successfully`))
    .catch(err => {
        console.log(`MongoDB: fail`);
        console.error( err );
    });

//Static directory
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());

//API routs: initialize routes middleware
app.use('/api', routes);
app.use('/jwt', ngJWTRoutes);

//Homepage
app.get('/', function(req, res){
    res.send(`Test, heroku env var: ${heroku}`);
});

//Set up server
app.listen(port, () => {
    console.log(`NODE_ENV value: ${process.env.NODE_ENV}`);
    console.log(`Now listening for requests on localhost:${port}`);
});

/*****************************************************/
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
