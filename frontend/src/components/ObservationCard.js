import { Card, CardBody } from 'react-simple-card';
import Map from './Map';
import React from 'react';

class ObservationCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.observation, extended: false
        }
    }

    toggleExtended() {
        this.setState({ ...this.state, extended: !this.state.extended })
    }

    render() {
        return (
            <div >
                {this.state.extended ?
                    <Card >
                        <div onClick={() => this.toggleExtended()} style={{ cursor: "pointer" }}>
                        <h4>{this.state.species}</h4>
                        
                        <CardBody>
                            <div onClick={() => this.toggleExtended()} style={{ cursor: "pointer" }}>
                            Rarity: {this.state.rarity}<br></br>
                            Location: {this.state.latitude}, {this.state.longitude}<br></br>
                            Notes: {this.state.notes}<br></br>
                            Observed: {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'

                            }).format(new Date(this.state.time))}<br></br>
                            </div>
                            
                        </CardBody>
                        </div>
                        <Map lat={this.state.latitude} lng={this.state.longitude}/>
                    </Card>
                    :
                    <div onClick={() => this.toggleExtended()} style={{ cursor: "pointer" }}>
                    <Card >
                        <h4>{this.state.species}</h4> <br></br>
                        {this.state.notes.substring(0, 15)}...
                    </Card>
                    </div>
                }

            </div>
        )
    }
}

export default ObservationCard