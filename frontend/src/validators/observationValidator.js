import validator from 'validator'

const validateObservation = (observation) => {
    let errorArray = []

    errorArray = errorArray.concat(validateSpecies(observation.species), validateNotes(observation.notes))

    let errors = []

    errorArray.forEach(error => {
        if (error) {
            errors = errors.concat(error)
        }
    })
    return errors
}

const validateSpecies = (species) => {
    if(validator.isEmpty(species.toString()) || validator.isNumeric(species) || species.length > 60) {
        return 'Observation has to be 1-60 characters long and must not be numeric'
    }
    return
}

const validateNotes = (notes) => {
    if(notes.length > 600) {
        return 'Notes are too long, maximum character length is 600'
    }
    return
}

export default validateObservation