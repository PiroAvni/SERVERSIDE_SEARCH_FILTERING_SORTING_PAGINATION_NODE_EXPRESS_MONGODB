const express = require('express');
const cors = require('cors')


// Import routes
const itemRoutes = require('./routes/items')



require('dotenv').config()
const connectDB = require('./config/db-setup.js')

connectDB()

// Create the Express 
const app = express();





app.use(cors())
app.use(express.json());





//  routes
app.use('/api',itemRoutes);

app.get('/', (req, res) => {
  res.json({ App: 'Welcome to the Server!!' })
})









module.exports = app

