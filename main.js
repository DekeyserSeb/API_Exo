// INITIALIZATION

const mongo = require('mongodb');

const express = require('express');
const app = express();
const port = 4545;

app.use('/', express.static(__dirname));

// =======================

// LANCEMENT DU SERVEUR

app.listen(port, () => console.log('Listening'));

// =======================

// ALL reqS COME HERE
app.get('/', function(req, res) {
    print(" req = / ")
    });
app.get('/get', function(req, res) {
    print(" req = /get ")
    });
app.get('/post', function(req, res) {
    print(" req = /post ")
    });
app.get('/put', function(req, res) {
    print(" req = /put ")
    });
app.get('/delete', function(req, res) {
    print(" req = /delete ")
    });