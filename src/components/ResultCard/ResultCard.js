import React from 'react'

import './ResultCard.scss';

const ResultCard = (props) => {
return (
  <div className="card resultCard">
    <a href={props.url} className="resultLink" target="_blank">
      <img src={props.imageUrl} className="card-image" alt="card_image"/>
      <div className="card-body">
        <h5 className="card-name">{props.name}</h5>
        <p className="card-text">{props.rating}/5</p>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.phone}</p>
        <p className="card-text">{props.location.address1}</p>
        <p className="card-text">{props.location.city}</p>
        <p className="card-text">{props.location.zip_code}</p>
        <p className="card-text">{props.location.country}</p>
        <p className="card-text">{props.location.state}</p>
      </div>
    </a>
  </div>
)
}
export default ResultCard
