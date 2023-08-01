require('dotenv').config();
const express = require('express');
const cors = require('cors');


require('dotenv').config()

const app = require('./app')

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})