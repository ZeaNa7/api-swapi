import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';

import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

import authRoute from './routes/auth.js';
import filmsRoutes from './routes/films.js';
import peopleRoutes from './routes/people.js';
import planetsRoutes from './routes/planets.js';
import speciesRoutes from './routes/species.js';
import starshipsRoutes from './routes/starships.js';
import vehiclesRoutes from './routes/vehicles.js';
import sentry from './sentry.js';

const app = express();
config();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(sentry);

app.use('/api/authenticate', authRoute);
app.use('/api/films', filmsRoutes);
app.use('/api/peoples', peopleRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/starships', starshipsRoutes);
app.use('/api/vehicles', vehiclesRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT|| 16743;

connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
