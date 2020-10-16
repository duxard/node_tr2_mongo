const express = require('express'),
      router = express.Router(),
      Todo = require('../models/Todo.js'),
      Post = require('../models/Post.js'),
      Projects = require('../models/Projects.js'),
      InstagramPosts = require('../models/InstagramPosts.js'),
      NewsFeed = require('../models/NewsFeed.js'),
      User = require('../models/User.js');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-control, Content-Type");
    res.header("Access-Control-Max-Age","1728000");
    res.header("Access-Control-Allow-Credentials","true");
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

// news feed
router.get('/newsfeed', (req, res) => {
    NewsFeed.find({}, (err, data) => {
        if(err) throw new Error(err);
        res.send(data);
    });
});

router.post('/newsfeed', (req, res) => {
    NewsFeed(req.body).save((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

router.delete('/newsfeed/:id', (req, res) => {
    NewsFeed.find({_id: req.params.id}).remove((err, data) => {
        if(err) throw new Error(err);
        res.json(data);
    });
});

// Angular Authentication Tutorial
router.post('/aat/register', (req, res) => {
    const newUser = req.body;
    User.findOne({email: newUser.email}, (err, user) => {
        if(err) {
            throw new Error(err);
        } else {
            if(!user) {
                User(newUser).save((err, registeredUser) => {
                    if(err) throw new Error(err);
                    res.status(200).send(registeredUser);
                });
            } else {
                res.status(400).send('The email already exists');
            }
        }
    });
});

router.post('/aat/login', (req, res) => {
    const userData = req.body;
    User.findOne({email: userData.email}, (err, user) => {
        if(err) {
            throw new Error(err);
        } else {
            if(!user) {
                res.status(401).send('Invalid email');
            } else if(user.password !== userData.password) {
                res.status(401).send('Invalid password');
            } else {
                res.status(200).send(user);
            }
        }
    });
});

// TODO: move it to real collection in future
router.get('/aat/events', (req,res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(events)
});

// TODO: move it to real collection in future
router.get('/aat/special', (req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(specialEvents)
});

module.exports = router;
