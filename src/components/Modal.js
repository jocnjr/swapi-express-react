import React, { Component } from 'react';
// import { Redirect, withRouter } from 'react-router-dom';

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalActive: true,
      modalClass: 'modal is-active',
    }
  }


  deleteModal = () => {
    const { pathname } = this.props.history.location;
    let appSection = pathname.split('/')[1];

    this.setState({
      isModalActive: !this.state.isModalActive,
      modalClass: 'modal'
    })  
    
    if (appSection === 'people') appSection = '';
    this.props.history.push(`/${appSection}`);  
  }

  render() {
    const { params } = this.props.match;
    const { pathname } = this.props.history.location;
    const foundDetail = this.props.getDetail(params.id, pathname);

    const foundDetailBody = () => {
      
      return Object.keys(foundDetail).map(key => {
        const liElement = <li key={key}>{key}: {foundDetail[key]}</li>;
        const liElementWithLink = <li key={key}>{key}: <a href={foundDetail[key]}>{foundDetail[key]}</a></li>;

        if (key !== 'name' && typeof foundDetail[key] !== 'object') {
          if (foundDetail[key].match('http') !== null) {
            return liElementWithLink;
          } else {
            return liElement;
          }
        }
      });

    }


    return (
      <div className='modal is-active'>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{foundDetail.name}</p>
            <button className="delete" aria-label="close" onClick={this.deleteModal}></button>
          </header>
          <section className="modal-card-body">
            <ul>
              {foundDetailBody()}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

// export default withRouter(Modal);

export default Modal;