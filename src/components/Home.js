import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ swpeople, getFilmsByPerson, toggleModal }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>

          {
            swpeople.map((person, idx) => {
              return (
                <div key={person.name} className='column is-3'>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <Link onClick={toggleModal} to={`/people/${idx}`}>{person.name}</Link>
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {getFilmsByPerson(person.films)}
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
  )
}

export default Home;

