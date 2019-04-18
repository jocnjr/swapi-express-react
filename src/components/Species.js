import React from 'react';

const Species = ({ swspecies, getFilmsBySpecie }) => {
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
                        {specie.name}
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

