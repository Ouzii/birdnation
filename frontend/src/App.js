import React from 'react';
import ObservationCard from './components/ObservationCard';
import observationService from './services/observations';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      observations: null,
      sortedBy: 'species'
    }
  }


  async componentDidMount() {
    const obs = await observationService.getAll();
    const localObservations = JSON.parse(window.localStorage.getItem('observations'));
    if (obs !== localObservations) {
      window.localStorage.setItem('observations', JSON.stringify(obs));
    }
    if (this.state.observations !== obs) {
      this.setState({ observations: obs })
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
      console.log(position)
      return { latitude, longitude }
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div>
        <h1>Birdnation</h1>
        <button onClick={() => window.alert("To be implemented")}>Add a new observation</button>
        <br></br>
        <br></br>
        <button onClick={() => window.alert("To be implemented")}>Sort by: {this.state.sortedBy}</button>
        <br></br>
        <br></br>
        {this.state.observations ?
          this.state.observations.map(obs => <ObservationCard observation={obs} key={obs.id}/>)
          :
          <p>No observations</p>}
      </div>
    )
  }
}

export default App
