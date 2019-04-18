import React from 'react';

const Planets = ({ swplanets, getFilmsByPlanet }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>

          {
            swplanets.map((planet, idx) => {
              return (
                <div key={planet.name} className='column is-3'>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {planet.name}
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {getFilmsByPlanet(planet.films)}
                        <br />
                        <time>Climate: {planet.climate}</time>
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

export default Planets;

