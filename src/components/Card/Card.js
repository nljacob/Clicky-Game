import React from "react";
import {Image} from "react-bootstrap";
// import "./Card.css";

const Card = props => (
  <div className="cupcake col-xs-12">
  	<a onClick={() => props.click(props.name)}>
    	<Image src={props.source} alt={props.name} thumbnail/>
    </a>
  </div>
);

export default Card;