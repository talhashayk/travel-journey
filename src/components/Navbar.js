import React from "react";
import travelJournalLogo from "../images/travel-journal-logo.png";

export default function Navbar() {
	return (
		<nav className="nav--bar">
			<img
				className="nav--logo"
				src={travelJournalLogo}
				alt="travel journal"
			/>
			<h1 className="nav--title">my travel journal.</h1>
		</nav>
	);
}
