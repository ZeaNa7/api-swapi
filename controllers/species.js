const Species = require('../models/species')

exports.getSpecies = (req, res) => {
    Species.find().then((specie) => {
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
  