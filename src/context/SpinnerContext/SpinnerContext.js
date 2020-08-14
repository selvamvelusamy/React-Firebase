import React, { useState } from 'react';

const SpinnerContext = React.createContext({
    spinner: false,
    showSpinner: (value) => {}
})

export const SpinnerContextProvider = props => {
    const [spinner, setSpinner ] = useState(false);
    const showSpinner = (value) => {
        setSpinner(value)
    }
return (<SpinnerContext.Provider value={{spinner, showSpinner }}>{ props.children }</SpinnerContext.Provider>);
}

export default SpinnerContext;