import people from '../models/people.js'

export function getPeople(req, res) {
    people
        .find()
        .then((people) => {
            res.status(200).json(people)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function getPeopleById(req, res) {
    people
        .find()
        .where('pk')
        .equals(req.params.peopleid)
        .then((people) => {
            res.status(200).json(people)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function createPeople(req, res) {
    let pk
    people
        .find()
        .sort({ pk: -1 })
        .limit(1)
        .then((film) => {
            pk = film[0].pk + 1
            req.body.pk = pk
            people
                .insertMany(req.body)
                .then((film) => {
                    res.status(200).json(film)
                })
                .catch((err) => {
                    res.status(500).json({
                        error: err,
                    })
                })
        })
}

export function updatePeople(req, res) {
    people
        .updateMany({ pk: req.params.peopleid }, { $set: req.body })
        .then((people) => {
            res.status(200).json(people)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function deletePeople(req, res) {
    people
        .deleteOne({ pk: req.params.peopleid })
        .then((people) => {
            res.status(200).json({ message: people })
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}
