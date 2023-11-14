const Species = require('../models/species')

exports.getSpecies = (req, res) => {
    Species.aggregate([
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
};

exports.getSpeciesById = (req, res) => {
    Species.find().where('pk').equals(req.params.speciesid).then((specie) => {
    res.status(200).json(specie);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.createSpecies = (req, res) => {
    Species.insertMany(req.body).then((specie) => {
      res.status(200).json(specie);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  };
  
  
  exports.updateSpecies = (req, res) => {
    Species.findOneAndUpdate(
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
  };
  
  exports.deleteSpecies = (req, res) => {
    Species.deleteOne({ pk: req.params.speciesid }).then((specie) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  };
  