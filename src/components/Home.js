import React from 'react';

const Home = ({ swpeople, getFilmsByPerson }) => {
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
                        {person.name}
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

