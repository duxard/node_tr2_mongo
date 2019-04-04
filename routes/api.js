const express = require('express'),
      router = express.Router(),
      Todo = require('../models/Todo.js');
      
router.get('/', (req, res, next) => {
    res.send("API root page...");
});

router.get('/todo', (req, res) => {
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

router.delete('/todo/:item', (req, res) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

module.exports = router;
/*
//get a list of animals from the DB
router.get('/animals', function(req, res, next){
    Animals.find({}).then(function(items){
        res.send(items);
    });
});

//add a new animal to the db
router.post('/animals', function(req, res, next){
	console.log(req.body);
    Animals.create(req.body).then(function(item){
        res.send(item);
    }).catch(next);
});

//delete an animal from the db
router.delete('/animals/:id', function(req, res, next){
    Animals.findByIdAndRemove({_id: req.params.id}).then(function(item){
        console.log("Item has been deleted: ", item);
        res.send(item);
    }).catch(next);
});

//get a list of animals from the DB
router.get('/animals/test', function(req, res, next){
//    res.send(JSON.stringify(testObject));
    res.send(testObject);

});
*/
