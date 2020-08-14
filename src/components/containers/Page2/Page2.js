import React, { useContext, useEffect } from "react";

import PersonsContext from "../../../context/PersonContext/PersonContext";
import FireStore from "../../../firebase/firebase";
import Persons from "../../ui-blocks/Persons/Persons";
import SpinnerContext from "../../../context/SpinnerContext/SpinnerContext";
import Spinner from "../../ui-blocks/Spinner/Spinner";

const Page2 = (props) => {
	const spinnerContext = useContext(SpinnerContext);
	const personsContext = useContext(PersonsContext);
	useEffect(() => {
		spinnerContext.showSpinner(true);
		FireStore.collection("collection2")
			.get()
			.then((data) => {
				let persons = [];
				data.forEach((e) => {
					persons.push({ ...e.data(), id: e.id });
				});
				personsContext.changePersons(persons);
				spinnerContext.showSpinner(false);
			})
			.catch((err) => {
				console.log("Error occured during fetch Page1 Data");
			});
	}, []);
	return (
		<>
			{spinnerContext.spinner && <Spinner />}
			<Persons personsList={personsContext.persons}></Persons>
		</>
	);
};

export default Page2;
