const People = require('../models/people')

exports.getPeople = (req, res) => {
    People.find().then((people) => {
        res.status(200).json(people);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.getPeopleById = (req, res) => {
    People.find().where('pk').equals(req.params.peopleid).then((people) => {
    res.status(200).json(people);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

exports.createPeople = (req, res) => {
    People.insertMany(req.body).then((people) => {
      res.status(200).json(people);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  };
  
  
  exports.updatePeople = (req, res) => {
    People.findOneAndUpdate(
      { _id: req.params.peopleid },
      req.body,
      { new: true, useFindAndModify: false },
      (err, people) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(people);
      }
    );
  };
  
  exports.deletePeople = (req, res) => {
    People.deleteOne({ pk: req.params.peopleid }).then((people) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  };
  