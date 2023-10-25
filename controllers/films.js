const films = require('../models/films');
const Films = require('../models/films');

exports.listAllFilms = (req, res) => {
    Films.find().then((films) => {
        res.status(200).json(films);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.createNewFilm = (req, res) => {
  let newFilm = new Films(req.body);
  newFilm.save((err, film) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(film);
  });
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
