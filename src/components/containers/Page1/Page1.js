import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";

import FireStore from "../../../firebase/firebase";
import Persons from "../../ui-blocks/Persons/Persons";
import { getPersons } from "../../../store/action/action";
import Spinner from "../../ui-blocks/Spinner/Spinner";
import SpinnerContext from "../../../context/SpinnerContext/SpinnerContext";
import NavBar from "../../ui-blocks/NavBar/NavBar";

const Page1 = (props) => {
	const spinnerContext = useContext(SpinnerContext);

	useEffect(() => {
		spinnerContext.showSpinner(true);
		FireStore.collection("collection1")
			.get()
			.then((data) => {
				let persons = [];
				data.forEach((e) => {
					persons.push({ ...e.data(), id: e.id });
				});
				props.getPersons(persons);
				spinnerContext.showSpinner(false);
			})
			.catch((err) => {
				console.log("Error occured during fetch Page1 Data");
			});
	}, []);
	return (
		<>
			{spinnerContext.spinner && <Spinner />}
            <NavBar></NavBar>
			<Persons personsList={props.persons}></Persons>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		persons: state.persons,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPersons: (persons) => {
			dispatch(getPersons(persons));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
