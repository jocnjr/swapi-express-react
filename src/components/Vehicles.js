import React from 'react';

const Vehicles = ({ swvehicles, getFilmsByVehicle }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>

          {
            swvehicles.map((vehicle, idx) => {
              return (
                <div key={vehicle.name} className='column is-3'>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {vehicle.name}
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {getFilmsByVehicle(vehicle.films)}
                        <br />
                        <time>Class: {vehicle.vehicle_class}</time>
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

export default Vehicles;

