import React from 'react';
import observationService from './services/observations';
import './App.css';
import ObservationForm from './components/ObservationForm';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import ListingPage from './components/ListingPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      observations: null
    }
  }


  componentWillUnmount() {
    window.removeEventListener('postCache')
  }

  async componentDidMount() {
    window.addEventListener('postCache', async () => {
      if (this.state.observations) {
          let obs = this.state.observations
          let postedObs = JSON.parse(window.localStorage.getItem('postedObs'))
          const newStateObservations = [postedObs, ...obs]
          await this.setState({ observations: newStateObservations })
          window.localStorage.removeItem('postedObs')
      }
    })
    let obs = []
    obs = await observationService.getAll()
      .catch(error => {
        return JSON.parse(window.localStorage.getItem('observations'))
      })
    const localObservations = JSON.parse(window.localStorage.getItem('observations'))
    if (obs !== localObservations && obs.length > 0) {
      window.localStorage.setItem('observations', JSON.stringify(obs))
      await this.setState({ observations: obs })
    } else {
      if (localObservations) {
        await this.setState({ observations: localObservations })
      } else {
        await this.setState({ observations: [] })
      }
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
            {this.state.observations && this.state.observations.length > 0 ?
              <Route
                exact
                path='/'
                render={() => (
                  <ListingPage observations={this.state.observations}
                    key='listingpage' />)}
              />
              :
              <Route
                exact
                path='/'
                render={() => (
                  <div>
                    <NavLink to='/newobservation'>New observation</NavLink>
                    <br></br>
                    <br></br>
                    <p>No observations</p>
                  </div>
                )}
              />

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
