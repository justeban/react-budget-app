'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
app.use(express.static('./build'));
app.listen(port, () => console.log(`Listening on port ${port}`));