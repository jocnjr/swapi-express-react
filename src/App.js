import React, { Component } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import './App.css';


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
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Star Wars API - swapi
              </h1>
              <h2 className="subtitle">
                May the force be with you!
              </h2>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns is-multiline'>

              {
                this.state.swpeople.map((person, idx) => {
                  return (
                    <div key={person.name} className='column is-3'>
                      <div className="card">
                        <header className="card-header">
                          <p className="card-header-title">
                            {person.name}
                          </p>
                        </header>
                        <div className="card-content">
                          <div className="content">
                            {this.getFilmsByPerson(person.films)}
                            <br />
                            <time>YOB: {person.birth_year}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
