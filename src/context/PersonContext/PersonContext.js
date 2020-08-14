import React, { useState } from "react";

const PersonsContext = React.createContext({
	persons: [],
	changePersons: (persons) => {},
});

export const PersonsContextProvider = (props) => {

    const [ persons, setPersons ] = useState([]);
    const changePersons = (persons) => {
        setPersons(persons);
    }
	return (
		<PersonsContext.Provider value={{persons, changePersons }}>
			{props.children}
		</PersonsContext.Provider>
	);
};

export default PersonsContext;
