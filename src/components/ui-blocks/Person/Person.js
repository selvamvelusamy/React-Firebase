import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./Person.css";

const Person = (props) => {

    const history = useHistory();
    const { url } = useRouteMatch();
    const editPersonHandler = () => {
        history.push(`/person/${props.id}?${url.substring(1)}`);
    }

	return (
		<div className="person-container" onClick={editPersonHandler}>
			<Card>
				<CardContent>
					<span className="name">{props.name}</span>
					<span className="place">
						<LocationOnIcon />
						{props.place}
					</span>
				</CardContent>
			</Card>
		</div>
	);
};

export default Person;
