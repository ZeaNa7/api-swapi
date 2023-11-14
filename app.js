// Importing required modules
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
// Importing routes
const filmsRoutes = require('./routes/films');
const peopleRoutes = require('./routes/people');
const planetsRoutes = require('./routes/planets');
const speciesRoutes = require('./routes/species');

// Initializing express app
const app = express();
// Setting up view engine
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Using routes
app.use('/films', filmsRoutes);
app.use('/peoples', peopleRoutes);
app.use('/planets', planetsRoutes);
app.use('/species', speciesRoutes);

// Setting up database connection
const DATABASE_URL = 'mongodb+srv://starwars:yY0t3cQ6odtY8Ncs@starstar.1uealmw.mongodb.net/starwars?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 16743;

// Connecting to the database
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`))) // Starting the server
  .catch((error) => console.log(`${error} did not connect`)); // Error handling for database connection```
