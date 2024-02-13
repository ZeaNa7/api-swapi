import species from '../models/species.js';

export function getSpecies(req, res) {
    species.aggregate([
        {
        $lookup: {
        from: 'peoples',
        localField: 'fields.people',
        foreignField: 'pk',
        as: 'fields.results_people'
        },
    },
    {
        $set: {
            'fields.people': '$fields.results_people',
        }
    },
    {
        $project: {
            'fields.results_people': 0,
        }
    },
    ]).then((specie) => {
        res.status(200).json(specie);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function getSpeciesById(req, res) {
    find().where('pk').equals(req.params.speciesid).then((specie) => {
    res.status(200).json(specie);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function createSpecies(req, res) {
    let pk;
    species.find().sort({ pk: -1 }).limit(1).then((film) => {
    pk = film[0].pk + 1;
    req.body.pk = pk;
    species.insertMany(req.body).then((film) => {
      res.status(200).json(film);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  })
  }

  export function updateSpecies(req, res) {
    species.updateMany({ pk: req.params.speciesid }, { $set: req.body }).then((species) => {
        res.status(200).json(species);
        }
        ).catch((err) => {
            res.status(500).json({
                error: err
            });
        }
        );
  }

  export function   deleteSpecies(req, res) {
    species.deleteOne({ pk: req.params.speciesid }).then((specie) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  }
