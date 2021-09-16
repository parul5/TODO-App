const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in starting server: ${err}`);
        return;
    }

    console.log(`Starting server on port ${port}`);
});
