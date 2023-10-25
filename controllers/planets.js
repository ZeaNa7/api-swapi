const Planet = require('../models/planets')

exports.getPlanets = (req, res) => {
    Planet.find().then((planet) => {
        res.status(200).json(planet);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.getPlanetById = (req, res) => {
    Planet.find().where('pk').equals(req.params.planetid).then((planet) => {
    res.status(200).json(planet);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.createPlanet = (req, res) => {
    Planet.insertMany(req.body).then((planet) => {
      res.status(200).json(planet);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  };
  
  
  exports.updatePlanet = (req, res) => {
    Planet.findOneAndUpdate(
      { _id: req.params.planetid },
      req.body,
      { new: true, useFindAndModify: false },
      (err, planet) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(planet);
      }
    );
  };
  
  exports.deletePlanet = (req, res) => {
    Planet.deleteOne({ pk: req.params.planetid }).then((planet) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  };
  