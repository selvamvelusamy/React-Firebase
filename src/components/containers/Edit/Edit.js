import React, { useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import  Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import FireStore from "../../../firebase/firebase";
import './Edit.css';

const Edit = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const { id } = useParams();
    const { search } = useLocation();
    const history = useHistory();
    useEffect(() => {
        FireStore.collection(`collection${search.substring(1) === 'page1' ? '1':'2'}`).doc(id).get()
        .then(data => {
            let person = data.data();
            setName(person.name);
            setPlace(person.place);
        })
    }, [id, search])

    const saveChangesHandler = () => {
        FireStore.collection(`collection${search.substring(1) === 'page1' ? '1':'2'}`).doc(id).update({
            name,
            place
        })
        .then(d => {
            history.goBack();
        })
    } 

	return (
		<>
			<div className="title-container">
                Edit Contact
            </div>
            <div className="data-container">
                <form>
                <TextField value={name} onChange={(e) => {setName(e.target.value)}} label="Name" name="name" variant="outlined" />
                <TextField value={place} onChange={(e) => {setPlace(e.target.value)}} label="Place" name="place" variant="outlined" />
                </form>
            </div>
            <div className="action-buttons">
                <Button color="secondary" variant="outlined" onClick={saveChangesHandler}>Save Changes</Button>
                <Button color="secondary" variant="outlined" onClick={()=>{history.goBack()}}>Go Back</Button>
            </div>
		</>
	);
};

export default Edit;
