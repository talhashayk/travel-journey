import React from "react";
import locationPin from "../images/location-pin.png";

export default function Journal(props) {
	return (
		<div className="journal">
			<img
				className="journal--image"
				src={props.imageUrl}
				alt="journal card"
			/>
			<div className="journal--details">
				<div className="journal--location">
					<img
						className="journal--pin"
						src={locationPin}
						alt="location pin"
					/>
					<h3 className="journal--country">{props.location}</h3>
					<a
						className="journal--maps--link"
						href={props.googleMapsUrl}
					>
						View on Google Maps
					</a>
				</div>
				<h2 className="journal--title">{props.title}</h2>
				<p className="journal--dates">
					{props.startDate} - {props.endDate}
				</p>
				<p className="journal--info">{props.description}</p>
			</div>
		</div>
	);
}
