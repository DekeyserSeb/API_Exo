const express = require('express');
const app = express();
const port = 80;

app.use('/', express.static(__dirname));

// ==============================================

// ECOUTE

app.listen(port, () => console.log('lauching web srerver'));

// CALLBACKS
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile( __dirname + "/" + 'notepad_input.html');
    });

// ==============================================
