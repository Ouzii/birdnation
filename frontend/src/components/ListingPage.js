import React from 'react';
import ObservationCard from './ObservationCard';
import { NavLink } from 'react-router-dom';

class ListingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            observations: this.props.observations,
            sortedBy: ['time (newest)', 'time (oldest)', 'species', 'rarity'],
            sortNo: 0
        }

    }
    componentDidMount() {
        this.sortObservations()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({ observations: nextProps.observations })
            this.sortObservations()
        }
    }

    sortObservations() {
        const sortWith = this.state.sortedBy[this.state.sortNo];
        let sortedObservations = this.state.observations
        switch (sortWith) {
            case 'time (newest)':
                sortedObservations.sort((a, b) => {
                    if (new Date(a.time) > new Date(b.time)) {
                        return -1
                    } else if (new Date(a.time) < new Date(b.time)) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            case 'time (oldest)':
                sortedObservations.sort((a, b) => {
                    if (new Date(a.time) < new Date(b.time)) {
                        return -1
                    } else if (new Date(a.time) > new Date(b.time)) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            case 'species':
                sortedObservations.sort((a, b) => {
                    if (a.species.toString().toUpperCase() < b.species.toString().toUpperCase()) {
                        return -1
                    } else if (a.species.toString().toUpperCase() > b.species.toString().toUpperCase()) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            case 'rarity':
                sortedObservations.sort((a, b) => {
                    if (a.rarity.toString().toUpperCase() < b.rarity.toString().toUpperCase()) {
                        return -1
                    } else if (a.rarity.toString().toUpperCase() > b.rarity.toString().toUpperCase()) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break
            default:
                break
        }

        this.setState({ observations: sortedObservations })
    }

    async changeSorting() {
        if (this.state.sortNo < 3) {
            await this.setState({ sortNo: this.state.sortNo + 1 })
        } else {
            await this.setState({ sortNo: 0 })
        }
        this.sortObservations()
    }
    render() {
        return (
            <div>
                <NavLink to='/newobservation'>New observation</NavLink>
                <br></br>
                <br></br>
                <button onClick={() => this.changeSorting()}>Sort by: {this.state.sortedBy[this.state.sortNo]}</button>
                <br></br>
                <br></br>
                {this.state.observations.map(obs => <ObservationCard observation={obs} key={obs.id} />)}

            </div>
        )
    }
}

export default ListingPage