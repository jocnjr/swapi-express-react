import React, { Component } from 'react';


class PeopleDetail extends Component {

  render() {
    console.log(this.props)
    const { params } = this.props.match;
    const { location } = this.props.location;
    const foundPeople = this.props.getPeople(params.id, location);

    return (
      <div className={this.props.modalClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{foundPeople.name}</p>
            <button className="delete" aria-label="close" onClick={this.props.toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <ul>
              <li>height: {foundPeople.height}</li>
              <li>mass: {foundPeople.mass}</li>
              <li>hair color: {foundPeople.hair_color}</li>
              <li>skin color: {foundPeople.skin_color}</li>
              <li>eye color: {foundPeople.eye_color}</li>
              <li>gender: {foundPeople.gender}</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default PeopleDetail;