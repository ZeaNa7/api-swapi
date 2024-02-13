// Importing required modules
import { connect } from 'mongoose';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
// Importing routes
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };
config();

import filmsRoutes from './routes/films.js';
import peopleRoutes from './routes/people.js';
import planetsRoutes from './routes/planets.js';
import speciesRoutes from './routes/species.js';
import starshipsRoutes from './routes/starships.js';
import vehiclesRoutes from './routes/vehicles.js';

// Initializing express app
const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));

app.use('/api/films', filmsRoutes);
app.use('/api/peoples', peopleRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/starships', starshipsRoutes);
app.use('/api/vehicles', vehiclesRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Setting up database connection
const DATABASE_URL = 'mongodb+srv://starwars:yY0t3cQ6odtY8Ncs@starstar.1uealmw.mongodb.net/starwars?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 16743;

connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
