const mongoose = require('mongoose');
const express = require('express');

const app = express();
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CONNECTION_URL = 'mongodb+srv://starwars:yY0t3cQ6odtY8Ncs@starstar.1uealmw.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 16743;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));