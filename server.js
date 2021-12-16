const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send('Hola Mundo');
});

app.listen(4000, (req, res) => {
    console.log('Server on port 4000');
});