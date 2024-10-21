import React from "react";
import './artcard.css';

const Artcard = ({src, title, author, link_title, link}) => {
	return (
		<div className="Artcard">
			<img className="art-img" src={src} />
			<h3 href = {link}>{title}</h3>
		</div>
	)
}

export default Artcard;
