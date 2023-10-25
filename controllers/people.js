const People = require('../models/people')

exports.listAllPeople = (req, res) => {
    People.find().then((people) => {
        res.status(200).json(people);
    }
    ).catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};