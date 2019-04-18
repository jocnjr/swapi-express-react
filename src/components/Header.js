import React from 'react';
import NavBar from './NavBar';

const Header = () => {

  return (
      <div>
        <NavBar />
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
      </div>
  )
}

export default Header;