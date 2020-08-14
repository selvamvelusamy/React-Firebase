import React from "react";

const PersonsContext = React.createContext({
	persons: [],
	changePersons: () => {},
});

const contextValue = {};

export const PersonsContextProvider = (props) => (
	<PersonsContext.Provider value={contextValue}>
		{props.children}
	</PersonsContext.Provider>
);

export default PersonsContext;
