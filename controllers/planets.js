import planets from '../models/planets.js';

export function getPlanets(req, res) {
    planets.find().then((planet) => {
        res.status(200).json(planet);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function getPlanetById(req, res) {
    planets.find().where('pk').equals(req.params.planetid).then((planet) => {
    res.status(200).json(planet);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function createPlanet(req, res) {
    planets.insertMany(req.body).then((planet) => {
      res.status(200).json(planet);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  }
  
  
  export function   updatePlanet(req, res) {
    planets.findOneAndUpdate(
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
  }
  
  export function   deletePlanet(req, res) {
    planets.deleteOne({ pk: req.params.planetid }).then((planet) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  }
  