import React, { Component } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      swpeople: [],
      swfilms: []
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
  }

  getFilmsByPerson = filmsPerson => {

    const filmsPersonIds = filmsPerson.map(filmUrl => Number(filmUrl.match(/[0-9]/gi)[0]))

    return this.state.swfilms.map(film => {
      if (filmsPersonIds.includes(film.episode_id)) {
        return <li key={film.episode_id}>{film.title}</li>
      } 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Home swpeople={this.state.swpeople} getFilmsByPerson={this.getFilmsByPerson} />
      </div>
    );
  }
}

export default App;
