import { Schema, model } from 'mongoose'

const VehiclesSchema = new Schema({
    model: String,
    pk: Number,
    field: {
        name: {
            type: String,
            description:
                'The name of this vehicle. The common name, such as Sand Crawler.',
        },
        model: {
            type: String,
            description:
                'The model or official name of this vehicle. Such as All Terrain Attack Transport.',
        },
        vehicle_class: {
            type: String,
            description: 'The class of this vehicle, such as Wheeled.',
        },
        manufacturer: {
            type: String,
            description:
                'The manufacturer of this vehicle. Comma seperated if more than one.',
        },
        cost_in_credits: {
            type: String,
            description: 'The cost of this vehicle new, in galactic credits.',
        },
        length: {
            type: String,
            description: 'The length of this vehicle in meters.',
        },
        crew: {
            type: String,
            description:
                'The number of personnel needed to run or pilot this vehicle.',
        },
        passengers: {
            type: String,
            description:
                'The number of non-essential people this vehicle can transport.',
        },
        max_atmosphering_speed: {
            type: String,
            description: 'The maximum speed of this vehicle in atmosphere.',
        },
        cargo_capacity: {
            type: String,
            description:
                'The maximum number of kilograms that this vehicle can transport.',
        },
        consumables: {
            type: String,
            description:
                'The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.',
        },
        films: {
            type: Array,
            description:
                'An array of Film URL Resources that this vehicle has appeared in.',
        },
        pilots: {
            type: Array,
            description:
                'An array of People URL Resources that this vehicle has been piloted by.',
        },
        url: {
            type: String,
            format: 'uri',
            description: 'The hypermedia URL of this resource.',
        },
        created: {
            type: String,
            format: 'date-time',
            description:
                'The ISO 8601 date format of the time that this resource was created.',
        },
        edited: {
            type: String,
            format: 'date-time',
            description:
                'the ISO 8601 date format of the time that this resource was edited.',
        },
    },
})

export default model('Vehicles', VehiclesSchema)
