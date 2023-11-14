import vehicles from '../models/vehicles.js';

export function getVehicles(req, res) {
    vehicles.find().then((vehicles) => {
        res.status(200).json(vehicles);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function getVehicleById(req, res) {
    vehicles.find().where('pk').equals(req.params.vehiculeid).then((vehicule) => {
    res.status(200).json(vehicule);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
}

export function createVehicle(req, res) {
    vehicles.insertMany(req.body).then((vehicle) => {
      res.status(200).json(vehicle);
      }
      ).catch((err) => {
          res.status(500).json({
              error: err
          });
      })
  }
  
  
  export function updateVehicle(req, res) {
    vehicles.findOneAndUpdate(
      { _id: req.params.vehicleid },
      req.body,
      { new: true, useFindAndModify: false },
      (err, vehicle) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(vehicle);
      }
    );
  }
  
  export function deleteVehicle(req, res) {
    vehicles.deleteOne({ pk: req.params.vehicleid }).then((vehicle) => {
      res.status(200).json({ message: 'Vehicle successfully deleted' });
      }).catch((err) => {
          res.status(500).json({
              error: err
          });
      }
      );
  }
  