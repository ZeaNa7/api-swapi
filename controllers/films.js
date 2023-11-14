const Films = require('../models/films');

exports.listAllFilms = (req, res) => {
  Films.aggregate([
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
};

exports.createNewFilm = (req, res) => {
  Films.insertMany(req.body).then((film) => {
    res.status(200).json(film);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.getFilm = (req, res) => {
  Films.find().where('pk').equals(req.params.filmid).then((film) => {
    res.status(200).json(film);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.updateFilm = (req, res) => {
  Films.findOneAndUpdate(
    { _id: req.params.filmid },
    req.body,
    { new: true, useFindAndModify: false },
    (err, film) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(film);
    }
  );
};

exports.deleteFilm = (req, res) => {
  Films.deleteOne({ pk: req.params.filmid }).then((film) => {
    res.status(200).json({ message: 'Film successfully deleted' });
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    }
    );
};
