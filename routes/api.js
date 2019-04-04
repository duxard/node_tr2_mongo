const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Homepage");
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
