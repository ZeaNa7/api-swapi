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
    species.insertMany(req.body).then((specie) => {
      res.status(200).json(specie);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  }
  
  
  export function   updateSpecies(req, res) {
    species.findOneAndUpdate(
      { _id: req.params.speciesid },
      req.body,
      { new: true, useFindAndModify: false },
      (err, specie) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(specie);
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
  