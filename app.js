const mongoose = require('mongoose');
const express = require('express');

const filmsRoutes = require('./routes/films');
const peopleRoutes = require('./routes/people');

const app = express();
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', filmsRoutes);
app.use('/', peopleRoutes);

const DATABASE_URL = 'mongodb+srv://starwars:yY0t3cQ6odtY8Ncs@starstar.1uealmw.mongodb.net/starwars?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 16743;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));