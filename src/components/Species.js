import React from 'react';
import { Link } from 'react-router-dom';

const Species = ({ swspecies, getFilmsBySpecie, toggleModal }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>

          {
            swspecies.map((specie, idx) => {
              return (
                <div key={specie.name} className='column is-3'>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                      <Link onClick={toggleModal} to={`/species/${idx}`}>{specie.name}</Link>
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {getFilmsBySpecie(specie.films)}
                        <br />
                        <time>Class: {specie.classification}</time>
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

export default Species;

