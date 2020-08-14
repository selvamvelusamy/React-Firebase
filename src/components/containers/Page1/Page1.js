import React, { useEffect } from "react";
import { connect } from "react-redux";

import FireStore from "../../../firebase/firebase";
import Persons from '../../ui-blocks/Persons/Persons';
import { getPersons } from "../../../store/action/action";

const Page1 = props => {
    
    useEffect(() => {
        FireStore.collection('collection1').get()
        .then(data => {
            let persons = [];
            data.forEach(e => {
                persons.push(e.data());
            })
            props.getPersons(persons);  
        })
        .catch(err => {
            console.log('Error occured during fetch Page1 Data');
        })
    }, [props])
	return (
		<>
        <Persons personsList={props.persons}></Persons>
        </>
	);
};

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        getPersons: (persons) => { dispatch(getPersons(persons))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
