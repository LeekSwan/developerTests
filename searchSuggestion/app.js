const express = require('express');
const app = express();
const port = 5050;
const path = require('path');


app.use(express.static('View'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/View/index.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
