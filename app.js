const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      Trait = require('./models/trait'),
      Name = require('./models/name'),
      bodyParser = require('body-parser'),
      React = require('react');
    
//configure app
app.set('view engine', 'ejs'),
app.use(express.static(__dirname + '/public'));      

//connect to db
const promise = mongoose.connect("mongodb://localhost/character_gen", {
    useMongoClient: true
});

promise.then();

app.get('/', function(req, res) {
    Trait.find({}, function(err, traits) {
        if (err) {
            console.log(err);
        }
        res.render('generator', {traits: traits});
    });
    
});

app.get('/generating', function(req, res) {
    Trait.find({}, function(err, traitObject) {
        if (err) {
            console.log(err);
        } else {
            Name.find({}, function(err, nameObject) {
                if (err) {
                    console.log(err);
                } else {
                    res.send({traits: traitObject, names: nameObject});
                }
            });
        }
    });
    // res.send('Hello, there!'),
    React = require('react');
});

//edit traits
app.get('/traits/:id/edit', function(req, res) {
    Trait.findById(req.params.id, function(err, trait) {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', {trait: trait});
        }
    });
});

app.put('/traits/:id', function(req, res) {
    Trait.findById(req.params.id, function(err, traitDoc) {
        if (err) {
            console.log(err);
            return;
        }
        if (req.body.positiveTrait) {
            traitDoc.positiveTraits.push(req.body.positiveTrait);
        }
        if (req.body.negativeTrait) {
            traitDoc.negativeTraits.push(req.body.negativeTrait);
        }
        if (req.body.characterType) {
            traitDoc.characterTypes.push(req.body.characterType);
        }
        traitDoc.save();
    });    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server is listening");
});