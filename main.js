// INITIALIZATION

const mongo = require('mongodb');
const filestream = require('fs'); 
//const requestJSON = require ('request');

const express = require('express');
const server = express();
const port = 4545;

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

server.get('/get', function(req, res) {
    console.log(" req = /get ")
    fs.readFile('my-file.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    })
    });

server.get('/post', function(req, res) { //FAIRE LECTURE JSON
    console.log(" req = /post ")
    });

server.get('/put', function(req, res) {
    console.log(" req = /put ")
    });

server.get('/delete', function(req, res) {
    console.log(" req = /delete ")
    });

