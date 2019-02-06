import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import observationService from '../services/observations';
import validateObservation from '../validators/observationValidator';

class ObservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            species: '',
            rarity: 'Common',
            notes: '',
            returnToIndex: false,
            errors: null
        }
    }

    getCurrentPosition = (options = {}) => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
    }

    loadPosition = async () => {
        try {
            const position = await this.getCurrentPosition()
            const { latitude, longitude } = position.coords
            return { latitude, longitude }
        } catch (error) {
            console.log(error)
        }
    }

    addObservation = async (event) => {
        event.preventDefault()
        const position = await this.loadPosition()
        let newObservation = {
            species: this.state.species,
            rarity: this.state.rarity,
            notes: this.state.notes,
            latitude: position.latitude,
            longitude: position.longitude,
            time: new Date()
        }

        let errors = validateObservation(newObservation)

        if (errors.length > 0) {
            this.setState({ errors })
            setTimeout(() => {
                this.setState({ errors: null })
            }, 4000)
            return
        }

        await observationService.create(newObservation)
            .then((savedObservation) =>
                this.props.updateObservations(savedObservation)
            )
            .catch((error) => {
                console.log(error)
                this.props.updateObservations({ id: Math.floor(Math.random() * Math.floor(1000)), ...newObservation })
            })
        this.setState({ returnToIndex: true })

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if (this.state.returnToIndex) {
            return <Redirect to='/' />
        }
        return (
            <div>

                <NavLink to='/'>Cancel</NavLink>
                <br></br>
                <br></br>
                {this.state.errors ?
                    <div>
                        {this.state.errors.map(error =>
                            <div className="alert alert-dismissible alert-danger" key={error}>
                                <button type="button" className="close" onClick={() => this.setState({errors: null})}>&times;</button>
                                <strong>{error}</strong>
                            </div>
                        )}
                    </div>
                    :
                    <div>
                    </div>}
                <form onSubmit={this.addObservation}>
                    <label>Species</label>
                    <br></br>
                    <input name='species' value={this.state.value} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <label>Rarity</label>
                    <br></br>
                    <select name='rarity' value={this.state.rarity} onChange={this.handleChange}>
                        <option key='Common' value='Common'>Common</option>
                        <option key='Rare' value='Rare'>Rare</option>
                        <option key='Extremely rare' value='Extremely rare'>Extremenly rare</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Notes</label>
                    <br></br>
                    <input type='textarea' name='notes' value={this.state.notes} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default ObservationForm