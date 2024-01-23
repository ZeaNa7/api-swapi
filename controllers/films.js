import films from '../models/films.js';

export function listAllFilms(req, res) {
  films.aggregate([
    {
      $lookup: {
      from: 'peoples',
      localField: 'fields.characters',
      foreignField: 'pk',
      as: 'fields.results_characters'
    },
  },
  {
    $lookup: {
    from: 'planets',
    localField: 'fields.planets',
    foreignField: 'pk',
    as: 'fields.results_planets'
  },
},
{
  $lookup: {
  from: 'species',
  localField: 'fields.species',
  foreignField: 'pk',
  as: 'fields.results_species'
},
},
{
  $lookup: {
  from: 'starships',
  localField: 'fields.starships',
  foreignField: 'pk',
  as: 'fields.results_starships'
},
},
{
  $lookup: {
  from: 'vehicles',
  localField: 'fields.vehicles',
  foreignField: 'pk',
  as: 'fields.results_vehicles'
},
},
{
  $set: {
    'fields.characters': '$fields.results_characters',
    'fields.planets': '$fields.results_planets',
    'fields.species': '$fields.results_species',
    'fields.starships': '$fields.results_starships',
    'fields.vehicles': '$fields.results_vehicles',
  }
},
{
  $project: {
    'fields.results_characters': 0,
    'fields.results_planets': 0,
    'fields.results_species': 0,
  }
},
  ])
  .then((films) => {
      res.status(200).json(films);
  }
  ).catch((err) => {
      res.status(500).json({
          error: err
      });
  })
}

export function createFilm(req, res) {
  let pk;
  films.find().sort({ pk: -1 }).limit(1).then((film) => {
    pk = film[0].pk + 1;
    req.body.pk = pk;
    films.insertMany(req.body).then((film) => {
      res.status(200).json(film);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  })
}

export function getFilmById(req, res) {
  films.find().where('pk').equals(req.params.filmid).then((film) => {
    res.status(200).json(film);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function updateFilm(req, res) {
  films.findOneAndUpdate(
    { id: req.params.filmid },
    req.body,
    { new: true, useFindAndModify: false }
  )
    .then((film) => {
      res.status(200).json(film);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}


export function deleteFilm(req, res) {
  films.deleteOne({ pk: req.params.filmid }).then((film) => {
    res.status(200).json({ message: 'Film successfully deleted' });
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    }
    );
}
