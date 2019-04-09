const express = require('express'),
      router = express.Router(),
      Todo = require('../models/Todo.js');
	  
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	//res.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
      
router.get('/', (req, res, next) => {
    res.send("API root page...");
});

router.get('/todo', (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3100');
    Todo.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/todo', (req, res) => {
    Todo(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

router.delete('/todo/:id', (req, res) => {
    Todo.find({_id: req.params.id}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

module.exports = router;