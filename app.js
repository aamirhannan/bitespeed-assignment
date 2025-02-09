require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})