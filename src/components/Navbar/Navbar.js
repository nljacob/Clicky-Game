import React from "react";
// import "./Navbar.css";

const Navbar = (props) => (
	<nav className="navbar">
		<span className="navbar-text cupcake-score">
			Score: <span>{props.score} | </span> 
      		Top Score: <span>{props.topScore}</span>
		</span>
	</nav>
)

export default Navbar; 