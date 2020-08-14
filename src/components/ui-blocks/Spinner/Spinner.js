import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import './Spinner.css';

const Spinner = () => {
    return(
        <Backdrop open={true}>
            <CircularProgress />
        </Backdrop>
    );
}

export default Spinner;
