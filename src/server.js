const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello there from Port ${PORT} on the Docker Container!`);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
