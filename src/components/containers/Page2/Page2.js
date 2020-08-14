import React, { useContext, useEffect } from "react";

import PersonsContext from "../../../context/PersonContext/PersonContext";
import FireStore from "../../../firebase/firebase";
import Persons from "../../ui-blocks/Persons/Persons";

const Page2 = (props) => {
	const personsContext = useContext(PersonsContext);
	useEffect(() => {
		FireStore.collection("collection1")
			.get()
			.then((data) => {
				let persons = [];
				data.forEach((e) => {
					persons.push(e.data());
				});
				personsContext.changePersons(persons);
			})
			.catch((err) => {
				console.log("Error occured during fetch Page1 Data");
			});
	}, []);
	return (
		<>
			<Persons personsList={personsContext.persons}></Persons>
		</>
	);
};

export default Page2;
