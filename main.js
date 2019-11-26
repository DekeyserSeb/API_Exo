// INITIALIZATION

const mongo = require('mongodb');
const filestream = require('fs'); 
const requestJSON = require ('request');
const body_parser = require('body-parser');
const express = require('express');

const server = express();
const port = 4545;

var MongoClient = require('mongodb').MongoClient;
var dbLibrary

server.use('/', express.static(__dirname));

    // LANCEMENT DU SERVEUR

    server.listen(port, () => console.log('Listening'));

    // =======================

// CONFIGURATION DES ROUTES (ALL REQUEST COME HERE)

server.get('/h', function(req, res) {
    console.log('Connected')
    res.setHeader('Content-Type', 'text/html') //En-tête de la réponse en HTTP
    res.status(200).send('<h1>Message reçus avec succès</h1>')
    console.log(" req = / ")
    });

server.get("/mangas/:ID", function(req, res) {
    console.log(" req = /get ")
    const mangaID = req.params.ID;
    const manga = data.find(_manga => _manga.ID === mangaID);

    if (manga) {
       res.json(manga);
    } else {
       res.json({ message: `item ${mangaID} doesn't exist`})
    }

    });

server.post("/mangas", function(req, res) { //FAIRE LECTURE JSON
    console.log(" req = /post ")
    const manga = req.body;
    console.log('Adding new item: ', manga);
 
    // add new item to array
    data.push(manga)
 
    // return updated list
    res.json(data);

    });

server.put("/mangas/:ID", function(req, res) {
    console.log(" req = /put ")
    const mangaID = req.params.id;
    const manga = req.body;
    console.log("Editing item: ", mangaID, " to be ", manga);
 
    const updatedListItems = [];
    // loop through list to find and replace one item
    data.forEach(oldManga => {
       if (oldManga.id === mangaID) {
          updatedListItems.push(manga);
       } else {
          updatedListItems.push(oldManga);
       }
    });
 
    // replace old list with new one
    data = updatedListItems;
 
    res.json(data);
    });

server.delete('/mangas/:id', function(req, res) {
    console.log(" req = /delete ")
    const mangaID = req.params.id;

    console.log("Delete manga with id: ", mangaID);
 
    // filter list copy, by excluding item to delete
    const filtered_list = data.filter(manga => manga.id !== mangaID);
 
    // replace old list with new one
    data = filtered_list;
 
    res.json(data);
    });

