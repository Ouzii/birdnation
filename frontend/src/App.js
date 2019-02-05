import React from 'react';
import observationService from './services/observations';
import './App.css';
import ObservationForm from './components/ObservationForm';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingPage from './components/ListingPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      observations: null
    }
  }


  async componentDidMount() {
    const obs = await observationService.getAll()
    const localObservations = JSON.parse(window.localStorage.getItem('observations'))
    if (obs !== localObservations && obs.length > 0) {
      window.localStorage.setItem('observations', JSON.stringify(obs))
      await this.setState({ observations: obs })
    } else {
      await this.setState({ observations: localObservations })
    }
  }

  updateObservations(newObservation) {
    const obs = this.state.observations
    obs.push(newObservation)
    window.localStorage.setItem('observations', JSON.stringify(obs))
    this.setState({ observations: obs })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <h1>Birdnation</h1>
            {this.state.observations ?
              <Route
                exact
                path='/'
                render={() => (
                  <ListingPage observations={this.state.observations}
                    key='listingpage' />)}
              />
              :
              <p>No observations</p>
            }
            <Route
              exact
              path='/newobservation'
              render={() => (
                <ObservationForm updateObservations={this.updateObservations.bind(this)}
                  key='newobservation' />)}
            />


          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
