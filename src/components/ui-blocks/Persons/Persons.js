import React from "react";

import Person from "../Person/Person";
import './Persons.css';

const Persons = (props) => {
	let persons = props.personsList.map((person, i) => (
		<Person key={person.id} id={person.id} name={person.name} place={person.place}></Person>
	));
	return <div className="persons-container">{persons}</div>;
};

export default Persons;
