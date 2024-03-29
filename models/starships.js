import { Schema, model } from 'mongoose'

const StarshipsSchema = new Schema({
    model: String,
    pk: Number,
    field: {
        name: {
            type: String,
            description:
                'The name of this starship. The common name, such as Death Star.',
        },
        model: {
            type: String,
            description:
                'The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.',
        },
        starship_class: {
            type: String,
            description:
                'The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.',
        },
        manufacturer: {
            type: String,
            description:
                'The manufacturer of this starship. Comma seperated if more than one.',
        },
        cost_in_credits: {
            type: String,
            description: 'The cost of this starship new, in galactic credits.',
        },
        length: {
            type: String,
            description: 'The length of this starship in meters.',
        },
        crew: {
            type: String,
            description:
                'The number of personnel needed to run or pilot this starship.',
        },
        passengers: {
            type: String,
            description:
                'The number of non-essential people this starship can transport.',
        },
        max_atmosphering_speed: {
            type: String,
            description:
                'The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.',
        },
        hyperdrive_rating: {
            type: String,
            description: 'The class of this starships hyperdrive.',
        },
        MGLT: {
            type: String,
            description:
                'The Maximum number of Megalights this starship can travel in a standard hour. A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.',
        },
        cargo_capacity: {
            type: String,
            description:
                'The maximum number of kilograms that this starship can transport.',
        },
        consumables: {
            type: String,
            description:
                'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.',
        },
        films: {
            type: 'array',
            description:
                'An array of Film URL Resources that this starship has appeared in.',
        },
        pilots: {
            type: 'array',
            description:
                'An array of People URL Resources that this starship has been piloted by.',
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

export default model('Starships', StarshipsSchema)
