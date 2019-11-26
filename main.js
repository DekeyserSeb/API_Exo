// INITIALIZATION

const mongo = require('mongodb');
const filestream = require('fs'); 
const requestJSON = require ('request');

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

server.get('/', function(req, res) {
    console.log('Connected')
    res.setHeader('Content-Type', 'text/html') //En-tête de la réponse en HTTP
    res.status(200).send('<h1>Message reçus avec succès</h1>')
    console.log(" req = / ")
    });

server.get('/get', function(req, res) {
    console.log(" req = /get ")
    });

server.post('/post', function(req, res) { //FAIRE LECTURE JSON
    console.log(" req = /post ")
    requestJSON(req, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     console.log(importedJSON);
  }
})
    });

server.put('/put', function(req, res) {
    console.log(" req = /put ")
    requestJSON(req, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           var importedJSON = JSON.parse(body);
           console.log(importedJSON);
        }
      })
    });

server.delete('/delete', function(req, res) {
    console.log(" req = /delete ")
    requestJSON(req, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           var importedJSON = JSON.parse(body);
           console.log(importedJSON);
        }
      })
    });

