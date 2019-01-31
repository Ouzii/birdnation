import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: null
    }
  }

  async componentWillMount() {
    const pos = await this.loadPosition()
    this.setState({position: pos})
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
      <p>Location: {this.state.position ? this.state.position.latitude+", "+this.state.position.longitude : "Not available"}</p>
    );
  }
}

export default App;
