import people from '../models/people.js';

export function getPeople(req, res) {
    people.find().then((people) => {
        res.status(200).json(people);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function getPeopleById(req, res) {
    people.find().where('pk').equals(req.params.peopleid).then((people) => {
    res.status(200).json(people);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function createPeople(req, res) {
    people.insertMany(req.body).then((people) => {
      res.status(200).json(people);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  }
  
  
  export function   updatePeople(req, res) {
    people.findOneAndUpdate(
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
  }
  
  export function   deletePeople(req, res) {
    people.deleteOne({ pk: req.params.peopleid }).then((people) => {
      res.status(200).json({ message: 'People successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  }
  