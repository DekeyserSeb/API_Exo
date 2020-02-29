// INITIALIZATION LE CLIENT C'EST POSTMAN

const mongo = require('mongodb');
const filestream = require('fs');
const requestJSON = require('request');
const body_parser = require('body-parser');
const express = require('express');

const server = express();
const port = 4545;

var manga;
//Url de la base de données
var url = 'mongodb://localhost:27017/';

var MongoClient = require('mongodb').MongoClient;
var dbLibrary

server.use('/', express.static(__dirname));

// LANCEMENT DU SERVEUR

server.listen(port, () => console.log('Listening'));

// =======================

// CONFIGURATION DES ROUTES (ALL REQUEST COME HERE)

server.get('/h', function (req, res) {
    console.log('Connected')
    res.setHeader('Content-Type', 'text/html') //En-tête de la réponse en HTTP
    res.status(200).send('<h1>Message reçus avec succès</h1>')
    console.log(" req = / ")
});

server.get("/mangas", function (req, res) {
    console.log(" req = /get ")
    console.log("QUERY", req.query);
    
    const mangaID = req.query.ID;

    //Demander un manga a partir de son ID
    var query = {
        ID: mangaID
    }

    MongoClient.connect(url, {
            useNewUrlParser: true
        },

        function (err, dbMongo) {

            console.log("Connected correctly to server");
            dbLibrary = dbMongo.db("restExo");
            
             dbLibrary.collection("MANGAS").findOne((query), function (err, result) {
                manga = result;
            });
 
            dbMongo.close();
        })
    if (manga) {
        res.json(manga);
    } else {
        res.json({
            message: `item ${mangaID} doesn't exist`
        })
    }

});

server.post("/mangas", function (req, res) {
    console.log(" req = /post ")
    console.log("QUERY", req.query);
    const query = {
        ID: req.query.ID,
        NameFR: req.query.NameFR,
        NameJP: req.query.NameJP,
        Year: req.query.Year,
        Author: req.query.Author,
        Genres: req.query.Genres
    }

    console.log('Adding new item: ', );

    MongoClient.connect(url, {
            useNewUrlParser: true
        },

        function (err, dbMongo) {

            console.log("Connected correctly to server");
            dbLibrary = dbMongo.db("restExo");
            dbLibrary.collection("MANGAS").insertOne(query, function (err, result) {
                if (err == null) {
                    console.log("ADDED");
                } else {
                    console.log("ERROR: " + err);
                }
            })
            dbMongo.close();
            res.json(query);
        })
});

server.put("/mangas", function (req, res) {
    console.log(" req = /put ")
    const mangaID = req.query.ID;
    console.log("Editing item: ", mangaID);

const query = {ID: mangaID}
    const changedJSON = 
        { $set:{
        ID: req.query.ID,
        NameFR: req.query.NameFR,
        NameJP: req.query.NameJP,
        Year: req.query.Year,
        Author: req.query.Author,
        Genres: req.query.Genres
    }};
console.log(
    "ID:", req.query.ID,
    "NameFR:", req.query.NameFR,
    "NameJP:", req.query.NameJP,
    "Year:", req.query.Year,
    "Author:", req.query.Author,
    "Genres:", req.query.Genres
);

    MongoClient.connect(url, {
            useNewUrlParser: true
        },

        function (err, dbMongo) {

            console.log("Connected correctly to server");
            dbLibrary = dbMongo.db("restExo");
            //UPDATING
            dbLibrary.collection("MANGAS").updateOne(query, changedJSON, function (err, res) {
                if (err) throw err;
                
                console.log("1 document updated");
            })
            dbMongo.close();
            res.json(query);
        })
});

server.delete('/mangas', function (req, res) {
    console.log(" req = /delete ")
    const mangaID = req.query.id;

    console.log("Delete manga with id: ", mangaID);

    MongoClient.connect(url, {
            useNewUrlParser: true
        },

        function (err, dbMongo) {

            console.log("Connected correctly to server");
            dbLibrary = dbMongo.db("restExo");
            //REMOVING
            dbLibrary.collection("MANGAS").deleteOne(mangaID, function (err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
            })
            dbMongo.close();
        })
});