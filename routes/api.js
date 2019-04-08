const express = require('express'),
      router = express.Router(),
      Todo = require('../models/Todo.js');
      
router.get('/', (req, res, next) => {
    res.send("API root page...");
});

router.get('/todo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3100');
    Todo.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/todo', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3100');
    Todo(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});
/*
router.delete('/todo/:item', (req, res) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});
*/
module.exports = router;