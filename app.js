const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, my name is Esteban Julio Ricardo Montoya Gonzales De La Rosa Ramirez'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
