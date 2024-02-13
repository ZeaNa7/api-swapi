import starships from '../models/starships.js';

export function getStarships(req, res) {
    starships.find().then((starship) => {
        res.status(200).json(starship);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function getStarshipById(req, res) {
    starships.find().where('pk').equals(req.params.starshipid).then((starship) => {
    res.status(200).json(starship);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function createStarship(req, res) {
    let pk;
    starships.find().sort({ pk: -1 }).limit(1).then((film) => {
    pk = film[0].pk + 1;
    req.body.pk = pk;
    starships.insertMany(req.body).then((film) => {
      res.status(200).json(film);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  })
  }

  export function updateStarship(req, res) {
    starships.updateMany({ pk: req.params.starshipid }, { $set: req.body }).then((starship) => {
        res.status(200).json(starship);
        }
        ).catch((err) => {
            res.status(500).json({
                error: err
            });
        }
        );
  }

  export function deleteStarship(req, res) {
    starships.deleteOne({ pk: req.params.starshipid }).then((starship) => {
      res.status(200).json({ message: 'Starship successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  }
