const express = require('express'),
      router = express.Router(),
      Todo = require('../models/Todo.js'),
      Post = require('../models/Post.js'),
      Projects = require('../models/Projects.js'),
      InstagramPosts = require('../models/InstagramPosts.js');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	//res.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//react_tr1
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

router.delete('/todo/:id', (req, res) => {
    Todo.find({_id: req.params.id}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

//redux-simple-app
router.get('/post', (req, res) => {
    Post.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/post', (req, res) => {
    Post(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

router.delete('/post/:id', (req, res) => {
    Post.find({_id: req.params.id}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

//react-redux-main-prj
router.get('/projects', (req, res) => {
    Projects.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/projects', (req, res) => {
    Projects(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

router.delete('/projects/:id', (req, res) => {
    Projects.find({_id: req.params.id}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

//instagram instagramPosts
router.get('/instposts', (req, res) => {
    InstagramPosts.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/instposts', (req, res) => {
    InstagramPosts(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

module.exports = router;
