import planets from '../models/planets.js'

export function getPlanets(req, res) {
    planets
        .find()
        .then((planet) => {
            res.status(200).json(planet)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function getPlanetById(req, res) {
    planets
        .find()
        .where('pk')
        .equals(req.params.planetid)
        .then((planet) => {
            res.status(200).json(planet)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function createPlanet(req, res) {
    let pk
    planets
        .find()
        .sort({ pk: -1 })
        .limit(1)
        .then((film) => {
            pk = film[0].pk + 1
            req.body.pk = pk
            planets
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

export function updatePlanet(req, res) {
    planets
        .updateMany({ pk: req.params.planetid }, { $set: req.body })
        .then((planet) => {
            res.status(200).json(planet)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}

export function deletePlanet(req, res) {
    planets
        .deleteOne({ pk: req.params.planetid })
        .then((planet) => {
            res.status(200).json({ message: 'People successfully deleted' })
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            })
        })
}
