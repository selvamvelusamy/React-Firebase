import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import "./Person.css";

const Person = (props) => (
	<div className="person-container">
		<Card>
			<CardContent>
				<span className="name">{props.name}</span>
				<span className="place"><LocationOnIcon />{props.place}</span>
			</CardContent>
		</Card>
	</div>
);

export default Person;
