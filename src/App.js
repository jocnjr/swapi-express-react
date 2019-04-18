import React, { Component } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Home from './components/Home';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      swpeople: [],
      swfilms: [],
      swplanets: [],
      swspecies: [],
      swvehicles: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/')
    .then(response => {
      // console.log(response.data.results);
      this.setState({
        swpeople: response.data.results
      })
    })
    .catch(err => console.log('error: ', err))
  
    axios.get('http://localhost:8000/films')
    .then(response => {
      // console.log(response.data.results);
      this.setState({
        swfilms: response.data.results
      })
    })
    .catch(err => console.log('error: ', err))

    axios.get('http://localhost:8000/planets')
    .then(response => {
      // console.log(response.data.results);
      this.setState({
        swplanets: response.data.results
      })
    })
    .catch(err => console.log('error: ', err))
  
    axios.get('http://localhost:8000/species')
    .then(response => {
      // console.log(response.data.results);
      this.setState({
        swspecies: response.data.results
      })
    })
    .catch(err => console.log('error: ', err))
  
    axios.get('http://localhost:8000/vehicles')
    .then(response => {
      // console.log(response.data.results);
      this.setState({
        swvehicles: response.data.results
      })
    })
    .catch(err => console.log('error: ', err))
  }

  getFilmsByPerson = filmsPerson => {
    const filmsPersonIds = filmsPerson.map(filmUrl => Number(filmUrl.match(/[0-9]/gi)[0]))

    return this.state.swfilms.map(film => {
      if (filmsPersonIds.includes(film.episode_id)) {
        return <li key={film.episode_id}>{film.title}</li>
      } 
    })
  }

  getFilmsByPlanet = filmsPlanet => {
    const filmsPlanetIds = filmsPlanet.map(filmUrl => Number(filmUrl.match(/[0-9]/gi)[0]))

    return this.state.swfilms.map(film => {
      if (filmsPlanetIds.includes(film.episode_id)) {
        return <li key={film.episode_id}>{film.title}</li>
      } 
    })
  }

  getFilmsByVehicle = filmsVehicle => {
    const filmsVehicleIds = filmsVehicle.map(filmUrl => Number(filmUrl.match(/[0-9]/gi)[0]))

    return this.state.swfilms.map(film => {
      if (filmsVehicleIds.includes(film.episode_id)) {
        return <li key={film.episode_id}>{film.title}</li>
      } 
    })
  }

  getFilmsBySpecie = filmsSpecie => {
    const filmsSpecieIds = filmsSpecie.map(filmUrl => Number(filmUrl.match(/[0-9]/gi)[0]))

    return this.state.swfilms.map(film => {
      if (filmsSpecieIds.includes(film.episode_id)) {
        return <li key={film.episode_id}>{film.title}</li>
      } 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Home swpeople={this.state.swpeople} getFilmsByPerson={this.getFilmsByPerson} />} />
          <Route path='/planets' render={() => <Planets swplanets={this.state.swplanets} getFilmsByPlanet={this.getFilmsByPlanet} /> } />
          <Route path='/species' render={() => <Species swspecies={this.state.swspecies} getFilmsBySpecie={this.getFilmsBySpecie} /> } />
          <Route path='/vehicles' render={() => <Vehicles swvehicles={this.state.swvehicles} getFilmsByVehicle={this.getFilmsByVehicle} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
