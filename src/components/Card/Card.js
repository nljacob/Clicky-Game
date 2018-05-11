import React, { Component } from 'react';
import "./Card.css"

const Card = (props) => (
<div className="col-sm-4 chi-card" onClick={() => props.cardClickedOn(props.id)}>
    <img src={props.image}/>
    <p>{props.name}</p>
</div>
);

export default Card;