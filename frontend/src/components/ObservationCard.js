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

    resize = () => {
        this.setState(this.state)
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    toggleExtended() {
        this.setState({ ...this.state, extended: !this.state.extended })
    }

    render() {
        return (
            <div>
                {this.state.extended ?
                    <Card className='cardReact'>
                        <div onClick={() => this.toggleExtended()} >
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
                    <div onClick={() => this.toggleExtended()} >
                    <Card className='cardReact'>
                        <h4>{this.state.species}</h4>
                        <p>{this.state.rarity}</p><br></br>
                        {this.state.notes.length > 15 ? 
                        <p>{this.state.notes.substring(0, 15)}...</p>
                        :
                        <p>{this.state.notes}</p>
                        }
                    </Card>
                    </div>
                }

            </div>
        )
    }
}

export default ObservationCard